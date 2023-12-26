import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 20
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;
        },
        restoreCake: (state) => {
            state.numOfCakes++;
        }
    }
});

export const { ordered, restoreCake } = cakeSlice.actions;
export default cakeSlice.reducer;
