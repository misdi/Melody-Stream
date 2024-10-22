"use client"

import { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Simulated current track data
  const currentTrack = {
    title: "Sample Track",
    artist: "Sample Artist",
    albumArt: "https://via.placeholder.com/50"
  };

  useEffect(() => {
    // Simulated audio player
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime((prevTime) => {
          if (prevTime >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prevTime + 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (newValue: number[]) => {
    setCurrentTime(newValue[0]);
  };

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={currentTrack.albumArt} alt="Album Art" className="w-12 h-12 rounded" />
        <div>
          <p className="font-semibold text-primary">{currentTrack.title}</p>
          <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 flex-1 max-w-xl">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-5 w-5 text-primary" />
          </Button>
          <Button onClick={togglePlayPause} variant="outline" size="icon" className="text-primary">
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-5 w-5 text-primary" />
          </Button>
        </div>
        <div className="w-full flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleSeek}
            className="flex-1"
          />
          <span className="text-sm text-muted-foreground">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 className="h-5 w-5 text-primary" />
        <Slider
          value={[volume]}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default Player;