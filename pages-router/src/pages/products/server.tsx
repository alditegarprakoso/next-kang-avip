import { ProductType } from "@/types/product.type";

// props products ini didapat dari return getServerSideProps

function ProductServerSidePage({ products }: { products: ProductType[] }) {
  return (
    <div className="container px-8 py-6 ">
      <p className="mb-5">Server Side Rendering</p>
      <div className="flex gap-4 justify-center">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductServerSidePage;

export async function getServerSideProps() {
  // fetch data
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}
