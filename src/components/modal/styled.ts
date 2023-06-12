import styled from "styled-components";
import { variables } from "styles/variables";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BgCloser = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: ${variables.$color__gray};
  cursor: pointer;
`;

export const ModalCard = styled.div`
  position: relative;
  overflow-y: auto;

  border-radius: 8px;
  background: ${variables.$color__white};

  margin: 20px;

  z-index: 2;
`;
