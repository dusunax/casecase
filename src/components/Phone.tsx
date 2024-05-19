"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  imgSrc: string;
  darkMode?: boolean;
}

const Phone = ({ imgSrc, className, darkMode = false, ...props }: Props) => {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rotateY = (mouseX / windowWidth - 0.5) * 20;
      const rotateX = (mouseY / windowHeight - 0.5) * -20;

      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
      style={{ transform }}
    >
      <img
        src={
          darkMode
            ? "/phone/phone-template-dark-edges.png"
            : "/phone/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img
          className="object-cover min-w-full min-h-full bg-blue-500"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};
export default Phone;
