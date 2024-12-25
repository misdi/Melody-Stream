"use client"

interface TrackInfoProps {
  title: string;
  artist: string;
  albumArt: string;
}

export function TrackInfo({ title, artist, albumArt }: TrackInfoProps) {
  return (
    <div className="flex items-center space-x-3 min-w-0">
      <img 
        src={albumArt} 
        alt="Album Art" 
        className="w-12 h-12 rounded object-cover flex-shrink-0" 
      />
      <div className="min-w-0">
        <p className="font-semibold text-primary truncate">{title}</p>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
      </div>
    </div>
  );
}