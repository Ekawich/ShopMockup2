import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const validation = () => {
		const errors = {};
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		if (!user.username) {
			errors.username = "Username is required";
		}

		if (!user.email) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(user.email)) {
			errors.email = "Email is invalid form";
		}

		if (!user.password) {
			errors.password = "Password is required";
		} else if (user.password.length < 7) {
			errors.password = "Password should be at least 7 characters long";
		}

		if (!user.cpassword) {
			errors.cpassword = "Confirm password is required";
		} else if (user.password !== user.cpassword) {
			errors.cpassword = "Password do not match";
		}

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		const validate = validation();
		console.log(validate);
		if (validate) {
			try {
				const body = {
					username: user.username,
					email: user.email,
					password: user.password,
				};

				const response = await fetch("http://localhost:3306/api/users/signup", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-type": "application/json",
					},
				});
				const data = await response.json();
				console.log(data);
			} catch (err) {
				console.error(err);
			} finally {
				toast.success("User has been created!", {
					autoClose: 1500,
				});
				setUser({
					username: "",
					email: "",
					password: "",
					cpassword: "",
				});
				setIsLoading(false);
				navigate("/");
			}
		}
	};
	return (
		<>
			<>
				<div className="flex flex-col items-center justify-center h-screen">
					<div className="bg-gray-100 shadow p-6 sm:max-w-md sm:w-full rounded-md">
						<div className="sm:mx-auto sm:w-full">
							<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
						</div>

						<div className="mt-10 sm:mx-auto sm:w-full">
							<form className="space-y-4" onSubmit={submitHandler}>
								<div>
									<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
										Username
									</label>
									<div className="mt-2">
										<input
											id="username"
											name="username"
											type="text"
											autoComplete="username"
											required
											onChange={(e) => setUser((prevItem) => ({ ...prevItem, username: e.target.value.trim() }))}
											value={user.username}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
									</div>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											onChange={(e) => setUser((prevItem) => ({ ...prevItem, email: e.target.value.trim() }))}
											value={user.email}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
									</div>
								</div>

								<div>
									<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
										Password
									</label>
									<div className="mt-2">
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="password"
											required
											onChange={(e) => setUser((prevItem) => ({ ...prevItem, password: e.target.value }))}
											value={user.password}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
									</div>
								</div>

								<div>
									<label htmlFor="Password" className="block text-sm font-medium leading-6 text-gray-900">
										Confirm Password
									</label>
									<div className="mt-2">
										<input
											id="Password"
											name="Password"
											type="Password"
											autoComplete="Password"
											required
											onChange={(e) => setUser((prevItem) => ({ ...prevItem, cpassword: e.target.value }))}
											value={user.cpassword}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{errors.cpassword && <p className="text-red-500 text-xs italic">{errors.cpassword}</p>}
									</div>
								</div>

								<div>
									<button
										type="submit"
										disabled={isLoading}
										className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Sign Up
									</button>
								</div>
							</form>

							<div className="mt-4 text-end">
								<a href="/" className="">
									Have an account
								</a>
							</div>
						</div>
					</div>
					<ToastContainer />
				</div>
			</>
		</>
	);
};

export default Signup;
