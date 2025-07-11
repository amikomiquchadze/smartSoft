import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  login,
  selectAuthError,
  selectAuthLoading,
  selectToken,
} from "../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { LoginForm } from "../../api/model/payloadInterfaces";
import * as S from "./Login.Styled";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const loading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);

  const [form, setForm] = useState<LoginForm>({ username: "", password: "" });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  useEffect(() => {
    if (token) {
      localStorage.setItem("username", form.username);
      navigate("/captions");
    }
  }, [token, navigate, form.username]);

  const validateForm = () => {
    const newErrors: Partial<LoginForm> = {};
    if (!form.username.trim()) newErrors.username = "Email is required.";
    if (!form.password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(login(form));
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>Welcome Back!</S.Title>

        <S.Form onSubmit={handleSubmit} noValidate>
          <S.Field>
            <S.Label htmlFor="username">UserName</S.Label>
            <S.Input
              id="username"
              name="username"
              type="email"
              placeholder="Enter your Email"
              value={form.username}
              onChange={handleChange}
              hasError={!!errors.username}
            />
            {errors.username && <S.ErrorText>{errors.username}</S.ErrorText>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              value={form.password}
              onChange={handleChange}
              hasError={!!errors.password}
            />
            {errors.password && <S.ErrorText>{errors.password}</S.ErrorText>}
          </S.Field>

          {error && <S.ErrorText>{error}</S.ErrorText>}

          <S.Button type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </S.Button>
        </S.Form>

        <S.Footer>
          Don’t have an account?{" "}
          <S.FooterLink to="/register">Sign up</S.FooterLink>
        </S.Footer>
      </S.Card>
    </S.Container>
  );
}
