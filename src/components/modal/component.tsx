import React, { ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import { Container, BgCloser, ModalCard } from "./styled";

const modalRootElement = document.getElementById('modal');

interface Props {
    isOpen: boolean;
    onClose?: () => void;
    children?: ReactNode;
}

export default function Modal(props: Props) {
    const { isOpen, onClose, children } = props;

    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        if (isOpen) {
            modalRootElement?.appendChild(element);

            return () => {
                modalRootElement?.removeChild(element);
            };
        }
    });

    return isOpen
        ? createPortal(
            <>
                <Container>
                    <ModalCard>{children}</ModalCard>
                    <BgCloser onClick={onClose}></BgCloser>
                </Container>
            </>,
            element,
        )
        : null;
}