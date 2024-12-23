"use client"

import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function PlayerControls({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
}: PlayerControlsProps) {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="icon" onClick={onPrevious}>
        <SkipBack className="h-5 w-5 text-primary" />
      </Button>
      <Button onClick={onPlayPause} variant="outline" size="icon" className="text-primary">
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <Button variant="ghost" size="icon" onClick={onNext}>
        <SkipForward className="h-5 w-5 text-primary" />
      </Button>
    </div>
  );
}