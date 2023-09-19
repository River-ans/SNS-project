"use client";
import style from "@/styles/auth/signUp.module.scss";
import { log } from "console";
import { ChangeEvent, FormEvent, useState } from "react";
import "remixicon/fonts/remixicon.css";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [emailError, setEmailError] = useState("");
  // username 유효성 검사 함수
  const validateUsername = (username: string) => {
    // 정규표현식을 사용하여 유효성 검사를 수행합니다.
    const regex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

    if (!regex.test(username)) {
      return "이름은 알파벳 소문자, 숫자, 또는 한글 문자로 이루어진 2자 이상 16자 이하여야 합니다.";
    }
    return ""; // 유효한 경우 오류 메시지 없음
  };

  const validateEmail = (email: string) => {
    // 이메일 형식을 검사하는 정규표현식
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      return "유효한 이메일 주소를 입력하세요.";
    }

    return ""; // 유효한 경우 오류 메시지 없음
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = (password: string) => {
    // 정규표현식을 사용하여 유효성 검사를 수행합니다.
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?])[a-zA-Z\d!@#$%^&*()-_=+[\]{}|;:'",.<>?]{10,}$/;

    if (!regex.test(password)) {
      return "비밀번호는 최소 10자 이상이어야 하며, 영문자, 숫자, 특수문자가 모두 포함되어야 합니다.";
    }

    return ""; // 유효한 경우 오류 메시지 없음
  };

  // 비밀번호 재확인 검사 함수
  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string
  ) => {
    if (password !== passwordConfirm) {
      return "비밀번호와 비밀번호 확인이 일치하지 않습니다.";
    }

    return ""; // 유효한 경우 오류 메시지 없음
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name == "username") {
      const error = validateUsername(value);
      setUsernameError(error);
    }
    if (name === "email") {
      const error = validateEmail(value);
      setEmailError(error);
    }
    if (name == "password") {
      const error = validatePassword(value);
      setPasswordError(error);
    }
    if (name === "passwordConfirm") {
      const error = validatePasswordConfirm(formData.password, value);
      setPasswordConfirmError(error);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 서버로 데이터를 전송하는 코드를 여기에 추가해야 합니다.
    // fetch("http://localhost:4000/auth/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("회원가입 성공:", data);
    //   })
    //   .catch((error) => {
    //     console.error("회원가입 실패:", error);
    //   });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <div className={style.inputBox}>
          <i className={`ri-user-line ${style.inputcon}`}></i>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="이름"
            onChange={handleChange}
          />
          {usernameError && (
            <i className={`ri-error-warning-line ${style.errorcon}`}></i>
          )}
        </div>
        {usernameError && <div className={style.errorMsg}>{usernameError}</div>}
      </div>
      <div className={style.inputWrapper}>
        <i className={`ri-mail-line ${style.inputcon}`}></i>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWrapper}>
        <i className={`ri-lock-line ${style.inputcon}`}></i>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWrapper}>
        <i className={`ri-lock-password-line ${style.inputcon}`}></i>
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
