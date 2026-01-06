import * as React from "react";
type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <article className="card shadow-sm">
      {children}
    </article>
  );
}
