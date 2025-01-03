"use client"

import { Slider } from '@/components/ui/slider';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (value: number[]) => void;
}

export function ProgressBar({ currentTime, duration, onSeek }: ProgressBarProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full flex items-center space-x-2 px-2">
      <span className="text-xs md:text-sm text-muted-foreground w-12 text-right">
        {formatTime(currentTime)}
      </span>
      <Slider
        value={[currentTime]}
        max={duration}
        step={1}
        onValueChange={onSeek}
        className="flex-1"
      />
      <span className="text-xs md:text-sm text-muted-foreground w-12">
        {formatTime(duration)}
      </span>
    </div>
  );
}