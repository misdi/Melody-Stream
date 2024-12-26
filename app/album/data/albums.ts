import { Album } from '../types'

export const albums: Album[] = [
  {
    id: 1,
    name: "Funky House Sunda",
    artist: "Hanna Mayahi",
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "Cinta Ketok Magic",
        artist: "Hanna Mayahi",
        duration: 271,
        plays: 61554
      },
      {
        id: 2,
        title: "Nalangsa",
        artist: "Hanna Mayahi",
        duration: 332,
        plays: 37401
      },
      {
        id: 3,
        title: "Surabi Oncom",
        artist: "Hanna Mayahi",
        duration: 263,
        plays: 49284
      },
      {
        id: 4,
        title: "Kalangkang",
        artist: "Hanna Mayahi",
        duration: 276,
        plays: 20782
      }
    ]
  },
  {
    id: 2,
    name: "After Hours",
    artist: "The Weeknd",
    year: 2020,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        plays: 1000000
      }
    ]
  },
  {
    id: 3,
    name: "25",
    artist: "Adele",
    year: 2015,
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "Hello",
        artist: "Adele",
        duration: 295,
        plays: 2000000
      }
    ]
  },
  {
    id: 4,
    name: "Scorpion",
    artist: "Drake",
    year: 2018,
    imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "God's Plan",
        artist: "Drake",
        duration: 219,
        plays: 1500000
      }
    ]
  },
  {
    id: 5,
    name: "Future Nostalgia",
    artist: "Dua Lipa",
    year: 2020,
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop",
    tracks: [
      {
        id: 1,
        title: "Don't Start Now",
        artist: "Dua Lipa",
        duration: 183,
        plays: 1200000
      }
    ]
  }
]

export function getAlbumById(id: string): Album | undefined {
  return albums.find(album => album.id === parseInt(id))
}