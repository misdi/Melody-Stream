"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { artists } from '@/app/artist/data/artists'

export function TopCharts() {
  // Get all tracks from all artists and sort by plays
  const allTracks = artists.flatMap(artist => 
    artist.popularTracks.map(track => ({
      ...track,
      artistId: artist.id
    }))
  ).sort((a, b) => b.plays - a.plays).slice(0, 5)

  return (
    <div className="space-y-4">
      {allTracks.map((track, index) => (
        <Card key={track.id} className="group hover:bg-accent transition-colors">
          <CardHeader className="p-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-muted-foreground w-8">
                {index + 1}
              </span>
              <div className="relative w-12 h-12 overflow-hidden rounded">
                <img
                  src={track.imageUrl}
                  alt={track.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base line-clamp-1">{track.title}</CardTitle>
                <Link href={`/artist/${track.artistId}`}>
                  <span className="text-sm text-muted-foreground hover:underline">
                    {track.artist}
                  </span>
                </Link>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="ghost">
                  <Play className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}