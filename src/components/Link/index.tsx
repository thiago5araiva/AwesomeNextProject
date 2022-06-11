import React from "react";
import Link from "next/link";

interface Props {
  children?: React.ReactElement[] | any;
  label?: string;
  customClass?: string;
  href: string;
}

const LinkComponent = ({
  children,
  href,
  customClass,
  label,
}: Props): JSX.Element => {
  return (
    <Link href={href} passHref>
      <a className={customClass}> {children ? children : label}</a>
    </Link>
  );
};

export default LinkComponent;
