"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, PlusSquare, Heart, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: Library, label: 'Your Library', href: '/library' },
  ];

  const playlists = [
    { name: 'Chill Vibes', href: '/playlist/chill-vibes' },
    { name: 'Workout Mix', href: '/playlist/workout-mix' },
    { name: 'Study Session', href: '/playlist/study-session' },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-primary">Melody Stream</h1>
          <ThemeToggle />
        </div>
        <nav className="space-y-4">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} onClick={() => setIsOpen(false)}>
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
            <Link key={playlist.href} href={playlist.href} onClick={() => setIsOpen(false)}>
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

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Melody Stream</h1>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-60 bg-card/50 border-r border-border flex-col h-screen">
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;