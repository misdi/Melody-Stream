import { Playlist } from '../types'

export const playlists: Playlist[] = [
  {
    id: 1,
    name: "Chill Vibes",
    description: "Relaxing tunes for your downtime",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        plays: 1000000,
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Don't Start Now",
        artist: "Dua Lipa",
        duration: 183,
        plays: 1200000,
        imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        duration: 174,
        plays: 980000,
        imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 2,
    name: "Workout Mix",
    description: "High-energy tracks to fuel your exercise",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "God's Plan",
        artist: "Drake",
        duration: 219,
        plays: 1500000,
        imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Physical",
        artist: "Dua Lipa",
        duration: 193,
        plays: 850000,
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Run the World (Girls)",
        artist: "Beyoncé",
        duration: 236,
        plays: 2100000,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 3,
    name: "Study Session",
    description: "Focus-enhancing instrumental tracks",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "Ambient Dreams",
        artist: "Zen Masters",
        duration: 345,
        plays: 420000,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Deep Focus",
        artist: "Mind Waves",
        duration: 286,
        plays: 380000,
        imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop"
      }
    ]
  }
]

export function getPlaylistById(id: string): Playlist | undefined {
  return playlists.find(playlist => playlist.id === parseInt(id))
}