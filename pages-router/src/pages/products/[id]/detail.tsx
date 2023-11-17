import { useRouter } from "next/router";

function DetailProductPage() {
  const { query } = useRouter();

  return (
    <>
      <div>Detail Product Page</div>
      <p>ID : {query.id}</p>
    </>
  );
}

export default DetailProductPage;
