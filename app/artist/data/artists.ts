import { Artist } from '../types'

export const artists: Artist[] = [
  {
    id: 1,
    name: "Taylor Swift",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop",
    followers: "80M",
    monthlyListeners: "100M",
    albums: [
      {
        id: 1,
        name: "1989 (Taylor's Version)",
        year: 2023,
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop"
      },
      {
        id: 2,
        name: "Midnights",
        year: 2022,
        imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop"
      }
    ],
    popularTracks: [
      {
        id: 1,
        title: "Cruel Summer",
        artist: "Taylor Swift",
        duration: 178,
        plays: 1500000000,
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Anti-Hero",
        artist: "Taylor Swift",
        duration: 200,
        plays: 1200000000,
        imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 2,
    name: "The Weeknd",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop",
    followers: "75M",
    monthlyListeners: "95M",
    albums: [
      {
        id: 3,
        name: "After Hours",
        year: 2020,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop"
      }
    ],
    popularTracks: [
      {
        id: 3,
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        plays: 3500000000,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 3,
    name: "Adele",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop",
    followers: "70M",
    monthlyListeners: "85M",
    albums: [
      {
        id: 4,
        name: "30",
        year: 2021,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop"
      }
    ],
    popularTracks: [
      {
        id: 4,
        title: "Easy On Me",
        artist: "Adele",
        duration: 224,
        plays: 2800000000,
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop"
      }
    ]
  }
]

export function getArtistById(id: string): Artist | undefined {
  return artists.find(artist => artist.id === parseInt(id))
}