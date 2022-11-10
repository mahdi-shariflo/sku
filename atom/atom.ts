import {atom} from "recoil"

export const commentsState = atom({
    key: 'commentState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });
export const selectChat = atom({
    key: 'selectChat', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });