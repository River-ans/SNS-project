import { SignupForm } from "@/components/authComps/signUpform";
import style from "@/styles/auth/signUp.module.scss";

const SignUp = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1>회원가입</h1>
        <SignupForm />
      </div>
    </main>
  );
};
export default SignUp;
