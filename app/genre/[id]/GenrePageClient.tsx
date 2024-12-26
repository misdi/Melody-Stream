"use client"

import { getGenreById } from '../data/genres'
import { TrackList } from '@/app/library/components/TrackList'

interface GenrePageClientProps {
  id: string
}

export function GenrePageClient({ id }: GenrePageClientProps) {
  const genre = getGenreById(id)

  if (!genre) {
    return <div>Genre not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img
          src={genre.image}
          alt={genre.name}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{genre.name}</h1>
          <p className="text-lg text-white/80">{genre.description}</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Popular in {genre.name}</h2>
      <TrackList tracks={genre.tracks} />
    </div>
  )
}