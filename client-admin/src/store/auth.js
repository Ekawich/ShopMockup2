import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: true
}

const loginSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.isLogin = true
        }
    }
})

export const authActions = loginSlice.actions

export default loginSlice.reducer

