"use client";

import { login } from "@/shared/api/auth";
import { LoginData } from "@/shared/api/types/auth";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { Button } from "@/shared/ui/Button/ui/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";

type Props = {
	onLogin?: () => void;
}

export const Login = (props: Props) => {
	const [formData, setFormData] = useState<LoginData>({
		login: "",
		password: "",
	});
	const [token, setToken] = useLocalStorage("token");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginData = await login(formData);

		if(!loginData?.success) {
			console.log("Login failed: " + loginData?.error);
			return;
		}
        console.log("Login successful: " + loginData.data.token);
		setToken(loginData.data.token);

		if(props.onLogin) props.onLogin();
    }

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
