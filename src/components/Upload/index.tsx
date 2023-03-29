import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDropzone } from "react-dropzone";

import { fireBaseStorage } from "../../assets/ts/firebase";

import {
  DragContainer,
  ErrorFiles,
  FilesPreview,
  IframeBox,
  Image,
  SubmitButton,
} from "./styles";

const Upload: React.FC = () => {
  const [filePreview, setFilePreview] = useState<any>();
  const [fileType, setFileType] = useState<string>();
  const [reject, setReject] = useState<boolean>(false);

  const [imgURL, setImgURL] = useState<string>("");
  const [progress, setProgress] = useState(0);

  interface IFormInput {
    archive: File;
  }

  const methods = useForm<IFormInput>();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
      "application/pf": [".pdf"],
    },
    //função que dispara quando algo é dropado na dropzone
    onDropAccepted: (acceptedFiles) => {
      methods.setValue("archive", acceptedFiles[0]);
      setFilePreview(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
      setFileType(acceptedFiles[0].type);
      setReject(false);
    },
    onDropRejected: () => {
      methods.resetField("archive");
      setReject(true);
      setFilePreview(undefined);
      setFileType(undefined);
    },
  });

  const Preview = (
    <div>
      {fileType === "application/pdf" ? (
        <IframeBox title="preview" src={filePreview?.preview} />
      ) : (
        <Image alt="preview documento" src={filePreview?.preview} />
      )}
    </div>
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const file = data.archive;
    if (file) {
      const storageRef = ref(fireBaseStorage, `archives/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
            setImgURL(url);
          });
        }
      );
    }
  };

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DragContainer {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Solte seu arquivo aqui ou click para seleciona-los ...</p>
        </DragContainer>
        <FilesPreview>{filePreview?.preview ? Preview : ""}</FilesPreview>
        <ErrorFiles>
          {reject && (
            <p>
              O arquivo que você tentou enviar não são aceitos, note que apenas
              é aceito um único arquivo podendo ter as seguintes extensões
              (.pdf, .png, .jpg, .jpeg)
            </p>
          )}
        </ErrorFiles>
        {filePreview && <SubmitButton type="submit">Enviar</SubmitButton>}
      </form>
    </>
  );
};

export default Upload;
