import { useTranslation } from "react-i18next";

export function useDate() {
    const { t } = useTranslation("c_calendar");

    function getMonthOfNumber(number: number) {
        const months = [
            t("months.january"),
            t("months.february"),
            t("months.march"),
            t("months.april"),
            t("months.may"),
            t("months.june"),
            t("months.july"),
            t("months.august"),
            t("months.september"),
            t("months.october"),
            t("months.november"),
            t("months.december")
        ];
        return months[number];
    }

    function getDaysOfWeek() {
        return [
            t("daysOfWeek.monday"),
            t("daysOfWeek.tuesday"),
            t("daysOfWeek.wednesday"),
            t("daysOfWeek.thursday"),
            t("daysOfWeek.friday"),
            t("daysOfWeek.saturday"),
            t("daysOfWeek.sunday"),
        ];
    }

    function getDaysInMonth(date: Date) {
        return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    }

    function getFullNumberOfAnyDate(date: number) {
        if (date.toString().length === 1) {
            return `0${date}`
        }
        return date.toString();
    }

    function getCurrentWeek(date: Date) {
        const datesOfWeek: string[] = [];

        [...Array(date.getDay())].map((item: undefined, index) =>
            datesOfWeek.unshift(getFullNumberOfAnyDate(date.getDate() - index >= 1 ?
                date.getDate() - index : (Number(datesOfWeek[0]) === 1 ?
                        getDaysInMonth(new Date(
                            date.getFullYear(),
                            date.getMonth() - 1,
                            date.getDate())
                        ) : Number(datesOfWeek[0]) - 1
                )
            ))
        );

        [...Array(7 - date.getDay())].map((item: undefined, index) =>
            datesOfWeek.push(getFullNumberOfAnyDate((date.getDate() + index + 1) <= getDaysInMonth(date) ?
                    (date.getDate() + index + 1) : (datesOfWeek[datesOfWeek.length - 1] === getDaysInMonth(date).toString() ?
                        1 : Number(datesOfWeek[datesOfWeek.length - 1]) + 1
                    )
            ))
        );

        return datesOfWeek;
    }

    function getTextDate(date: Date) {
        return `${date.getFullYear()} 
            ${getFullNumberOfAnyDate(date.getMonth())} 
            ${getFullNumberOfAnyDate(date.getDate())}
        `;
    }

    return {
        getCurrentWeek,
        getFullNumberOfAnyDate,
        getMonthOfNumber,
        getDaysOfWeek,
        getDaysInMonth,
        getTextDate
    };
}

export function usePositionOfGrid() {
    function getRow(index: number) {
        switch (true) {
            case (index >= 0 && index < 7):
                return 0;
            case (index >= 7 && index < 7 * 2):
                return 1;
            case (index >= 7 * 2 && index < 7 * 3):
                return 2;
            case (index >= 7 * 3 && index < 7 * 4):
                return 3;
            case (index >= 7 * 4 && index < 7 * 5):
                return 4;
            case (index >= 7 * 5 && index < 7 * 6):
                return 5;
            case (index >= 7 * 6 && index < 7 * 7):
                return 6;
            case (index >= 7 * 7 && index < 7 * 8):
                return 7;
            case (index >= 7 * 8 && index < 7 * 9):
                return 8;
            case (index >= 7 * 9 && index < 7 * 10):
                return 9;
            case (index >= 7 * 10 && index < 7 * 11):
                return 10;
            case (index >= 7 * 11 && index < 7 * 12):
                return 11;
            case (index >= 7 * 12 && index < 7 * 13):
                return 12;
            case (index >= 7 * 13 && index < 7 * 14):
                return 13;
            case (index >= 7 * 14 && index < 7 * 15):
                return 14;
            case (index >= 7 * 15 && index < 7 * 16):
                return 15;
            case (index >= 7 * 16 && index < 7 * 17):
                return 16;
            case (index >= 7 * 17 && index < 7 * 18):
                return 17;
            case (index >= 7 * 18 && index < 7 * 19):
                return 18;
            case (index >= 7 * 19 && index < 7 * 20):
                return 19;
            case (index >= 7 * 20 && index < 7 * 21):
                return 20;
            case (index >= 7 * 21 && index < 7 * 22):
                return 21;
            case (index >= 7 * 22 && index < 7 * 23):
                return 22;
            default:
                return -1;
        }
    }

    function getCol(index: number) {
        switch (index % 7) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 4;
            case 5:
                return 5;
            case 6:
                return 6;
            default:
                return -1;
        }
    }

    return { getCol, getRow };
}
