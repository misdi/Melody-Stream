export interface Track {
  id: number
  title: string
  artist: string
  duration: number
  plays: number
}

export interface Album {
  id: number
  name: string
  artist: string
  year: number
  imageUrl: string
  tracks: Track[]
}