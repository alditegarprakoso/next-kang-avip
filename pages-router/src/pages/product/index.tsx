import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./Products.module.css";
import Image from "next/image";

type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
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
    }
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Product Page</h1>
        {products.length > 0 && (
          <div className={styles.wrapCard}>
            {products.map((product: ProductType) => (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={product.name} />
                <p className={styles.title}>{product.name}</p>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.category}>{product.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductPage;
