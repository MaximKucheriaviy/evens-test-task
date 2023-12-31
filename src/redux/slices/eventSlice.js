import { createSlice } from "@reduxjs/toolkit";
export const eventSlice = createSlice({
  name: "events",
  initialState: {
    value: getFromStorage(),
  },
  reducers: {
    addEvent(state, { payload }) {
      state.value.unshift(payload);
      saveToStorage(state.value);
    },
    deleteEvent(state, { payload }) {
      state.value = state.value.filter(({ id }) => id !== payload);
      saveToStorage(state.value);
    },
    editEvent(state, { payload }) {
      const index = state.value.findIndex((item) => item.id === payload.id);
      state.value[index] = payload;
      saveToStorage(state.value);
    },
  },
});

export const { addEvent, deleteEvent, editEvent } = eventSlice.actions;

function saveToStorage(obj) {
  window.localStorage.setItem("events", JSON.stringify(obj));
}

function getFromStorage() {
  const item = window.localStorage.getItem("events");
  if (!item) {
    return [];
  }
  return JSON.parse(item);
}
