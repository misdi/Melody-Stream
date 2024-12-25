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
    <div className="flex items-center space-x-2 md:space-x-4">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onPrevious}
        className="h-8 w-8 md:h-10 md:w-10"
      >
        <SkipBack className="h-4 w-4 md:h-5 md:w-5 text-primary" />
      </Button>
      <Button 
        onClick={onPlayPause} 
        variant="outline" 
        size="icon"
        className="h-8 w-8 md:h-10 md:w-10 text-primary"
      >
        {isPlaying ? 
          <Pause className="h-4 w-4 md:h-5 md:w-5" /> : 
          <Play className="h-4 w-4 md:h-5 md:w-5" />
        }
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onNext}
        className="h-8 w-8 md:h-10 md:w-10"
      >
        <SkipForward className="h-4 w-4 md:h-5 md:w-5 text-primary" />
      </Button>
    </div>
  );
}