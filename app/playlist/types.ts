export interface PlaylistTrack {
  id: number
  title: string
  artist: string
  duration: number
  plays: number
  imageUrl: string
}

export interface Playlist {
  id: number
  name: string
  description: string
  imageUrl: string
  tracks: PlaylistTrack[]
}