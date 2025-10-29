"use client";

import React from "react";
import CardNav from "@/components/CardNav"; // adjust path if needed
// Using text-based logo instead of image

export default function Header() {
  const items = [
    
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Home", href: "/#home" },
        { label: "Company", ariaLabel: "About Company", href: "/#about" },
        { label: "Careers", ariaLabel: "About Careers", href: "/#about" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "/#projects" },
        { label: "All Projects", ariaLabel: "All Projects", href: "/all-projects" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "sheikhmuhammadismail@example.com" },
        { label: "Twitter", ariaLabel: "Twitter", href: "https://x.com/SheikhIsmail83" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com/" },
      ],
    },
  ];

  return (
    <CardNav
      logo="Sheikh Muhammad Ismail"
      logoAlt="Sheikh Muhammad Ismail"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power6.out"
    />
  );
}
