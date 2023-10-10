import { Home, ChevronDown } from 'lucide-react';
import { ElementType } from 'react';

export interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a href="" className="group flex items-center gap-3 rounded-md px-3 py-2 hover:bg-violet-50">
      <Icon className="w-5 h-5 text-zinc-500 " />
      <span className="font-medium  text-zinc-700 group-hover:text-violet-700">{title}</span>
      <ChevronDown className=" ml-auto w-5 h-5  text-zinc-400 group-hover:text-violet-400" />
    </a>
  );
}
