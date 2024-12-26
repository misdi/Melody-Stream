"use client"

import { getReleaseById } from '../data/releases'
import { TrackList } from '@/app/library/components/TrackList'
import { formatDate } from '@/lib/utils'

interface ReleasePageClientProps {
  id: string
}

export function ReleasePageClient({ id }: ReleasePageClientProps) {
  const release = getReleaseById(id)

  if (!release) {
    return <div>Release not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="relative aspect-square w-48 md:w-64 shrink-0">
          <img
            src={release.imageUrl}
            alt={release.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-sm font-medium">New Release</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">{release.name}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{release.artist}</span>
            <span>•</span>
            <span>Released {formatDate(release.releaseDate)}</span>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Tracks</h2>
      <TrackList tracks={release.tracks} />
    </div>
  )
}