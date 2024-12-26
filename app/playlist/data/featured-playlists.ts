import { Playlist } from '../types'

export const featuredPlaylists: Playlist[] = [
  {
    id: 1,
    name: "Chill Vibes",
    description: "Relaxing tunes for your downtime",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500",
    tracks: [
      {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        plays: 1000000,
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500"
      }
    ]
  },
  {
    id: 2,
    name: "Workout Mix",
    description: "High-energy tracks to fuel your exercise",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
    tracks: [
      {
        id: 2,
        title: "Physical",
        artist: "Dua Lipa",
        duration: 193,
        plays: 850000,
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500"
      }
    ]
  }
]

export function getFeaturedPlaylistById(id: string): Playlist | undefined {
  return featuredPlaylists.find(playlist => playlist.id === parseInt(id))
}