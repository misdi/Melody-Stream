import { Home, Search, Library } from 'lucide-react';

export const navigationRoutes = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Library, label: 'Your Library', href: '/library' },
];

export const playlists = [
  { name: 'Chill Vibes', href: '/playlist/chill-vibes' },
  { name: 'Workout Mix', href: '/playlist/workout-mix' },
  { name: 'Study Session', href: '/playlist/study-session' },
];