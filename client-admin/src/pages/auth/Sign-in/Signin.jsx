import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authActions } from "../../../store/auth";
import { useDispatch } from "react-redux";

const Signin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const [userLogin, setUserLogin] = useState({
		usernameOrEmail: "",
		password: "",
	});

	const submitHandler = async (e) => {
		e.preventDefault();

		if (userLogin.usernameOrEmail && userLogin.password) {
			const body = {
				usernameOrEmail: userLogin.usernameOrEmail,
				password: userLogin.password,
			};

			const response = await fetch("http://localhost:3306/api/users/signin", {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					"Content-type": "application/json",
				},
			});

			const data = await response.json();
			if (data.status === 200) {
				console.log(data);
				navigate("/home");
				setUserLogin({
					usernameOrEmail: "",
					password: "",
				});
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				dispatch(authActions.setUser(data.user));
				dispatch(authActions.setToken(data.token));
			} else {
				console.log(data);
			}
		}
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="bg-gray-100 shadow p-6 sm:max-w-md sm:w-full rounded-md">
					<div className="sm:mx-auto sm:w-full">
						<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full">
						<form className="space-y-4" onSubmit={submitHandler}>
							<div>
								<label htmlFor="usernameOrEmail" className="block text-sm font-medium leading-6 text-gray-900">
									Username or Email
								</label>
								<div className="mt-2">
									<input
										id="usernameOrEmail"
										name="usernameOrEmail"
										type="text"
										autoComplete="usernameOrEmail"
										required
										onChange={(e) => setUserLogin((prevItem) => ({ ...prevItem, usernameOrEmail: e.target.value }))}
										value={userLogin.usernameOrEmail}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
										Password
									</label>
									<div className="text-sm">
										<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
											Forgot password?
										</a>
									</div>
								</div>
								<div className="mt-2 relative">
									<input
										id="password"
										name="password"
										type={!showPassword ? "password" : "text"}
										autoComplete="current-password"
										required
										onChange={(e) => setUserLogin((prevItem) => ({ ...prevItem, password: e.target.value }))}
										value={userLogin.password}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
									<div className="absolute top-1/4 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
										{!showPassword ? <FaEye /> : <FaEyeSlash />}
									</div>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button>
							</div>
						</form>

						<div className="mt-4 text-end">
							<a href="/register" className="">
								Don't have an account
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signin;
