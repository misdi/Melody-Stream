"use client"

import { useState } from 'react';
import { MobileNav } from './MobileNav';
import { SidebarContent } from './SidebarContent';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="hidden md:flex w-60 bg-card/50 border-r border-border flex-col h-screen">
        <SidebarContent />
      </div>
    </>
  );
}