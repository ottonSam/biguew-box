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
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;
