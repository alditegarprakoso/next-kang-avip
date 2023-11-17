type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export default function StaticRendering({ products }: { products: Product[] }) {
  return (
    <div className="container px-8 py-6 ">
      <p className="mb-3">Static Site Generation</p>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src={product.image} alt={product.name} className="w-40" />
              <p>{product.category}</p>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // fetch data
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
