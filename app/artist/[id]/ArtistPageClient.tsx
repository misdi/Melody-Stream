"use client"

import { ArtistHeader } from '../components/ArtistHeader'
import { AlbumGrid } from '../components/AlbumGrid'
import { TrackList } from '@/app/library/components/TrackList'
import { getArtistById } from '../data/artists'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ArtistPageClientProps {
  id: string
}

export function ArtistPageClient({ id }: ArtistPageClientProps) {
  const artist = getArtistById(id)

  if (!artist) {
    return <div>Artist not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ArtistHeader artist={artist} />
      <Tabs defaultValue="albums" className="mt-8">
        <TabsList>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="songs">Popular Songs</TabsTrigger>
        </TabsList>
        <TabsContent value="albums">
          <AlbumGrid albums={artist.albums} />
        </TabsContent>
        <TabsContent value="songs">
          <TrackList tracks={artist.popularTracks} />
        </TabsContent>
      </Tabs>
    </div>
  )
}