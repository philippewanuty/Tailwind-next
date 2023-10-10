import { BarChart3, CheckSquare, Flag, Home, LayersIcon, User, User2, Users } from 'lucide-react';
import { NavItem } from './NavItem';

export function MainNavegation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart3} />
      <NavItem title="Projects" icon={LayersIcon} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  );
}
