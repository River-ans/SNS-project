import { SignupSuccess } from "@/components/authComps/signupSuccess";
import { SignupForm } from "@/components/authComps/signUpform";
import style from "@/styles/auth/signUp.module.scss";

const SignUp = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1>회원가입</h1>
        <SignupForm />
        <SignupSuccess />
      </div>
    </main>
  );
};
export default SignUp;
