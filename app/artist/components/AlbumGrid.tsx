"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Album } from '../types'

interface AlbumGridProps {
  albums: Album[]
}

export function AlbumGrid({ albums }: AlbumGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {albums.map((album) => (
        <Link key={album.id} href={`/album/${album.id}`}>
          <Card className="group hover:bg-accent transition-colors">
            <CardHeader className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-md">
                <Image
                  src={album.imageUrl}
                  alt={`Cover art for ${album.name}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-base line-clamp-1">{album.name}</CardTitle>
                <CardDescription className="line-clamp-1">
                  {album.year}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}