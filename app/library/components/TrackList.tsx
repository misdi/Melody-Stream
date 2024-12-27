"use client"

import { Play, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { formatDuration } from "@/lib/utils"
import { PlayButton } from "@/components/PlayButton"
import { useAudioPlayer } from "@/contexts/AudioPlayerContext"

interface Track {
  id: number
  title: string
  artist: string
  album?: string
  duration: number
  plays: number
  imageUrl: string
  audioUrl?: string
}

interface TrackListProps {
  tracks: Track[]
}

export function TrackList({ tracks }: TrackListProps) {
  const { currentTrack } = useAudioPlayer()

  return (
    <div className="space-y-1">
      <div className="grid grid-cols-[auto_1fr_1fr_auto] md:grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 px-4 py-2 text-sm text-muted-foreground font-medium">
        <div className="w-8 text-center">#</div>
        <div>Title</div>
        <div className="hidden md:block">Album</div>
        <div>Plays</div>
        <div className="w-16 text-right">Duration</div>
      </div>
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className={`grid grid-cols-[auto_1fr_1fr_auto] md:grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 px-4 py-2 text-sm hover:bg-accent group rounded-md ${
            currentTrack?.id === track.id.toString() ? 'bg-accent' : ''
          }`}
        >
          <div className="w-8 flex items-center justify-center">
            <span className="group-hover:hidden">{index + 1}</span>
            <div className="hidden group-hover:block">
              <PlayButton 
                track={{
                  ...track,
                  id: track.id.toString(),
                  audioUrl: track.audioUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                }}
                playlist={tracks.map(t => ({
                  ...t,
                  id: t.id.toString(),
                  audioUrl: t.audioUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                }))}
              />
            </div>
          </div>
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-10 h-10 overflow-hidden rounded">
              <Image
                src={track.imageUrl}
                alt={`Album artwork for ${track.title} by ${track.artist}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate font-medium">{track.title}</span>
              <span className="text-muted-foreground truncate">{track.artist}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center text-muted-foreground truncate">
            {track.album}
          </div>
          <div className="flex items-center text-muted-foreground">
            {track.plays.toLocaleString()}
          </div>
          <div className="flex items-center justify-end gap-2 text-muted-foreground">
            <span>{formatDuration(track.duration)}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}