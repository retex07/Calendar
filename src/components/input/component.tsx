import React from "react";

import { InputField, Wrapper, Label } from "./styled";

interface Props {
    id?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    pattern?: string;
    disabled?: boolean;
    required?: boolean;
    type?: "password" | "text";
    register?: object;
    onClick?: () => void;
}

export default function Input(props: Props) {
    const {
        label,
        type,
        id,
        name,
        placeholder,
        disabled,
        register,
        required,
        pattern,
        onClick
    } = props;

    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <InputField
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                onClick={onClick}
                pattern={pattern}
                {...register}
            />
        </Wrapper>
    );
}
