"use client"

import Image from 'next/image'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Album } from '../types'
import { formatDuration } from '@/lib/utils'

interface AlbumHeaderProps {
  album: Album
}

export function AlbumHeader({ album }: AlbumHeaderProps) {
  const totalDuration = album.tracks.reduce((acc, track) => acc + track.duration, 0)

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="relative aspect-square w-48 md:w-64 shrink-0">
        <Image
          src={album.imageUrl}
          alt={album.name}
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col justify-end">
        <p className="text-sm font-medium">Album</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">{album.name}</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{album.artist}</span>
          <span>•</span>
          <span>{album.year}</span>
          <span>•</span>
          <span>{album.tracks.length} songs</span>
          <span>•</span>
          <span>{formatDuration(totalDuration)}</span>
        </div>
        <div className="flex gap-4 mt-6">
          <Button size="lg" className="gap-2">
            <Play className="h-5 w-5" />
            Play
          </Button>
        </div>
      </div>
    </div>
  )
}