"use client"

import { sampleTracks } from '@/lib/sample-tracks'
import { usePlayerControls } from '@/hooks/useAudioPlayer'
import { PlayerControls } from './PlayerControls'
import { TrackInfo } from './TrackInfo'
import { VolumeControl } from './VolumeControl'
import { ProgressBar } from './ProgressBar'

export default function Player() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlayPause,
    handleSeek,
    handleVolumeChange,
    handlePrevious,
    handleNext
  } = usePlayerControls(sampleTracks)

  if (!currentTrack) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <TrackInfo
            title={currentTrack.title}
            artist={currentTrack.artist}
            albumArt={currentTrack.imageUrl}
          />
          <div className="flex flex-col items-center space-y-2 w-full md:w-auto md:flex-1 md:max-w-xl">
            <PlayerControls
              isPlaying={isPlaying}
              onPlayPause={togglePlayPause}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={handleSeek}
            />
          </div>
          <div className="hidden md:block">
            <VolumeControl
              volume={volume}
              onVolumeChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}