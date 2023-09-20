export function register(formData) {
  fetch("http://localhost:4000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message || "회원가입 실패");
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log("회원가입 성공:", data);
    })
    .catch((error) => {
      console.error("회원가입 실패:", error);
    });
}
