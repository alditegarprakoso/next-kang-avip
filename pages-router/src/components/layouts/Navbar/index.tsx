import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="flex justify-between w-full">
        <div>
          <p>
            <Link href="/">Adidas Store</Link>
          </p>
        </div>
        <div>
          <p>
            <Link href="/products">Products</Link>
          </p>
        </div>
        <div>
          <p>
            <Link href="/">Logout</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
