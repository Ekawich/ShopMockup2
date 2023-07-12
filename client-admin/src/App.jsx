import "./App.css";
import { useSelector } from "react-redux";

import Navbars from "./components/Navbars";
import Navrouter from "./router/Navrouter";

function App() {
	const isLogin = useSelector((state) => state.auth.isLogin);

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
