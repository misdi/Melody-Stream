import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const recentlyPlayed = [
  {
    name: "As It Was",
    artist: "Harry Styles",
    albumCover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Anti-Hero",
    artist: "Taylor Swift",
    albumCover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "About Damn Time",
    artist: "Lizzo",
    albumCover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Heat Waves",
    artist: "Glass Animals",
    albumCover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww"
  },
  {
    name: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    albumCover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww"
  },
];

export default function RecentlyPlayed() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {recentlyPlayed.map((track) => (
          <div key={track.name} className="w-[150px] text-center">
            <Avatar className="w-[150px] h-[150px]">
              <AvatarImage src={track.albumCover} alt={track.name} />
              <AvatarFallback>{track.name[0]}</AvatarFallback>
            </Avatar>
            <div className="mt-2">
              <p className="font-medium">{track.name}</p>
              <p className="text-sm text-muted-foreground">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}