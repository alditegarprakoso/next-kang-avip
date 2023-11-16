import Image from "next/image";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className="containerNotFound">
      <div>
        <Image src="/images/not-found.svg" alt="404" width={300} height={300} />
        <p className="size-1 mb-1">Page Not Found</p>
        <p><Link href="/">Back to Home</Link></p>
      </div>
    </div>
  );
}

export default PageNotFound;
