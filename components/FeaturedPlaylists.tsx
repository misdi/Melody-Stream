"use client"

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { featuredPlaylists } from '@/app/playlist/data/featured-playlists'

export default function FeaturedPlaylists() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {featuredPlaylists.map((playlist) => (
          <Link key={playlist.id} href={`/playlist/${playlist.id}`}>
            <Card className="w-[200px] md:w-[250px] group hover:bg-accent transition-colors">
              <CardHeader className="space-y-1">
                <CardTitle className="text-base md:text-lg line-clamp-1">{playlist.name}</CardTitle>
                <CardDescription className="text-xs md:text-sm line-clamp-2">
                  {playlist.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <img
                    src={playlist.imageUrl}
                    alt={playlist.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}