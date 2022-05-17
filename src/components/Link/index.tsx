import React from "react";
import Link from "next/link";

interface Props {
  children?: React.ReactElement;
  label?: string;
  className?: string;
  href: string;
}

const LinkComponent = ({
  children,
  href,
  className,
  label,
}: Props): JSX.Element => {
  return (
    <Link href={href} passHref>
      <a className={className}> {children ? children : label}</a>
    </Link>
  );
};

export default LinkComponent;
