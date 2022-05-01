import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactElement;
  href: string;
}

const LinkComponent = ({ children, href }: Props): JSX.Element => {
  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
};

export default LinkComponent;
