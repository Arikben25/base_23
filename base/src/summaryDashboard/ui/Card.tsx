import type { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  extraAction?: ReactNode;
}

export default function Card({
  icon,
  title,
  extraAction,
  children,
}: CardProps) {
  return (
    <div className="card">
      <header className="headerCard">
        <div className="iconAndTitle">
           {icon}
          <h3 className="titleCard">{title}</h3>
        </div>
        <div className="extraAction">{extraAction}</div>
      </header>
      {children}
    </div>
  );
}
