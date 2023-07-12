import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "../pages/auth/Sign-in/Signin";
import Signup from "../pages/auth/Sign-up/Signup";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

const Navrouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Signin />} />
					<Route path="/register" element={<Signup />} />
					<Route path="/home" element={<Home />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Navrouter;
