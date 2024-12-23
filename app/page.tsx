import { Suspense } from 'react';
import FeaturedPlaylists from '@/components/FeaturedPlaylists';
import RecentlyPlayed from '@/components/RecentlyPlayed';
import NewReleases from '@/components/NewReleases';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Melody Stream</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Playlists</h2>
        <Suspense fallback={<Skeleton className="w-full h-48" />}>
          <FeaturedPlaylists />
        </Suspense>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recently Played</h2>
        <Suspense fallback={<Skeleton className="w-full h-48" />}>
          <RecentlyPlayed />
        </Suspense>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
        <Suspense fallback={<Skeleton className="w-full h-48" />}>
          <NewReleases />
        </Suspense>
      </section>
    </div>
  );
}