import React from "react";
import { useDispatch } from "react-redux";

import Modal from "components/modal";

import { deleteEvent } from "store/calendarSlice";

import { useDate } from "../hooks";
import { calendarTypeEvent } from "../types";
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
import {useTranslation} from "react-i18next";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    idEvent: number;
    calendarEvents: calendarTypeEvent[];
}

export function ActionsEventModal(props: Props) {
    const { t } = useTranslation("c_calendar");

    const { isOpen, onClose, idEvent, calendarEvents } = props;
    const dispatch = useDispatch();

    const { getTextDate } = useDate();

    function deleteThisEvent() {
        if (window.confirm(t("confirmDelete"))) {
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
                    <DeleteButton onClick={deleteThisEvent}>{t("buttons.delete")}</DeleteButton>
                    <CancelButton onClick={onClose}>{t("buttons.cancel")}</CancelButton>
                </Footer>
            </Wrapper>
        </Modal>
    );
}