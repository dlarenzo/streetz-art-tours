import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="px-2.5">
      {title}
    </Link>
  );
};

export default NavLink;
