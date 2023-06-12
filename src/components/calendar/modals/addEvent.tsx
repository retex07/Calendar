import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Input from "components/input";
import Modal from "components/modal";
import Textarea from "components/textarea";

import { regexp } from "constants/regexp";
import { addEvent } from "store/calendarSlice";

import {
    textButtonCancel,
    textFormatDate,
    textEnterDate,
    textEnterTitle,
    textEnterDescription
} from "../accessories";
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
                    <HeadingText>Adding an event</HeadingText>
                </Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        pattern={regexp.dateFormat}
                        register={register("date")}
                        label={textEnterDate}
                        placeholder={textFormatDate}
                        required
                    />
                    <Input
                        pattern={regexp.text}
                        label={textEnterTitle}
                        register={register("title")}
                        required
                    />
                    <Textarea label={textEnterDescription} required register={register("description")} />
                    <Actions>
                        <AddButton type="submit">Add</AddButton>
                        <CancelButton onClick={onClose}>{textButtonCancel}</CancelButton>
                    </Actions>
                </Form>
            </Wrapper>
        </Modal>
    );
}