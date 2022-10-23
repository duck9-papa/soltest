import { createSlice } from '@reduxjs/toolkit';

const initialState = { content: {} };

const ContentSlice = createSlice({
  name: 'ContentSlice',
  initialState: initialState,
  reducers: {
    save: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default ContentSlice;
