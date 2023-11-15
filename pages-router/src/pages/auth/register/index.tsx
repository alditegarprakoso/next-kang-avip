import Link from "next/link";

function RegisterPage() {
  return (
    <>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun ? Login <Link href="/auth/login">Sekarang</Link>
      </p>
    </>
  );
}

export default RegisterPage;
