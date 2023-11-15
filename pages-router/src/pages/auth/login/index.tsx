import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Login.module.css';

function LoginPage() {
  const router = useRouter();

  const handlerLogin = () => {
    router.push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.headerTitle}>Login Page</h1>
      <button type="button" onClick={handlerLogin}>
        Login
      </button>
      <p>
        Belum punya akun ? Registrasi{" "}
        <Link href="/auth/register">Sekarang</Link>
      </p>
    </div>
  );
}

export default LoginPage;
