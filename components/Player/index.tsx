"use client"

import { useAudioPlayer } from '@/contexts/AudioPlayerContext'
import { PlayerControls } from './PlayerControls'
import { PlayerProgress } from './PlayerProgress'
import { TrackInfo } from './TrackInfo'
import { VolumeControl } from './VolumeControl'

export default function Player() {
  const { currentTrack, audio } = useAudioPlayer()

  if (!currentTrack) return null

  const handleSeek = (time: number) => {
    if (audio) {
      audio.currentTime = time
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <TrackInfo />
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col items-center gap-2">
              <PlayerControls />
              <PlayerProgress 
                audio={audio} 
                onSeek={handleSeek}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <VolumeControl audio={audio} />
          </div>
        </div>
      </div>
    </div>
  )
}