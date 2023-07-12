import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    token: "",
}

const loginSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.isLogin = true
            state.token = action.payload
        }
    }
})

export const authActions = loginSlice.actions

export default loginSlice.reducer

