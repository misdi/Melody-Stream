"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LibraryGrid } from './components/LibraryGrid';
import { mockPlaylists, mockAlbums, mockArtists } from './data/mockData';

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
          <LibraryGrid items={mockPlaylists} type="playlist" />
        </TabsContent>
        <TabsContent value="albums">
          <LibraryGrid items={mockAlbums} type="album" />
        </TabsContent>
        <TabsContent value="artists">
          <LibraryGrid items={mockArtists} type="artist" />
        </TabsContent>
      </Tabs>
    </div>
  );
}