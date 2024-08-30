Here's the translated README in English:

# interview-calendar

## Web Application with Weekly Calendar
A static web application (SPA) was implemented using `React` *(JavaScript library)*, `TypeScript` *(type safety)*, `styled-components` *(styling using JS components and CSS)*, `Redux-toolkit` *(state management for events)*, `i18next` *(localization)*, and `react-hook-form` *(form validation)*.

**Component location:** `/src/components/calendar`

### Calendar Overview

#### Header:

![Header](/src/static/img/header.png)

To add an event, click the "+" button in the header and fill out the form, after which the event will be added *(it will also update the event state through `Redux-toolkit`)*.  
Clicking "RU" or "EN" will change the system language.

#### Adding an Event:

![Add Event](/src/static/img/addEvent.png)

#### Current Week Section:

![Current Week Section](/src/static/img/sectionDate.png)

Below the header *(calendar header)* is a section displaying the dates of the current week. If you click the left or right arrow, the dates of the week will shift to the previous or next week accordingly *(the month and year will update as needed)*.

#### Events Section:

![Events Section](/src/static/img/sectionEvent.png)

Following the week dates section is the event grid section - this is where any scheduled events for a specific date are displayed *(each column corresponds to a date from the week dates section, and each row corresponds to the time slot for an event)*.

#### Viewing an Event:

![View Event](/src/static/img/showEvent.png)

If you click on an event, a modal window will appear with information about the event. There are two buttons - cancel and delete (updates via `Redux-toolkit`).

#### Deleting an Event:

![Delete Event](/src/static/img/deleteEvent.png)

If you need to delete an event, you will need to confirm the action after clicking "Delete" *(this prevents accidental deletions)*.

### Contact Information

#### Alexander Sergeevich Tauschkanov
VK: https://vk.com/retex07/  
Telegram: https://t.me/evrydan07/  
GitHub: https://github.com/retex07/
