import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  padding: 20px;
`;
