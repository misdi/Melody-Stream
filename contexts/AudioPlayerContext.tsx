"use client"

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'
import { Track } from '@/types/track'

interface AudioContextType {
  currentTrack: Track | null
  playlist: Track[]
  isPlaying: boolean
  audio: HTMLAudioElement | null
  playTrack: (track: Track, newPlaylist?: Track[]) => void
  pauseTrack: () => void
  togglePlayPause: () => void
  playNext: () => void
  playPrevious: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function useAudioPlayer() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider')
  }
  return context
}

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [playlist, setPlaylist] = useState<Track[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio()
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const playTrack = (track: Track, newPlaylist?: Track[]) => {
    if (!audioRef.current) return

    // Update playlist if provided
    if (newPlaylist) {
      setPlaylist(newPlaylist)
    }

    if (currentTrack?.id === track.id) {
      audioRef.current.play()
      setIsPlaying(true)
      return
    }

    audioRef.current.src = track.audioUrl
    audioRef.current.play()
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const pauseTrack = () => {
    if (!audioRef.current) return
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseTrack()
    } else if (currentTrack) {
      playTrack(currentTrack)
    }
  }

  const playNext = () => {
    if (!currentTrack || playlist.length === 0) return

    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % playlist.length
    playTrack(playlist[nextIndex])
  }

  const playPrevious = () => {
    if (!currentTrack || playlist.length === 0) return

    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id)
    const previousIndex = (currentIndex - 1 + playlist.length) % playlist.length
    playTrack(playlist[previousIndex])
  }

  useEffect(() => {
    if (!audioRef.current) return

    const handleEnded = () => {
      playNext()
    }

    audioRef.current.addEventListener('ended', handleEnded)
    return () => {
      audioRef.current?.removeEventListener('ended', handleEnded)
    }
  }, [currentTrack, playlist])

  return (
    <AudioContext.Provider value={{
      currentTrack,
      playlist,
      isPlaying,
      audio: audioRef.current,
      playTrack,
      pauseTrack,
      togglePlayPause,
      playNext,
      playPrevious
    }}>
      {children}
    </AudioContext.Provider>
  )
}