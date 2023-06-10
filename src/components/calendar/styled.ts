import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 740px;
  width: 100%;

  border: 1px solid #e8e8ec;
  border-radius: 10px;  
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
  color: #0f0f0f;
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
    stroke: #FF0000C9;
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
  
  background-color: #f6f6f6;
`;

export const DayOfWeak = styled.span`
  text-align: center;

  font-size: 14px;
  font-weight: 600;
  
  color: #0f0f0f;
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
  background-color: ${props => props.$isSelect ? `#FF0000C9` : `none`};

  cursor: default;

  span {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 500;
    color: ${props => props.$isSelect ? `#e8e8ec` : `none`};
  }

  &:hover {
    background-color: ${props => props.$isSelect ? `#FF0000C9` : `#949494`};
    
    span {
      color: #e8e8ec;
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
  
  color: #090909;

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
    stroke: #FF0000C9;
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
    stroke: #FF0000C9;
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

    color: #c2c2c2;
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

  border-bottom: ${props => !props.$isLastEventRow ? `1px solid #e7e7e7` : `none`};
  border-right: ${props => !props.$isLastEventColumn ? `1px solid #e7e7e7` : `none`};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;

  width: calc(100% - 56px);
  padding: 16px 28px;
  
  justify-content: space-between;
  align-items: center;

  background-color: #f6f6f6;
`;

export const TodayButton = styled.button`
  margin: 0;
  border: 0;
  background: none;
  
  font-size: 18px;
  color: #FF0000C9;
`;

export const ActionsAfterClick = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: flex-end;
  
  gap: 26px;
`;

export const DeleteButton = styled.button`
  margin: 0;
  border: 0;
  background: none;
  
  cursor: pointer;
  
  font-size: 18px;
  color: #FF0000C9;
`;

export const CancelButton = styled.button`
  margin: 0;
  border: 0;
  background: none;
  
  cursor: pointer;
  
  font-size: 18px;
  color: #FF0000C9;
`;

export const Event = styled.div<{$isActive?: boolean}>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${props => props.$isActive ? "#b4b8ff" : "#ecedff"};
`;
