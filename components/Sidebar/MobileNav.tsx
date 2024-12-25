"use client"

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetHeader,
  SheetTitle 
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarContent } from './SidebarContent';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary">Melody Stream</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <SidebarContent onNavigation={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}