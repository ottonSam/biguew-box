import React, { useState } from "react";

import { useDropzone } from "react-dropzone";
import { DragContainer, FilesPreview, IframeBox, Image } from "./styles";

const Upload: React.FC = () => {
  const [file, setFile] = useState<any>({});
  const [fileType, setFileType] = useState<string>();
  const [reject, setReject] = useState<boolean>(false);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
      "application/pf": [".pdf"],
    },
    //função que dispara quando algo é dropado na dropzone
    onDropAccepted: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
      setFileType(acceptedFiles[0].type);
      setReject(false);
    },
    onDropRejected: () => {
      setReject(true);
      setFile(undefined);
      setFileType(undefined);
    },
  });

  const Preview = (
    <div>
      {fileType === "application/pdf" ? (
        <IframeBox title="preview" src={file.preview} />
      ) : (
        <Image alt="preview documento" src={file.preview} />
      )}
    </div>
  );

  console.log(file);

  return (
    <>
      <DragContainer {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drop some files here ...</p>
      </DragContainer>
      <FilesPreview>{file.preview ? Preview : ""}</FilesPreview>
      <div>
        {reject && <p>Os arquivos que você tentou enviar não são aceitos</p>}
      </div>
    </>
  );
};

export default Upload;
