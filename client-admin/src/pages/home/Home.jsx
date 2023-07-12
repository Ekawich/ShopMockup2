import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const isLogin = useSelector((state) => state.auth.isLogin);
const navigate = useNavigate();

if (!isLogin) {
	navigate("/");
}

const Home = () => {
	return (
		<>
			<header className="bg-white">
				<div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-screen-2xl py-6 sm:px-6 lg:px-8">
					<ul>
						<li>test</li>
						<li>test</li>
						<li>test</li>
						<li>test</li>
						<li>test</li>
						<li>test</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Home;
