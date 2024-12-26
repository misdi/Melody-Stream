import { albums } from '../data/albums'
import { AlbumPageClient } from './AlbumPageClient'

// This is a server component that handles static params
export function generateStaticParams() {
  return albums.map((album) => ({
    id: album.id.toString(),
  }))
}

export default function AlbumPage({ params }: { params: { id: string } }) {
  return <AlbumPageClient id={params.id} />
}