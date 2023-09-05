import { createContact, deleteContact, getContacts, updateContact } from "redux/contacts/operations";

const operationsThunk = [createContact, deleteContact, getContacts, updateContact];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);