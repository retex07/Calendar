import styled from "styled-components";
import { variables } from "styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px 24px;
  gap: 20px;

  max-width: 740px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  
  width: 100%;
`;

export const HeadingText = styled.h2`
  color: ${variables.$color__black}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  
  gap: 8px;
  
  width: 100%;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.2;

  width: 100%;
  
  color: ${variables.$color__black};
`;

export const Dates = styled.p`
  font-size: 14px;
  line-height: 1.2;

  width: 100%;
  
  color: ${variables.$color__black};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  gap: 12px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  
  width: 100%;
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
`;

export const AddButton = styled.button`
  margin: 0;
  border: 0;
  background: none;
  
  cursor: pointer;
  
  font-size: 18px;
  color: ${variables.$color__red};
`;

export const DeleteButton = styled.button`
  margin: 0;
  border: 0;
  background: none;

  cursor: pointer;

  font-size: 18px;
  color: ${variables.$color__red};
`;

export const CancelButton = styled.button`
  margin: 0;
  border: 0;
  background: none;
  
  cursor: pointer;
  
  font-size: 18px;
  color: ${variables.$color__red};
`;
