"use client"

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { HeaderLinks } from "../../constants/Header"
import { Link } from "react-scroll";


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
      className="bg-slate-800 h-20">
      <NavbarContent>
        <NavbarBrand as={Link} href="/">
          <Image src="/assets/images/MisteviaLogo.png" width={300} height={300} alt="mistevia Logo" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white"
        />

      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        {HeaderLinks && HeaderLinks.map((item, index) =>
          <NavbarItem key={`${item.name}-${index}`}>
            <Link to={item.route} smooth duration={800} className="text-white cursor-pointer text-lg">{item.name}</Link>
          </NavbarItem>)}
      </NavbarContent>
      <NavbarMenu>
        {HeaderLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link to={item.route} smooth duration={800} className="text-white cursor-pointer text-lg">{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar >
  );
}

export default Header;
