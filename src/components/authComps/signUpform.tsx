"use client";
import style from "@/styles/auth/signUp.module.scss";
import { register } from "@/apis/auth/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import "remixicon/fonts/remixicon.css";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validateUsername,
} from "./validate";
import { successState } from "@/store/atoms";
import { useRecoilState } from "recoil";
import { Spinner } from "../common/common";

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
  const [pass, setPass] = useState(false);
  const [submitErrorMsg, setSubmitErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [SignUpSuccess, setIsSuccess] = useRecoilState(successState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setPass(false);
    if (name == "username") {
      const error = validateUsername(value);
      setUsernameError(error);
      if (error) return;
    }
    if (name === "email") {
      const error = validateEmail(value);
      setEmailError(error);
      if (error) return;
    }
    if (name == "password") {
      const error = validatePassword(value);
      setPasswordError(error);
      if (error) return;
    }
    if (name === "passwordConfirm") {
      const error = validatePasswordConfirm(formData.password, value);
      setPasswordConfirmError(error);
      if (error) return;
    }
    if (
      formData.username.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.passwordConfirm.trim() !== ""
    ) {
      setPass(true);
      return;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitErrorMsg("");
    if (
      formData.username.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.passwordConfirm.trim() !== ""
    ) {
      if (
        usernameError === "" &&
        emailError === "" &&
        passwordError === "" &&
        passwordConfirmError === ""
      ) {
        setIsLoading(true);
        // const isSuccess = await register(formData);
        // console.log(isSuccess);
        try {
          const data = await register(formData);
          // 성공 시 실행되는 코드
          setIsSuccess(true);
        } catch (error: any) {
          // 실패 시 실행되는 코드
          if (error.message === "Failed to fetch") {
            submitError("서버오류");
          } else if (error.message === "Network request failed") {
            submitError("인터넷을 확인해보세요");
          } else {
            submitError("회원가입 실패:" + error.message);
          }
        }
        setIsLoading(false);
      } else {
        submitError("정보를 정확히 입력해주세요.");
      }
    } else {
      submitError("정보를 입력해주세요.");
    }
  };

  function submitError(msg: string) {
    setTimeout(() => {
      setSubmitErrorMsg(msg);

      // 원래처럼 3초 뒤에 메시지를 지운다.
      setTimeout(() => {
        setSubmitErrorMsg("");
      }, 3000);
    });
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <i className={`ri-user-line ${style.inputcon}`}></i>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="이름"
          onChange={handleChange}
        />
        {usernameError && (
          <>
            <i className={`ri-error-warning-line ${style.errorcon}`}></i>
            <div className={style.errorMsg}>{usernameError}</div>
          </>
        )}
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
        {emailError && (
          <>
            <i className={`ri-error-warning-line ${style.errorcon}`}></i>
            <div className={style.errorMsg}>{emailError}</div>
          </>
        )}
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
        {passwordError && (
          <>
            <i className={`ri-error-warning-line ${style.errorcon}`}></i>
            <div className={style.errorMsg}>{passwordError}</div>
          </>
        )}
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
        {passwordConfirmError && (
          <>
            <i className={`ri-error-warning-line ${style.errorcon}`}></i>
            <div className={style.errorMsg}>{passwordConfirmError}</div>
          </>
        )}
      </div>
      <button
        type="submit"
        className={
          isLoading
            ? `${style.disabled}`
            : pass
            ? `${style.enabled}`
            : `${style.disabled}`
        }
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : <span>회원가입</span>}
      </button>
      {submitErrorMsg && (
        <div className={style.submitError}>{submitErrorMsg}</div>
      )}
    </form>
  );
};
