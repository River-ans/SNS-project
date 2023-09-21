// username 유효성 검사 함수
export const validateUsername = (username: string) => {
  // 정규표현식을 사용하여 유효성 검사를 수행합니다.
  const regex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

  if (username == "") {
    return "";
  }
  if (!regex.test(username)) {
    return "이름은 알파벳 소문자, 숫자, 또는 한글 문자로 이루어진 2글자 이상 16글자 이하여야 합니다.";
  }
  return ""; // 유효한 경우 오류 메시지 없음
};

export const validateEmail = (email: string) => {
  // 이메일 형식을 검사하는 정규표현식
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email == "") {
    return "";
  }
  if (!emailPattern.test(email)) {
    return "유효한 이메일 주소를 입력하세요.";
  }

  return ""; // 유효한 경우 오류 메시지 없음
};

// 비밀번호 유효성 검사 함수
export const validatePassword = (password: string) => {
  // 정규표현식을 사용하여 유효성 검사를 수행합니다.
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~])[a-zA-Z\d!@#$%^&*()_+{}[\]:;<>,.?~]{10,}$/;
  if (password == "") {
    return "";
  }
  if (!regex.test(password)) {
    return "비밀번호는 최소 10자 이상이어야 하며, 영문자, 숫자, 특수문자가 모두 포함되어야 합니다.";
  }

  return ""; // 유효한 경우 오류 메시지 없음
};

// 비밀번호 재확인 검사 함수
export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string
) => {
  if (passwordConfirm == "") {
    return "";
  }
  if (password !== passwordConfirm) {
    return "비밀번호와 비밀번호 일치하지 않습니다.";
  }

  return ""; // 유효한 경우 오류 메시지 없음
};
