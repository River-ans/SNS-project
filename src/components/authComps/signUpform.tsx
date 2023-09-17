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

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const validateField = (
    name: string,
    value: string,
    formData: any,
    formErrors: any
  ) => {
    switch (name) {
      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return { ...formErrors, email: "이메일 형식이 잘못됐습니다" };
        } else {
          return { ...formErrors, email: "" };
        }
      case "password":
        if (value.length < 10 || /\s/.test(value)) {
          return {
            ...formErrors,
            password: "비밀번호는 10자 이상, 띄어쓰기 없이 입력해야 합니다",
          };
        } else {
          return { ...formErrors, password: "" };
        }
      case "passwordConfirm":
        if (value !== formData.password) {
          return { ...formErrors, passwordConfirm: "비밀번호가 일치하지 않아" };
        } else {
          return { ...formErrors, passwordConfirm: "" };
        }
      case "username":
        const allowedCharsRegex = /^[가-힣A-Za-z\s]+$/;

        if (!value) {
          return {
            ...formErrors,
            username: "이름이 비어있습니다",
          };
        }
        if (value.length < 2) {
          return {
            ...formErrors,
            username: "두 글자 이상이어야 합니다",
          };
        }
        if (/\s/.test(value)) {
          return {
            ...formErrors,
            username: "이 이름은 사용불가 합니다",
          };
        }
        if (!allowedCharsRegex.test(value)) {
          return { ...formErrors, username: "이 이름은 사용불가 합니다" };
        }
        return { ...formErrors, username: "" };
      default:
        return formErrors;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // 따로 분리한 유효성 검사 함수 호출
    const newFormErrors = validateField(name, value, formData, formErrors);
    setFormErrors(newFormErrors);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(formErrors).every((err) => err === "")) {
      console.log("Form data submitted", formData);
      // 여기서 회원가입 API 호출
    } else {
      console.log("Form errors", formErrors);
      const firstError = Object.values(formErrors).find((err) => err !== "");
      console.log("첫 번째 에러:", firstError);
    }
  };

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
