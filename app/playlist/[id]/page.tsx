import { playlists } from '../data/playlists'
import { PlaylistPageClient } from './PlaylistPageClient'

// This is a server component that handles static params
export function generateStaticParams() {
  return playlists.map((playlist) => ({
    id: playlist.id.toString(),
  }))
}

export default function PlaylistPage({ params }: { params: { id: string } }) {
  return <PlaylistPageClient id={params.id} />
}