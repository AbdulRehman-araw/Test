import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: '',
  updateFormData: {},
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    updateFormData: (state, action) => {
      state.updateFormData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserData, updateFormData} = userDataSlice.actions;

export default userDataSlice.reducer;
