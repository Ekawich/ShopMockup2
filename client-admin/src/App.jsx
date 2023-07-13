import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/auth";

import Navbars from "./components/Navbars";
import Navrouter from "./router/Navrouter";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
	const token = localStorage.getItem("token") || null;
	const user = {
		id: localStorage.getItem("id") || "",
		username: localStorage.getItem("username") || "",
		email: localStorage.getItem("email") || "",
	};
	const isLogin = useSelector((state) => state.auth.isLogin);

	useEffect(() => {
		if (token) {
			dispatch(authActions.setToken(token));
			dispatch(authActions.setUser(user));
		} else {
			localStorage.clear();
		}
	}, [token]);
	return (
		<>
			{isLogin && <Navbars />}
			<div className="max-w-screen-2xl mx-auto">
				<Navrouter />
			</div>
		</>
	);
}

export default App;
