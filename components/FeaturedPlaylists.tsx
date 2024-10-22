import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const playlists = [
  {
    name: "Chill Vibes",
    description: "Relaxing tunes for your downtime",
    coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGx8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Workout Mix",
    description: "High-energy tracks to fuel your exercise",
    coverUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Focus Flow",
    description: "Ambient sounds for concentration",
    coverUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Party Starters",
    description: "Get the party going with these hits",
    coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFydHl8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Acoustic Covers",
    description: "Stripped-down versions of popular songs",
    coverUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNvdXN0aWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D"
  },
];

export default function FeaturedPlaylists() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {playlists.map((playlist) => (
          <Card key={playlist.name} className="w-[250px]">
            <CardHeader>
              <CardTitle>{playlist.name}</CardTitle>
              <CardDescription>{playlist.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={playlist.coverUrl}
                alt={playlist.name}
                className="aspect-square object-cover rounded-md"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}