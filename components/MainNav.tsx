"use client";

import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IMainNav {
  data: Category[];
}

const MainNav: React.FC<IMainNav> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    label: route.name,
    href: `/category/${route.id}`,
    actiive: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={`text-sm font-medium transition-colors hover:text-black ${
              route.actiive ? "text-black" : "text-neutral-500"
            }`}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};
export default MainNav;
