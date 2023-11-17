import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";

import styles from "./Products.module.css";
import { fetcher, formatRupiah } from "@/helper/helper";
import SkeletonComponent from "@/components/elements/Skeleton";

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

  // const fetchProducts = async () => {
  //   const response = await fetch("/api/products");
  //   const data = await response.json();
  //   setProducts(data.data);
  // };

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  });

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  return (
    <>
      <div className={styles.container}>
        <h1>Product Page</h1>
        {!isLoading && data.data.length > 0 ? (
          <div className={styles.wrapCard}>
            {data.data.map((product: ProductType) => (
              <div key={product.id} className={styles.card}>
                {/* <Image src={product.image} alt={product.name} width={200} height={200} /> */}
                <img src={product.image} alt={product.name} />
                <p className={styles.category}>{product.category}</p>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.price}>{formatRupiah(product.price)}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex mt-10 flex-wrap gap-8">
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
          </div>
        )}
      </div>
    </>
  );
}

export default ProductPage;
