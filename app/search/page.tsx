"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock data for search results
const mockSearchResults = [
  { id: 1, title: 'Shape of You', artist: 'Ed Sheeran', album: '÷ (Divide)' },
  { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours' },
  { id: 3, title: 'Dance Monkey', artist: 'Tones and I', album: 'The Kids Are Coming' },
  { id: 4, title: 'Someone You Loved', artist: 'Lewis Capaldi', album: 'Divinely Uninspired to a Hellish Extent' },
  { id: 5, title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line' },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(mockSearchResults);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would make an API call here
    const filteredResults = mockSearchResults.filter(
      (result) =>
        result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Search for songs, artists, or albums"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <ScrollArea className="h-[calc(100vh-250px)]">
        <div className="space-y-4">
          {searchResults.map((result) => (
            <Card key={result.id}>
              <CardHeader>
                <CardTitle>{result.title}</CardTitle>
                <CardDescription>{result.artist}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Album: {result.album}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}