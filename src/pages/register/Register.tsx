
import React, { useState } from "react";
import { registerUser, type RegisterForm } from "../../api/client";
import * as S from "./Register.Styled";

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    username: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] =
    useState<{ text: string; success: boolean } | null>(null);

  const validateForm = () => {
    const newErrors: Partial<RegisterForm> = {};
    if (!form.username.trim()) newErrors.username = "Username is required.";
    else if (form.username.length < 3)
      newErrors.username = "At least 3 characters.";
    if (!form.password) newErrors.password = "Password is required.";
    else if (form.password.length < 6)
      newErrors.password = "At least 6 characters.";
    if (form.confirm_password !== form.password)
      newErrors.confirm_password = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setMessage(null);
    try {
      const { data } = await registerUser(form);
      if ((data as any).errorMessage) {
        setMessage({ text: (data as any).errorMessage, success: false });
      } else {
        setMessage({ text: "Registration successful!", success: true });
      }
    } catch (err: any) {
      console.error(err);
      const serverMsg =
        err.response?.data?.errorMessage ||
        err.response?.data?.message ||
        err.message ||
        "Something went wrong.";
      setMessage({ text: serverMsg, success: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>Create an Account</S.Title>
        <S.Form onSubmit={handleSubmit} noValidate>
          <S.Label htmlFor="username">UserName</S.Label>
          <S.Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            hasError={!!errors.username}
          />
          {errors.username && <S.ErrorText>{errors.username}</S.ErrorText>}

          <S.Label htmlFor="password">Password</S.Label>
          <S.Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            hasError={!!errors.password}
          />
          {errors.password && <S.ErrorText>{errors.password}</S.ErrorText>}

        
          <S.Label htmlFor="confirm_password">Confirm Password</S.Label>
          <S.Input
            id="confirm_password"
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            value={form.confirm_password}
            onChange={handleChange}
            hasError={!!errors.confirm_password}
          />
          {errors.confirm_password && (
            <S.ErrorText>{errors.confirm_password}</S.ErrorText>
          )}

          <S.Button type="submit" disabled={submitting}>
            {submitting ? "Registering…" : "Register"}
          </S.Button>
        </S.Form>

        {message && <S.Message success={message.success}>{message.text}</S.Message>}
      </S.Card>
    </S.Container>
  );
}
