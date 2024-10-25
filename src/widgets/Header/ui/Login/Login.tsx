"use client";

import { updateUser } from "@/entities/User/model/thunk";
import { login } from "@/shared/api/auth";
import { LoginData } from "@/shared/api/types/auth";
import { AppDispatch } from "@/shared/store/store";
import { ModalActive } from "@/shared/types/modal";
import { Button } from "@/shared/ui/Button/ui/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "usehooks-ts";

type Props = {
	onLogin?: () => void;
	active: ModalActive;
};

export const Login = ({ onLogin, active }: Props) => {
	const dispatch = useDispatch<AppDispatch>();
	const [formData, setFormData] = useState<LoginData>({
		login: "",
		password: "",
	});
	const [token, setToken] = useLocalStorage("token", "");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const loginData = await login(formData);

		if (!loginData?.success) {
			return;
		}

		setToken(loginData.data.token);
		dispatch(updateUser(loginData.data.token));
		active.setIsActive(false);

		if (onLogin) onLogin();
	};

	return (
		<form className="auth-form" onSubmit={onSubmit}>
			<h2 className="auth-form__title">Авторизация</h2>
			<div className="auth-form__content">
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
					Войти
				</Button>
			</div>
		</form>
	);
};
