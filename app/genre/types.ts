export interface GenreTrack {
  id: number
  title: string
  artist: string
  duration: number
  plays: number
  imageUrl: string
  genre: string
}

export interface Genre {
  id: string
  name: string
  description: string
  color: string
  image: string
  tracks: GenreTrack[]
}