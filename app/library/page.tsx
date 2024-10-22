"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock data for library items
const mockPlaylists = [
  { id: 1, name: 'My Favorites', songCount: 50 },
  { id: 2, name: 'Workout Mix', songCount: 25 },
  { id: 3, name: 'Chill Vibes', songCount: 40 },
  { id: 4, name: 'Party Anthems', songCount: 30 },
  { id: 5, name: 'Road Trip', songCount: 35 },
];

const mockAlbums = [
  { id: 1, name: '1989', artist: 'Taylor Swift', year: 2014 },
  { id: 2, name: 'After Hours', artist: 'The Weeknd', year: 2020 },
  { id: 3, name: '25', artist: 'Adele', year: 2015 },
  { id: 4, name: 'Scorpion', artist: 'Drake', year: 2018 },
  { id: 5, name: 'Future Nostalgia', artist: 'Dua Lipa', year: 2020 },
];

const mockArtists = [
  { id: 1, name: 'Ed Sheeran', followers: '80M' },
  { id: 2, name: 'Ariana Grande', followers: '75M' },
  { id: 3, name: 'Billie Eilish', followers: '70M' },
  { id: 4, name: 'Post Malone', followers: '65M' },
  { id: 5, name: 'Doja Cat', followers: '60M' },
];

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState('playlists');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Library</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
        </TabsList>
        <TabsContent value="playlists">
          <ScrollArea className="h-[calc(100vh-250px)]">
            <div className="space-y-4">
              {mockPlaylists.map((playlist) => (
                <Card key={playlist.id}>
                  <CardHeader>
                    <CardTitle>{playlist.name}</CardTitle>
                    <CardDescription>{playlist.songCount} songs</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="albums">
          <ScrollArea className="h-[calc(100vh-250px)]">
            <div className="space-y-4">
              {mockAlbums.map((album) => (
                <Card key={album.id}>
                  <CardHeader>
                    <CardTitle>{album.name}</CardTitle>
                    <CardDescription>{album.artist}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Released: {album.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="artists">
          <ScrollArea className="h-[calc(100vh-250px)]">
            <div className="space-y-4">
              {mockArtists.map((artist) => (
                <Card key={artist.id}>
                  <CardHeader>
                    <CardTitle>{artist.name}</CardTitle>
                    <CardDescription>{artist.followers} followers</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}