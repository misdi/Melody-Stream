"use client"

import { Volume2 } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { useState, useEffect } from 'react'

interface VolumeControlProps {
  audio: HTMLAudioElement | null
}

export function VolumeControl({ audio }: VolumeControlProps) {
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    if (audio) {
      audio.volume = volume
    }
  }, [audio, volume])

  return (
    <div className="flex items-center space-x-2">
      <Volume2 className="h-5 w-5" />
      <Slider
        value={[volume]}
        max={1}
        step={0.01}
        onValueChange={(value) => setVolume(value[0])}
        className="w-24"
      />
    </div>
  )
}