export interface Album {
  id: number
  name: string
  year: number
  imageUrl: string
}

export interface Track {
  id: number
  title: string
  artist: string
  duration: number
  plays: number
  imageUrl: string
}

export interface Artist {
  id: number
  name: string
  imageUrl: string
  followers: string
  monthlyListeners: string
  albums: Album[]
  popularTracks: Track[]
}