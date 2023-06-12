import React from "react";

import { Wrapper, TextareaField, Label } from "./styled";

interface Props {
    id?: string;
    label?: string;
    required?: boolean;
    register?: object;
}

export default function Textarea(props: Props) {
    const { label, required, register, id } = props;
    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <TextareaField id={id} required={required} {...register}>
                hello
            </TextareaField>
        </Wrapper>
    );
}