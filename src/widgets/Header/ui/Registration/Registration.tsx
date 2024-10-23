"use client";

import { createUser } from "@/entities/User/api/users";
import { UserFillable } from "@/entities/User/types/user";
import { login } from "@/shared/api/auth";
import { LoginData, RegistrationData } from "@/shared/api/types/auth";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { Button } from "@/shared/ui/Button/ui/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";

type Props = {
	onRegister?: () => void;
};

export const Registration = (props: Props) => {
	const [token, setToken] = useLocalStorage("token");
	const [formData, setFormData] = useState<RegistrationData>({
		fio: "",
		email: "",
		login: "",
		password: "",
	});

	const regIn = async () => {
		const userData: UserFillable = {
			second_name: formData.fio.split(" ")[0],
			first_name: formData.fio.split(" ")[1],
			patronymic: formData.fio.split(" ")[2],
			email: formData.email,
			login: formData.login,
			password: formData.password,
		};

		const registrationData = await createUser(userData);

		if (!registrationData.success) {
			console.log(`User registration failed: ${registrationData.error}`);
			return;
		}
		console.log(
			`User registration successful: ${registrationData.success}`,
			registrationData.data
		);
	};

	const logIn = async () => {
		const loginData: LoginData = {
			login: formData.login,
			password: formData.password,
		};

		const authData = await login(loginData);

		if (!authData?.success) {
			console.log(`User login failed: ${authData?.error}`);
			return;
		}
		console.log(`User login successful: `, authData.data.token);
		setToken(authData.data.token);
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		regIn();
        logIn();
        
		if(props.onRegister) props.onRegister();
	};

	return (
		<form className="auth-form" onSubmit={onSubmit}>
			<h2 className="auth-form__title">Регистрация</h2>
			<div className="auth-form__content">
				<Input
					className="auth-form__input"
					placeholder="ФИО"
					autoComplete="fio"
					onChange={(e) => setFormData({ ...formData, fio: e.target.value })}
				/>
				<Input
					className="auth-form__input"
					placeholder="Email"
					autoComplete="email"
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<Input
					className="auth-form__input"
					placeholder="Логин"
					autoComplete="login"
					onChange={(e) => setFormData({ ...formData, login: e.target.value })}
				/>
				<Input
					className="auth-form__input"
					type="password"
					placeholder="Пароль"
					autoComplete="password"
					onChange={(e) => setFormData({ ...formData, password: e.target.value })}
				/>
				<Button className="auth-form__button" type="submit" style="thirdy">
					Зарегистрироваться
				</Button>
			</div>
		</form>
	);
};
