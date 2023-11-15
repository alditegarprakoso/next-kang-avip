import { useRouter } from "next/router";

function ShopPage() {
  const { query } = useRouter();
  return (
    <>
      <p>Page : Shop Page</p>
      <br />
      <p>Ini adalah slug parameter dari Path/Router : {query.slug ? JSON.stringify(query) : 'Tidak ada path setelah /shop'}</p>
    </>
  );
}

export default ShopPage;
