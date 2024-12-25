"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

interface LibraryItem {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  artist?: string;
  songCount?: number;
  followers?: string;
  year?: number;
}

interface LibraryGridProps {
  items: LibraryItem[];
  type: 'playlist' | 'album' | 'artist';
}

export function LibraryGrid({ items, type }: LibraryGridProps) {
  return (
    <ScrollArea className="h-[calc(100vh-250px)]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {items.map((item) => (
          <Card key={item.id} className="group hover:bg-accent transition-colors">
            <CardHeader className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-md">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-base line-clamp-1">{item.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {type === 'playlist' && `${item.songCount} songs`}
                  {type === 'album' && `${item.artist} • ${item.year}`}
                  {type === 'artist' && `${item.followers} followers`}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}