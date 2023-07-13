import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    token: null,
    user: {
        id: "",
        username: "",
        email: "",
    }
}

const loginSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.user = {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email
            }
            state.isLogin = true
        },

        removeUser(state) {
            state.user = {
                id: "",
                username: "",
                email: ""
            }
            state.isLogin = false
        },

        setToken(state, action) {
            state.token = action.payload
        },

        removeToken(state) {
            state.token = null
        },
    }
})

export const authActions = loginSlice.actions

export default loginSlice.reducer

