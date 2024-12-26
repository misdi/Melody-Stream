export function getItemLink(type: 'playlist' | 'album' | 'artist', id: number): string {
  switch (type) {
    case 'playlist':
      return `/playlist/${id}`;
    case 'album':
      return `/album/${id}`;
    case 'artist':
      return `/artist/${id}`;
    default:
      return '#';
  }
}