import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { Nullable } from "@/shared/types/nullable";
import { updateUser } from "./thunk";
import { MangosResponse } from "@/shared/api/types/mangosResponse";

type UserState = {
    currentUser: Nullable<User>;
}

const initialState: UserState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateUser.fulfilled, (state, action: PayloadAction<MangosResponse<Nullable<User>>>) => {
                if(action.payload?.success) state.currentUser = action.payload.data;
                else state.currentUser = null;
            })
    }
})

export default userSlice.reducer;