"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }) {
  const [active, setActive] = useState(null); // Remove TypeScript-specific syntax

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href={"/profile"}>
          <MenuItem setActive={setActive} active={active} item="Profile" />
        </Link>
        <Link href={"/Jobs"}>
          <MenuItem setActive={setActive} active={active} item="Jobs" />
        </Link>
        <Link href={"/api/auth/login"}>
          <MenuItem setActive={setActive} active={active} item="LogIn" />
        </Link>
        <Link href={"/api/auth/logout"}>
          <MenuItem setActive={setActive} active={active} item="LogOut" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
