import React from "react";
import { useDispatch } from "react-redux";

import Modal from "components/modal";

import { deleteEvent } from "store/calendarSlice";

import { useDate } from "../hooks";
import { calendarTypeEvent } from "../types";
import { textButtonCancel, textButtonDelete } from "../accessories";
import {
    Header,
    HeadingText,
    Wrapper,
    Footer,
    DeleteButton,
    CancelButton,
    Main,
    Dates,
    Description
} from "./styled";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    idEvent: number;
    calendarEvents: calendarTypeEvent[];
}

export function ActionsEventModal(props: Props) {
    const { isOpen, onClose, idEvent, calendarEvents } = props;
    const dispatch = useDispatch();

    const { getTextDate } = useDate();

    function deleteThisEvent() {
        if (window.confirm("Are you sure you want to delete this event?")) {
            dispatch(deleteEvent(idEvent));
            onClose();
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Wrapper>
                <Header>
                    <HeadingText>{calendarEvents[idEvent]?.title}</HeadingText>
                </Header>
                <Main>
                    <Description>{calendarEvents[idEvent]?.description}</Description>
                    <Dates>{getTextDate(new Date(calendarEvents[idEvent]?.date))}</Dates>
                </Main>
                <Footer>
                    <DeleteButton onClick={deleteThisEvent}>{textButtonDelete}</DeleteButton>
                    <CancelButton onClick={onClose}>{textButtonCancel}</CancelButton>
                </Footer>
            </Wrapper>
        </Modal>
    );
}