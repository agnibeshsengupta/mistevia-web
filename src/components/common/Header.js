"use client"

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { HeaderLinks } from "../../constants/Header"



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home"
  ];

  return (
    <Navbar isBordered
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-slate-800">
      <NavbarContent>
        <NavbarBrand as={Link} href="/">
          <Image src="/assets/images/MisteviaLogo.png" width={300} height={300} alt="mistevia Logo" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white"
        />

      </NavbarContent>

      <NavbarContent className="hidden md:flex">
        {HeaderLinks && HeaderLinks.map((item) =>
          <NavbarItem>
            <Link className="text-lg text-white" href={item.route}>
              {item.name}
            </Link>
          </NavbarItem>)}
      </NavbarContent>
      <NavbarMenu>
        {HeaderLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.route}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
