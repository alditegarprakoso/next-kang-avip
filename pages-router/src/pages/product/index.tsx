import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function ProductPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  });

  return (
    <>
      <div>
        <h1>Product Page</h1>
      </div>
    </>
  );
}

export default ProductPage;
