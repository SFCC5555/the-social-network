import { createSlice } from "@reduxjs/toolkit"

// Check if 'modeStorage' exists in the local storage, and use its value as the initial state
// If 'modeStorage' doesn't exist, the initial state is set to 'light'
const initialState = localStorage.getItem('modeStorage') ?
  JSON.parse(localStorage.getItem('modeStorage')) :
  'light';

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state, action) => {
      // Update the 'mode' state (light or dark) to the value provided in the action's payload
      state = action.payload;
      // Store the updated 'mode' state in localStorage to persist changes
      localStorage.setItem('modeStorage', state);
      return state;
    }
  }
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;