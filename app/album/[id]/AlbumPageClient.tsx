"use client"

import { AlbumHeader } from '../components/AlbumHeader'
import { AlbumTrackList } from '../components/AlbumTrackList'
import { getAlbumById } from '../data/albums'

interface AlbumPageClientProps {
  id: string
}

export function AlbumPageClient({ id }: AlbumPageClientProps) {
  const album = getAlbumById(id)

  if (!album) {
    return <div>Album not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <AlbumHeader album={album} />
      <AlbumTrackList tracks={album.tracks} />
    </div>
  )
}