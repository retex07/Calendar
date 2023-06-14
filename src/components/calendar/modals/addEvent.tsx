import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Input from "components/input";
import Modal from "components/modal";
import Textarea from "components/textarea";

import { regexp } from "constants/regexp";
import { addEvent } from "store/calendarSlice";

import { calendarTypeEvent } from "../types";
import {
    Wrapper,
    Header,
    HeadingText,
    AddButton,
    CancelButton,
    Form,
    Actions
} from "./styled";
import {useTranslation} from "react-i18next";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    calendarEvents: calendarTypeEvent[];
}

interface Inputs {
    date: string;
    title: string;
    description: string;
}

export function AddEventModal(props: Props) {
    const { t } = useTranslation("c_calendar");

    const { isOpen, onClose, calendarEvents } = props;
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<Inputs>();

    function onSubmit(data: Inputs) {
        dispatch(addEvent({
            id: calendarEvents.length,
            title: data.title,
            description: data.description,
            date: new Date(data.date).toISOString(),
        }));
        reset();
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Wrapper>
                <Header>
                    <HeadingText>{t("addEvent")}</HeadingText>
                </Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        pattern={regexp.dateFormat}
                        register={register("date")}
                        label={t("labels.date")}
                        placeholder={t("dateFormat")}
                        required
                    />
                    <Input
                        pattern={regexp.text}
                        label={t("labels.title")}
                        register={register("title")}
                        required
                    />
                    <Textarea label={t("labels.description")} required register={register("description")} />
                    <Actions>
                        <AddButton type="submit">{t("buttons.add")}</AddButton>
                        <CancelButton onClick={onClose}>{t("buttons.cancel")}</CancelButton>
                    </Actions>
                </Form>
            </Wrapper>
        </Modal>
    );
}