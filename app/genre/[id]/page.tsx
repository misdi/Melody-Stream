import { genres } from '../data/genres'
import { GenrePageClient } from './GenrePageClient'

export function generateStaticParams() {
  return genres.map((genre) => ({
    id: genre.id,
  }))
}

export default function GenrePage({ params }: { params: { id: string } }) {
  return <GenrePageClient id={params.id} />
}