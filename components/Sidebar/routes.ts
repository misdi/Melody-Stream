import { Home, Search, Library } from 'lucide-react';

export const navigationRoutes = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Library, label: 'Your Library', href: '/library' },
];

export const playlists = [
  { name: 'Chill Vibes', href: '/playlist/1' },
  { name: 'Workout Mix', href: '/playlist/2' },
  { name: 'Study Session', href: '/playlist/3' },
];