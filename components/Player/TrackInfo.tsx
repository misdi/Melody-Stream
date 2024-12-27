"use client"

import Image from 'next/image'
import { useAudioPlayer } from '@/contexts/AudioPlayerContext'

export function TrackInfo() {
  const { currentTrack } = useAudioPlayer()

  if (!currentTrack) return null

  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-14 h-14 rounded-md overflow-hidden">
        <Image
          src={currentTrack.imageUrl}
          alt={currentTrack.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium leading-none">{currentTrack.title}</h3>
        <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
      </div>
    </div>
  )
}