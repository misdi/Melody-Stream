import { releases } from '../data/releases'
import { ReleasePageClient } from './ReleasePageClient'

export function generateStaticParams() {
  return releases.map((release) => ({
    id: release.id.toString(),
  }))
}

export default function ReleasePage({ params }: { params: { id: string } }) {
  return <ReleasePageClient id={params.id} />
}