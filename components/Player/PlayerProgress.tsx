"use client"

import { Slider } from '@/components/ui/slider'
import { useEffect, useState } from 'react'

interface PlayerProgressProps {
  audio: HTMLAudioElement | null
  onSeek: (value: number) => void
}

export function PlayerProgress({ audio, onSeek }: PlayerProgressProps) {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleDurationChange = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('durationchange', handleDurationChange)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('durationchange', handleDurationChange)
    }
  }, [audio])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full flex items-center space-x-2">
      <span className="text-xs text-muted-foreground w-12 text-right">
        {formatTime(currentTime)}
      </span>
      <Slider
        value={[currentTime]}
        max={duration}
        step={1}
        onValueChange={(value) => onSeek(value[0])}
        className="flex-1"
      />
      <span className="text-xs text-muted-foreground w-12">
        {formatTime(duration)}
      </span>
    </div>
  )
}