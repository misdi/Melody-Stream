import { Genre } from '../types'

export const genres: Genre[] = [
  {
    id: "pop",
    name: "Pop",
    description: "Chart-topping hits and catchy melodies",
    color: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500",
    tracks: [
      {
        id: 1,
        title: "Cruel Summer",
        artist: "Taylor Swift",
        duration: 178,
        plays: 1500000000,
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
        genre: "Pop"
      },
      {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        plays: 3500000000,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
        genre: "Pop"
      }
    ]
  },
  {
    id: "hip-hop",
    name: "Hip Hop",
    description: "Rhythm and poetry with urban beats",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    tracks: [
      {
        id: 3,
        title: "God's Plan",
        artist: "Drake",
        duration: 219,
        plays: 1500000,
        imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500",
        genre: "Hip Hop"
      }
    ]
  },
  {
    id: "rock",
    name: "Rock",
    description: "Electric guitars and powerful vocals",
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500",
    tracks: [
      {
        id: 4,
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        duration: 356,
        plays: 1200000,
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500",
        genre: "Rock"
      }
    ]
  },
  {
    id: "electronic",
    name: "Electronic",
    description: "Synthesized sounds and digital beats",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    tracks: [
      {
        id: 5,
        title: "Strobe",
        artist: "Deadmau5",
        duration: 603,
        plays: 800000,
        imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500",
        genre: "Electronic"
      }
    ]
  }
]

export function getGenreById(id: string): Genre | undefined {
  return genres.find(genre => genre.id === id)
}