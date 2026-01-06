"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Button({ children, href = "#", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`btn-primary inline-block rounded-md ${className}`}>
      {children}
    </a>
  );
}
