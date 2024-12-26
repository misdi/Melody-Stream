export interface Release {
  id: number
  name: string
  artist: string
  releaseDate: string
  imageUrl: string
  tracks: ReleaseTrack[]
}

export interface ReleaseTrack {
  id: number
  title: string
  artist: string
  duration: number
  plays: number
  imageUrl: string
}