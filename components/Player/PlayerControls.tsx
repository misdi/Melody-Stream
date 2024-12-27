"use client"

import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAudioPlayer } from '@/contexts/AudioPlayerContext'

export function PlayerControls() {
  const { isPlaying, togglePlayPause } = useAudioPlayer()

  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <SkipBack className="h-4 w-4" />
      </Button>
      <Button 
        onClick={togglePlayPause} 
        size="icon"
        variant="outline"
        className="h-10 w-10"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <SkipForward className="h-4 w-4" />
      </Button>
    </div>
  )
}