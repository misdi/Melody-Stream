"use client"

import { Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAudioPlayer } from '@/contexts/AudioPlayerContext'
import { Track } from '@/types/track'

interface PlayButtonProps {
  track: Track
  playlist?: Track[]
  size?: 'default' | 'icon'
  variant?: 'default' | 'ghost' | 'outline'
}

export function PlayButton({ track, playlist, size = 'icon', variant = 'ghost' }: PlayButtonProps) {
  const { currentTrack, isPlaying, playTrack, pauseTrack } = useAudioPlayer()
  const isCurrentTrack = currentTrack?.id === track.id

  const handleClick = () => {
    if (isCurrentTrack && isPlaying) {
      pauseTrack()
    } else {
      playTrack(track, playlist)
    }
  }

  return (
    <Button 
      onClick={handleClick} 
      size={size} 
      variant={variant}
      className="h-8 w-8"
    >
      {isCurrentTrack && isPlaying ? (
        <Pause className="h-4 w-4" />
      ) : (
        <Play className="h-4 w-4" />
      )}
    </Button>
  )
}