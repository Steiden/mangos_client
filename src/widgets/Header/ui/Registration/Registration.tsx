"use client";

import { createUser } from "@/entities/User/api/users";
import { UserFillable } from "@/entities/User/types/user";
import { login } from "@/shared/api/auth";
import { LoginData, RegistrationData } from "@/shared/api/types/auth";
import { ModalActive } from "@/shared/types/modal";
import { Button } from "@/shared/ui/Button/ui/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

type Props = {
	onRegister?: () => void;
	active: ModalActive;
};

export const Registration = ({ onRegister, active }: Props) => {
	const [token, setToken] = useLocalStorage("token", "");
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
			return;
		}
	};

	const logIn = async () => {
		const loginData: LoginData = {
			login: formData.login,
			password: formData.password,
		};

		const authData = await login(loginData);

		if (!authData?.success) {
			return;
		}
		setToken(authData.data.token);
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		regIn();
        logIn();
		active.setIsActive(false);
        
		if(onRegister) onRegister();
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
