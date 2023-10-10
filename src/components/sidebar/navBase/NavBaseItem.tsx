import { ChevronDown } from 'lucide-react';
import { title } from 'process';
import { ElementType } from 'react';

export interface NavBaseItemProps {
  title: string;
  icon: ElementType;
}

export function NavBaseItem({ title, icon: Icon }: NavBaseItemProps) {
  return (
    <a href="" className="group flex items-center gap-3 rounded-md px-3 py-2 hover:bg-violet-50">
      <Icon className="w-5 h-5 text-zinc-500 group-hover:text-violet-500 " />
      <span className="font-medium  text-zinc-700 group-hover:text-violet-700">{title}</span>
    </a>
  );
}
