import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent, addEvent } from "../../store/calendarSlice";
import { RootState } from "../../store";

import { ReactComponent as RightArrow } from "../../static/icons/chevron-right.svg";
import { ReactComponent as LeftArrow } from "../../static/icons/chevron-left.svg";
import { ReactComponent as AddEvent } from "../../static/icons/add.svg";

import {
    months,
    times,
    daysOfWeak,
    textHeader,
    textButtonCancel,
    textButtonDelete,
    textButtonToday,
    textEnterDate,
    textFormatDate
} from "./accessories";

import { useDate, usePositionOfGrid } from "./hooks";
import { calendarTypeEvent } from "./types";
import {
    AddButton,
    DateOfMonth,
    DatesSection,
    DayOfWeak,
    DaysGrid,
    GridEvents,
    EventsSection,
    Footer,
    Header,
    HeadingText,
    LeftArrowButton,
    Month,
    RightArrowButton,
    Timestamp,
    Event,
    Wrapper,
    EventOfDate,
    TodayButton,
    CancelButton,
    DeleteButton,
    ActionsAfterClick
} from "./styled";

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeEvent, setActiveEvent] = useState<number | undefined>(undefined);

    const { getRow, getCol } = usePositionOfGrid();
    const { getCurrentWeek, getFullDate } = useDate();

    const currentDaysInWeek: string[] = [...getCurrentWeek(selectedDate)];

    const calendarEvents = useSelector((state: RootState) => state.calendar.calendarEvents);
    console.log(calendarEvents);
    const dispatch = useDispatch();

    function findIndexActiveEvent() {
        return calendarEvents.findIndex(event => event.id === activeEvent);
    }

    function EventOfTime(index: number) {
        return calendarEvents.map((event: calendarTypeEvent) =>
            new Date(event.date).getFullYear() === selectedDate.getFullYear() &&
            new Date(event.date).getMonth() === selectedDate.getMonth() &&
            new Date(event.date).getDate() === Number(currentDaysInWeek[getCol(index)]) &&
            new Date(event.date).getHours() === getRow(index) && ((
                    <Event
                        key={event.id}
                        onClick={() => setActiveEvent(event.id)}
                        $isActive={event.id === activeEvent}
                    >{event.id}</Event>
            )));
    }

    function isActiveEventToday() {
        if (activeEvent) {
            return new Date().getFullYear() === new Date(
                    calendarEvents[findIndexActiveEvent()].date
                ).getFullYear() &&
                new Date().getMonth() === new Date(
                    calendarEvents[findIndexActiveEvent()].date
                ).getMonth() &&
                new Date().getDate() === new Date(
                    calendarEvents[findIndexActiveEvent()].date
                ).getDate();
        }
    }

    function addEventCalendar() {
        const date = prompt(`${textEnterDate} \n ${textFormatDate}`);
        if (date) {
            dispatch(addEvent({
                id: calendarEvents.length,
                date: new Date(date).toISOString(),
            }))
        }
    }

    function onLeftDate() {
        setActiveEvent(undefined);
        setSelectedDate(new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate() - 7
        ));
    }
    function onRightDate() {
        setActiveEvent(undefined);
        setSelectedDate(new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate() + 7
        ));
    }

    return (
        <Wrapper>
            <Header>
                <HeadingText>{textHeader}</HeadingText>
                <AddButton onClick={addEventCalendar}>
                    <AddEvent />
                </AddButton>
            </Header>
            <DatesSection>
                <DaysGrid>
                    {daysOfWeak.map((day: string, index) => (
                        <DayOfWeak key={index}>{day}</DayOfWeak>
                    ))}
                    {currentDaysInWeek.map((date: string, index) => (
                        <DateOfMonth
                            key={index}
                            $isSelect={
                                new Date().getFullYear() === selectedDate.getFullYear() &&
                                new Date().getMonth() === selectedDate.getMonth() &&
                                getFullDate(new Date().getDate()) === date
                            }
                        >
                            <span>{date}</span>
                        </DateOfMonth>
                    ))}
                    <LeftArrowButton onClick={onLeftDate}>
                        <LeftArrow />
                    </LeftArrowButton>
                    <Month>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</Month>
                    <RightArrowButton onClick={onRightDate}>
                        <RightArrow />
                    </RightArrowButton>
                </DaysGrid>
            </DatesSection>
            <EventsSection>
                <Timestamp>{times.map((time: string, index) => <span key={index}>{time}</span>)}</Timestamp>
                <GridEvents>
                    {[...Array(7 * 23)].map((item: undefined, index) => (
                        <EventOfDate
                            key={index}
                            $isLastEventColumn={(index + 1) % 7 === 0}
                            $isLastEventRow={index >= 7 * 22}
                        >
                            {EventOfTime(index)}
                        </EventOfDate>
                    ))}
                </GridEvents>
            </EventsSection>
            {activeEvent && (
                <Footer>
                    {isActiveEventToday() && <TodayButton>{textButtonToday}</TodayButton>}
                    <ActionsAfterClick>
                        <DeleteButton onClick={() => {
                            dispatch(deleteEvent(findIndexActiveEvent()));
                            setActiveEvent(undefined);
                        }}
                        >
                            {textButtonDelete}
                        </DeleteButton>
                        <CancelButton onClick={() => setActiveEvent(undefined)}>{textButtonCancel}</CancelButton>
                    </ActionsAfterClick>
                </Footer>
            )}
        </Wrapper>
    );
}