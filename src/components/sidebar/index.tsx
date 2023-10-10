import { Logo } from './logo';
import { Search } from 'lucide-react';
import { MainNavegation } from './mainNavegation';
import { BaseNavegation } from './navBase';
import { InputControl, InputPrefix, InputRoot } from './mainNavegation/Input';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 px-4 py-8 border-r border-zinc-300 ">
      
      <Logo />

      <InputRoot>
        <InputPrefix>
        <Search className='h-5 w-5 text-zinc-500'/> 
        </InputPrefix>
        <InputControl placeholder='Search'/>
      </InputRoot>

      <MainNavegation />

      <BaseNavegation />
    </aside>
  );
}
