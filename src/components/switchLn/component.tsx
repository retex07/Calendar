import React from "react";
import { useTranslation } from "react-i18next";

import { Label, Languages } from "./styled";

export default function SwitchLn() {
    const { i18n } = useTranslation();

    return (
        <Languages>
            <Label onClick={() => i18n.changeLanguage('ru')}>RU</Label>
            -
            <Label onClick={() => i18n.changeLanguage('en')}>EN</Label>
        </Languages>
    );
}
