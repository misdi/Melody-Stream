"use client"

import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { genres } from '@/app/genre/data/genres'

export function GenreGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {genres.map((genre) => (
        <Link key={genre.id} href={`/genre/${genre.id}`}>
          <Card className="group cursor-pointer overflow-hidden">
            <CardContent className="p-0 relative aspect-square">
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{genre.name}</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}