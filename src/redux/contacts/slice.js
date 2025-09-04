import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  fetchContacts,
  patchContact,
} from "./operations";
import { selectFilter } from "../filters/selectors";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../contacts/selectors";

export const selectVisibleContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
);

export const useContact = () => useSelector(selectContacts);
export const useLoading = () => useSelector(selectLoading);
export const useError = () => useSelector(selectError);

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const contactSlice = createSlice({
  name: "contacts",
  initialState: { contacts: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id != action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(patchContact.pending, handlePending)
      .addCase(patchContact.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.contacts.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })
      .addCase(patchContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactSlice.reducer;
