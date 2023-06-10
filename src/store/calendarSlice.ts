import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import calendarEvents from "../mocks";

const calendarSlice = createSlice({
    name: "calendar",
    initialState: {
        calendarEvents: [...calendarEvents],
    },
    reducers: {
        addEvent(state, action) {
            state.calendarEvents.push(action.payload);
        },
        deleteEvent(state, action: PayloadAction<number>) {
            state.calendarEvents.splice(action.payload, 1);
        }
    }
});

export default calendarSlice.reducer;
export const { addEvent, deleteEvent } = calendarSlice.actions;