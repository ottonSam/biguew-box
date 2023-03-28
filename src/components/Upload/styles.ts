import styled from "styled-components";

export const Container = styled.div``;

export const IframeBox = styled.iframe`
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const Image = styled.img`
  width: 100%;
  max-height: 100px;
`;
export const FilesPreview = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const DragContainer = styled.div`
  padding: 20px 10px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px dashed ${(props) => props.theme.colors.text};
  border-radius: 10px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 15px;
  margin: auto;
  margin-top: 1rem;
  width: 100%;
  max-width: 200px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ErrorFiles = styled.div`
  color: ${(props) => props.theme.colors.background};
`;
