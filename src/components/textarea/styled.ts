import styled from "styled-components";
import { variables } from "styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  color: ${variables.$color__black};
`;

export const TextareaField = styled.textarea`
  padding: 12px;

  border-radius: 10px;
  border: 1px solid ${variables.$color__gray};
`;
