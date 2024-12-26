"use client"

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { releases } from '@/app/release/data/releases'

export default function NewReleases() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {releases.map((release) => (
          <Link key={release.id} href={`/release/${release.id}`}>
            <Card className="w-[160px] md:w-[200px] group hover:bg-accent transition-colors">
              <CardHeader className="space-y-1">
                <CardTitle className="text-base md:text-lg line-clamp-1">{release.name}</CardTitle>
                <CardDescription className="text-xs md:text-sm">{release.artist}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <img
                    src={release.imageUrl}
                    alt={release.name}
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