import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { FeaturedArtists } from './components/home/FeaturedArtists';
import { TopCharts } from './components/home/TopCharts';
import { GenreGrid } from './components/home/GenreGrid';
import FeaturedPlaylists from '@/components/FeaturedPlaylists';
import NewReleases from '@/components/NewReleases';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8 space-y-8">
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Artists</h2>
        <Suspense fallback={<Skeleton className="w-full h-48" />}>
          <FeaturedArtists />
        </Suspense>
      </section>
      
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Browse by Genre</h2>
        <Suspense fallback={<Skeleton className="w-full h-48" />}>
          <GenreGrid />
        </Suspense>
      </section>
      
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Top Charts</h2>
          <Suspense fallback={<Skeleton className="w-full h-48" />}>
            <TopCharts />
          </Suspense>
        </section>
        
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Playlists</h2>
          <Suspense fallback={<Skeleton className="w-full h-48" />}>
            <FeaturedPlaylists />
          </Suspense>
        </section>
      </div>
      
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">New Releases</h2>
        <Suspense fallback={<Skeleton className="w-full h-48" />}>
          <NewReleases />
        </Suspense>
      </section>
    </div>
  );
}