import { artists } from '../data/artists'
import { ArtistPageClient } from './ArtistPageClient'

export function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id.toString(),
  }))
}

export default function ArtistPage({ params }: { params: { id: string } }) {
  return <ArtistPageClient id={params.id} />
}