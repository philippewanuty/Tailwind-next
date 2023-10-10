import { Home, LifeBuoy, LogOut, Settings } from 'lucide-react';
import { NavBaseItem } from './NavBaseItem';
import { NavFeaturedCard } from './NavFeaturedCard';
import { Profile } from './Profile';

export function BaseNavegation() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavBaseItem title="Support" icon={LifeBuoy} />
        <NavBaseItem title="Settings" icon={Settings} />
      </nav>

      <NavFeaturedCard />

      <div className="border-b border-zinc-200"></div>

      <Profile />
      
    </div>
  );
}
