import { combineReducers, configureStore } from  "@reduxjs/toolkit";
import calendarSlice from "./calendarSlice";

const rootReducer = combineReducers({
    calendar: calendarSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
