"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { navigationRoutes, playlists } from './routes';

interface SidebarContentProps {
  onNavigation?: () => void;
}

export function SidebarContent({ onNavigation }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-primary">Melody Stream</h1>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
        <nav className="space-y-4">
          {navigationRoutes.map((route) => (
            <Link key={route.href} href={route.href} onClick={onNavigation}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  pathname === route.href && "bg-accent text-accent-foreground"
                )}
              >
                <route.icon className="mr-2 h-4 w-4" />
                {route.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <Separator className="my-4" />
      <ScrollArea className="flex-1 px-6">
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start text-primary">
            <PlusSquare className="mr-2 h-4 w-4" />
            Create Playlist
          </Button>
          <Button variant="outline" className="w-full justify-start text-primary">
            <Heart className="mr-2 h-4 w-4" />
            Liked Songs
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-2">
          {playlists.map((playlist) => (
            <Link key={playlist.href} href={playlist.href} onClick={onNavigation}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  pathname === playlist.href && "bg-accent text-accent-foreground"
                )}
              >
                {playlist.name}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}