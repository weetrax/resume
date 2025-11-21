"use client";

import { Button } from "@/components/ui/button";
import {
  UsersIcon,
  MailIcon,
  Building2Icon,
  FlaskConicalIcon,
} from "lucide-react";

export function Navbar() {
  const menuItems = [
    { icon: UsersIcon, label: "À propos", href: "#" },
    { icon: Building2Icon, label: "Expériences", href: "#experiences" },
    { icon: FlaskConicalIcon, label: "Projets", href: "#projects" },
    { icon: MailIcon, label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center justify-center gap-2 backdrop-blur-md border border-border shadow-lg rounded-full px-2 py-2">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            asChild
            className="rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <a href={item.href} className="flex items-center gap-2">
              <item.icon className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                {item.label}
              </span>
            </a>
          </Button>
        ))}
      </div>
    </nav>
  );
}
