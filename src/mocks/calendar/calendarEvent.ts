import { calendarTypeEvent } from "components/calendar/types";

const calendarEvents: calendarTypeEvent[] = [
    {
        id: 0,
        title: "Тест по русскому языку",
        description: "" +
            "Задания по орфографии. Безударная гласная, " +
            "чередующиеся гласные, правописание суффиксов, окончаний. " +
            "Правописание сложных слов и т.д. ",
        date: new Date(2023, 5, 25, 20, 12).toISOString(),
    },
    {
        id: 1,
        title: "Тест по информатике",
        description: "Базовые знания HTML и CSS",
        date: new Date(2023, 5, 12, 12, 12).toISOString(),
    },
    {
        id: 2,
        title: "Собрание сотрудников",
        description: "Каждый последний четверг месяца обсуждаем планы на следующий месяц",
        date: new Date(2023, 5, 28, 15, 0).toISOString(),
    },
    {
        id: 3,
        title: "День рождения коллеги",
        description: "Мы празднуем день рождения нашего любимого разработчика",
        date: new Date(2023, 5, 7, 12, 0).toISOString(),
    },
    {
        id: 4,
        title: "Конкурс идей",
        description: "Представьте свои идеи нашей команде, и мы выберем лучшие",
        date: new Date(2023, 5, 12, 10, 0).toISOString(),
    },
    {
        id: 5,
        title: "Выставка картин",
        description: "Приходите на нашу выставку картин в эту субботу",
        date: new Date(2023, 5, 24, 11, 0).toISOString(),
    },
    {
        id: 6,
        title: "Планирование выходных",
        description: "Решим, что делать в следующие выходные",
        date: new Date(2023, 5, 15, 10, 0).toISOString(),
    },
    {
        id: 7,
        title: "Заседание совета директоров",
        description: "Обсуждаем текущие финансовые показатели",
        date: new Date(2023, 5, 5, 13, 0).toISOString(),
    },
    {
        id: 8,
        title: "Семинар по маркетингу",
        description: "Проходим полный курс по маркетингу за один день",
        date: new Date(2023, 5, 18, 9, 0).toISOString(),
    },
    {
        id: 9,
        title: "Конференция по разработке программного обеспечения",
        description: "Приветствуем специальных гостей, чтобы обсудить последние технологии",
        date: new Date(2023, 5, 31, 10, 0).toISOString(),
    },
    {
        id: 10,
        title: "Вебинар по дизайну интерфейсов",
        description: "Научитесь создавать красивые и интуитивно понятные интерфейсы",
        date: new Date(2023, 5, 9, 14, 0).toISOString(),
    },
    {
        id: 11,
        title: "Собрание научной конференции",
        description: "Выступления с лучшими проектами от ведущих ученых",
        date: new Date(2023, 5, 29, 11, 0).toISOString(),
    },
    {
        id: 12,
        title: "Тренировка по футболу",
        description: "Упражнения и игра с другими любителями футбола",
        date: new Date(2023, 5, 16, 16, 0).toISOString(),
    },
    {
        id: 13,
        title: "Семинар по карьерному развитию",
        description: "Как стать профессионалом и получать больше денег",
        date: new Date(2023, 5, 22, 10, 0).toISOString(),
    },
    {
        id: 14,
        title: "Мастер-класс по вязанию",
        description: "Обучение различным техникам вязания в малой группе",
        date: new Date(2023, 5, 16, 12, 0).toISOString(),
    },
    {
        id: 15,
        title: "Вечеринка компании",
        description: "Танцы, напитки и угощения в эту субботу вечером",
        date: new Date(2023, 5, 22, 19, 0).toISOString(),
    },
    {
        id: 16,
        title: "Гонка на машинах",
        description: "Приглашаем всех любителей гонок на улицы города",
        date: new Date(2023, 5, 13, 8, 0).toISOString(),
    }
]

export default calendarEvents;