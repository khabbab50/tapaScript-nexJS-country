"use client";
import { useRouter } from "next/navigation";

const NavButton = () => {
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.push("/")}>
        Take me back to Home
      </button>
    </div>
  );
};

export default NavButton;
