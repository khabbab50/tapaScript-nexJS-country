import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between flex-wrap p-3 ">
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <ul className="flex gap-2">
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
