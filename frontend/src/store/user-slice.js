import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : {
        name: '',
        surname: '',
        email: '',
        password: ''
    },
    reducers : {
        register(state, action) {
            const newUser = action.payload;
            console.log(newUser)
        }
    }
});

export default userSlice;