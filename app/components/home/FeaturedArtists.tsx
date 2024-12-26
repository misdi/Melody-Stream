"use client"

import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { artists } from '@/app/artist/data/artists'

export function FeaturedArtists() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {artists.map((artist) => (
          <Link key={artist.id} href={`/artist/${artist.id}`} className="block">
            <div className="w-[150px] text-center group">
              <Avatar className="w-[150px] h-[150px] group-hover:ring-2 ring-primary transition-all">
                <AvatarImage src={artist.imageUrl} alt={artist.name} />
                <AvatarFallback>{artist.name[0]}</AvatarFallback>
              </Avatar>
              <div className="mt-2">
                <p className="font-medium group-hover:text-primary transition-colors">{artist.name}</p>
                <p className="text-sm text-muted-foreground">{artist.monthlyListeners} monthly listeners</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}