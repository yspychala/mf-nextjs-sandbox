import Link from "next/link";
import Header from "./Header";

import myFn from "../myFunction";

const Page = ({ title, linkTo }) => {
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <h2>myFunction result: {myFn(2)}</h2>
      <nav>
        <Link href={linkTo}>Navigate</Link>
      </nav>
    </div>
  );
};

export default Page;
