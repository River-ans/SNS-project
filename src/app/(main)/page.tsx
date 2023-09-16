import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>main</h2>
      <Link href="/login">login 하러가기</Link>
    </main>
  );
}
