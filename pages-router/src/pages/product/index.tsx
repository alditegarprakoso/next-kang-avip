import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from './Products.module.css'

type ProductType = {
  id: number;
  name: string;
  price: number;
};

function ProductPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data.data);
  };

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    } else {
      fetchProducts();
    }
  });

  return (
    <>
      <div className={styles.container}>
        <h1>Product Page</h1>
        {products.length > 0 && (
          <ul>
            {products.map((product: ProductType) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ProductPage;
