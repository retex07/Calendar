import styled from "styled-components";
import { variables } from "styles/variables";

export const Languages = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 18px;

  cursor: pointer;
  
  color: ${variables.$color__red};
`;
