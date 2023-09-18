"use client";
import style from "@/styles/auth/signUp.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import "remixicon/fonts/remixicon.css";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <i className="ri-user-line"></i>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="이름"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWrapper}>
        <i className="ri-mail-line"></i>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWrapper}>
        <i className="ri-lock-line"></i>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWrapper}>
        <i className="ri-lock-password-line"></i>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        <span>회원가입</span>
      </button>
    </form>
  );
};
