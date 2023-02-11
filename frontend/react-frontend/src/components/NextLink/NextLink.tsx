import React from "react";
import Link, { LinkProps } from "next/link";

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NextLink: React.FC<NextLinkProps> = ({ children, ...otherProps }) => {
  return (
    <Link {...otherProps} style={{ textDecoration: "unset", color: "unset" }}>
      {children}
    </Link>
  );
};

export default NextLink;
