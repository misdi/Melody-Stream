import { Release } from '../types'

export const releases: Release[] = [
  {
    id: 1,
    name: "Midnights",
    artist: "Taylor Swift",
    releaseDate: "2024-01-15",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    tracks: [
      {
        id: 1,
        title: "Lavender Haze",
        artist: "Taylor Swift",
        duration: 202,
        plays: 1200000,
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500"
      }
    ]
  },
  {
    id: 2,
    name: "Renaissance",
    artist: "Beyoncé",
    releaseDate: "2024-01-10",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    tracks: [
      {
        id: 2,
        title: "BREAK MY SOUL",
        artist: "Beyoncé",
        duration: 279,
        plays: 980000,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500"
      }
    ]
  }
]

export function getReleaseById(id: string): Release | undefined {
  return releases.find(release => release.id === parseInt(id))
}