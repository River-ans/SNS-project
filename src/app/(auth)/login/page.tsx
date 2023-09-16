//IMPORT
import style from "@/styles/auth/login.module.scss";
import Link from "next/link";
import { ReactNode } from "react";
import { WhiteLineLogo } from "@/components/common/common";

//TYPE
interface TitleProps {
  children: ReactNode;
}

//components
const Logo = () => {
  return (
    <div className={style.logo}>
      <WhiteLineLogo />
    </div>
  );
};

const Divider = () => {
  return (
    <div className={style.divider}>
      <span>또는</span>
    </div>
  );
};

const Form = () => {
  return (
    <form className={style.form}>
      <div>
        <input type="email" name="id" id="id" placeholder="이메일 주소" />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
      </div>
      <button className={style.loginBtn} type="submit">
        <Logo />
        <span>로그인</span>
      </button>
    </form>
  );
};

const GoogleLoginButton = () => {
  <button type="button">Google 계정으로 시작하기</button>;
};

const AuthLinks = () => {
  return (
    <ul className={style.authLinks}>
      <li>
        <Link href="#">회원가입</Link>
      </li>
      <hr />
      <li>
        <Link href="#">비밀번호 찾기</Link>
      </li>
    </ul>
  );
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

//LOGIN PAGE UI
const Login = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Title>And으로 로그인</Title>
        <Form />
        <Divider />
        <AuthLinks />
      </div>
    </main>
  );
};

export default Login;
