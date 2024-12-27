"use client"

import { useState, useEffect } from 'react'
import { Track } from '@/types/track'
import { useAudioPlayer } from '@/contexts/AudioPlayerContext'

export function usePlayerControls(tracks: Track[]) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const { 
    audio,
    currentTrack,
    isPlaying,
    playTrack,
    pauseTrack,
    togglePlayPause 
  } = useAudioPlayer()

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => setDuration(audio.duration)
    const handleEnded = () => handleNext()

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audio])

  const handleSeek = (newValue: number[]) => {
    if (audio) {
      const newTime = newValue[0]
      audio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (newValue: number[]) => {
    if (audio) {
      const newVolume = newValue[0]
      audio.volume = newVolume
      setVolume(newVolume)
    }
  }

  const handlePrevious = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
    setCurrentTrackIndex(newIndex)
    playTrack(tracks[newIndex])
  }

  const handleNext = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length
    setCurrentTrackIndex(newIndex)
    playTrack(tracks[newIndex])
  }

  return {
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
  }
}