import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState } from "store";
import { ReactComponent as RightArrow } from "static/icons/chevron-right.svg";

import SwitchLn from "components/switchLn";

import { ReactComponent as LeftArrow } from "static/icons/chevron-left.svg";
import { ReactComponent as AddEvent } from "static/icons/add.svg";
import { ActionsEventModal } from "./modals/actionsEvent";
import { AddEventModal } from "./modals/addEvent";
import { useDate, usePositionOfGrid } from "./hooks";
import { calendarTypeEvent } from "./types";
import { times } from "./accessories";
import {
    AddButton,
    DateOfMonth,
    DatesSection,
    DayOfWeak,
    DaysGrid,
    GridEvents,
    EventsSection,
    Header,
    HeadingText,
    LeftArrowButton,
    Month,
    RightArrowButton,
    Timestamp,
    Event,
    Wrapper,
    EventOfDate,
    EndHeader,
} from "./styled";

export default function Calendar() {
    const { t } = useTranslation("c_calendar");

    const [isOpenModalAddEvent, setIsOpenModalAddEvent] = useState(false);
    const [isOpenModalActionsEvent, setIsOpenModalActionsEvent] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeEvent, setActiveEvent] = useState<number | undefined>(undefined);

    const { getRow, getCol } = usePositionOfGrid();
    const { getCurrentWeek, getFullNumberOfAnyDate, getMonthOfNumber, getDaysOfWeek } = useDate();

    const currentDaysInWeek: string[] = [...getCurrentWeek(selectedDate)];
    const calendarEvents = useSelector((state: RootState) => state.calendar.calendarEvents);

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
                        onClick={() => {
                            setActiveEvent(event.id);
                            setIsOpenModalActionsEvent(true);
                        }}
                    />
            )));
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
            <AddEventModal
                isOpen={isOpenModalAddEvent}
                onClose={() => setIsOpenModalAddEvent(false)}
                calendarEvents={calendarEvents}
            />
            <ActionsEventModal
                isOpen={isOpenModalActionsEvent}
                onClose={() => setIsOpenModalActionsEvent(false)}
                idEvent={findIndexActiveEvent()}
                calendarEvents={calendarEvents}
            />
            <Header>
                <HeadingText>{t("header")}</HeadingText>
                <EndHeader>
                    <SwitchLn />
                    <AddButton onClick={() => setIsOpenModalAddEvent(true)}>
                        <AddEvent />
                    </AddButton>
                </EndHeader>
            </Header>
            <DatesSection>
                <DaysGrid>
                    {getDaysOfWeek().map((day: string, index) => (
                        <DayOfWeak key={index}>{day}</DayOfWeak>
                    ))}
                    {currentDaysInWeek.map((date: string, index) => (
                        <DateOfMonth
                            key={index}
                            $isSelect={
                                new Date().getFullYear() === selectedDate.getFullYear() &&
                                new Date().getMonth() === selectedDate.getMonth() &&
                                getFullNumberOfAnyDate(new Date().getDate()) === date
                            }
                        >
                            <span>{date}</span>
                        </DateOfMonth>
                    ))}
                    <LeftArrowButton onClick={onLeftDate}>
                        <LeftArrow />
                    </LeftArrowButton>
                    <Month>{getMonthOfNumber(selectedDate.getMonth())} {selectedDate.getFullYear()}</Month>
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
        </Wrapper>
    );
}