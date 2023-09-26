"use client";

import "remixicon/fonts/remixicon.css";
import style from "@/styles/auth/signUp.module.scss";
import { successState } from "@/store/atoms";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

export function SignupSuccess() {
  const router = useRouter();
  const [SignUpSuccess, setIsSuccess] = useRecoilState(successState);

  const goToLogin = () => {
    setIsSuccess(false); // 초기값으로 설정
    router.push("/login"); // 로그인 페이지로 이동
  };

  if (SignUpSuccess) {
    return (
      <div className={style.backdrop}>
        <div className={style.modal}>
          <div className={style.successIcon}>
            <i className="ri-check-line"></i>
          </div>
          <h2>회원가입 완료</h2>
          <p>지금 바로 로그인하고 AND를 사용해보세요!</p>
          <button onClick={goToLogin}>로그인하러 가기</button>
        </div>
      </div>
    );
  }
}
