"use client"

import Image from 'next/image'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Artist } from '../types'

interface ArtistHeaderProps {
  artist: Artist
}

export function ArtistHeader({ artist }: ArtistHeaderProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">{artist.name}</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>{artist.followers} followers</span>
          <span>•</span>
          <span>{artist.monthlyListeners} monthly listeners</span>
        </div>
        <div className="flex gap-4 mt-6 justify-center">
          <Button size="lg" className="gap-2">
            <Play className="h-5 w-5" />
            Play
          </Button>
          <Button size="lg" variant="outline">
            Follow
          </Button>
        </div>
      </div>
    </div>
  )
}