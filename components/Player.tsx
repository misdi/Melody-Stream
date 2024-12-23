"use client"

import { useState, useEffect, useRef } from 'react';
import { sampleTracks } from '@/lib/sample-tracks';
import { PlayerControls } from './PlayerControls';
import { TrackInfo } from './TrackInfo';
import { VolumeControl } from './VolumeControl';
import { ProgressBar } from './ProgressBar';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = sampleTracks[currentTrackIndex];

  useEffect(() => {
    const audio = new Audio();
    audio.src = currentTrack.audioUrl;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      handleNext();
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (newValue: number[]) => {
    if (audioRef.current) {
      const newTime = newValue[0];
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (newValue: number[]) => {
    const newVolume = newValue[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handlePrevious = () => {
    const newIndex = (currentTrackIndex - 1 + sampleTracks.length) % sampleTracks.length;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(false);
  };

  const handleNext = () => {
    const newIndex = (currentTrackIndex + 1) % sampleTracks.length;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border p-4 flex items-center justify-between">
      <TrackInfo
        title={currentTrack.title}
        artist={currentTrack.artist}
        albumArt={currentTrack.albumArt}
      />
      <div className="flex flex-col items-center space-y-2 flex-1 max-w-xl">
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
      <VolumeControl
        volume={volume}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  );
}