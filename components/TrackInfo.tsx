interface TrackInfoProps {
  title: string;
  artist: string;
  albumArt: string;
}

export function TrackInfo({ title, artist, albumArt }: TrackInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <img src={albumArt} alt="Album Art" className="w-12 h-12 rounded" />
      <div>
        <p className="font-semibold text-primary">{title}</p>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>
    </div>
  );
}