"use client"

import { PlaylistHeader } from '../components/PlaylistHeader'
import { TrackList } from '@/app/library/components/TrackList'
import { getPlaylistById } from '../data/playlists'

interface PlaylistPageClientProps {
  id: string
}

export function PlaylistPageClient({ id }: PlaylistPageClientProps) {
  const playlist = getPlaylistById(id)

  if (!playlist) {
    return <div>Playlist not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PlaylistHeader playlist={playlist} />
      <TrackList tracks={playlist.tracks} />
    </div>
  )
}