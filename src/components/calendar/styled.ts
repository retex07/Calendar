import styled from "styled-components";
import { variables } from "styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 740px;
  width: 100%;

  border: 1px solid ${variables.$color__light__gray};
  border-radius: 10px;  
`;

export const EndHeader = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;

  width: calc(100% - 64px);
  padding: 32px;
  
  justify-content: space-between;
  align-items: center;
`;

export const HeadingText = styled.h2`
  font-weight: 100;
  font-size: 28px;
  line-height: 1.2;
  color: ${variables.$color__black};
`;

export const AddButton = styled.button`
  background: none;
  border: 0;
  
  cursor: pointer;
  
  svg {
    height: 38px;
    width: 38px;
  }
  path {
    stroke: ${variables.$color__red};
    stroke-width: 1.9px;
  }
`;

export const DatesSection = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 12px;
  
  @media screen and (max-width: 740px) {
    padding: 10px 0 10px 78px;
  }
  @media screen and (min-width: 740px) {
    padding: 10px 12px 10px 78px;
  }
  
  background-color: ${variables.$color__light__bg};
`;

export const DayOfWeak = styled.span`
  text-align: center;

  font-size: 14px;
  font-weight: 600;
  
  color: ${variables.$color__black};
`;

export const DateOfMonth = styled.span<{$isSelect?: boolean}>`
  display: flex;

  justify-content: center;
  align-items: center;
  
  width: 40px;
  height: 40px;
  
  margin-right: auto;
  margin-left: auto;

  border-radius: 60px;
  background-color: ${props => props.$isSelect ? `${variables.$color__red}` : `none`};

  cursor: default;

  span {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 500;
    color: ${props => props.$isSelect ? `${variables.$color__light__gray}` : `none`};
  }

  &:hover {
    background-color: ${props => props.$isSelect ? `${variables.$color__red}` : `${variables.$color__gray}`};
    
    span {
      color: ${variables.$color__white};
    }
  }
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  
  width: 100%;
  row-gap: 6px;
  
  justify-content: space-between;
  align-items: center;
`;

export const Month = styled.p`
  text-align: center;

  font-size: 18px;
  font-weight: 500;
  
  color: ${variables.$color__black};

  grid-column-start: 2;
  grid-column-end: 7;

  white-space: nowrap;
`;
export const LeftArrowButton = styled.button`
  grid-column-start: 1;
  border: 0;
  background: none;
  cursor: pointer;

  svg {
    height: 28px;
    width: 28px;
  }
  path {
    stroke: ${variables.$color__red};
    stroke-width: 2.5px;
  }
`;
export const RightArrowButton = styled.button`
  grid-column-start: 7;
  border: 0;
  background: none;
  cursor: pointer;

  svg {
    height: 28px;
    width: 28px;
  }
  path {
    stroke: ${variables.$color__red};
    stroke-width: 2.5px;
  }
`;

export const EventsSection = styled.section`
  display: flex;
  flex-direction: row;

  max-height: 500px;
  margin-bottom: 12px;

  overflow-y: auto;
`;

export const Timestamp = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  
  max-width: 78px;
  width: 100%;
  
  margin-top: 12px;
  gap: 24px;

  span {
    font-size: 18px;
    font-weight: 500;
    
    min-height: 22px;

    color: ${variables.$color__gray};
  }
`;

export const GridEvents = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: 100%;
  
  margin-top: 20px;
  
  justify-content: space-between;
  align-items: center;
`;

export const EventOfDate = styled.div<{
    $isLastEventColumn?: boolean,
    $isLastEventRow?: boolean,
    $hasEvent?: boolean
}>`
  height: 41px;
  padding: 2px;
  
  cursor: pointer;

  border-bottom: ${props => !props.$isLastEventRow ? `1px solid ${variables.$color__light__gray}` : `none`};
  border-right: ${props => !props.$isLastEventColumn ? `1px solid ${variables.$color__light__gray}` : `none`};
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${variables.$color__blue};
`;
