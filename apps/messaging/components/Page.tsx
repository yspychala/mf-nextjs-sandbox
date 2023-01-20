import dynamic from "next/dynamic";
import Link from "next/link";
import myFn from "host/myFn";
import { useTheme } from "styled-components";

const Header = dynamic(() => import("host/Header"));

const Page = ({ title, linkTo, store }) => {
  const theme = useTheme();
  console.log("THEEEEME", theme);
  return (
    <div>
      <Header store={store} />
      <h1>{title}</h1>
      <h2>myFunction result: {myFn(2)}</h2>
      <nav>
        <Link href={linkTo}>Navigate</Link>
      </nav>
    </div>
  );
};

export default Page;
