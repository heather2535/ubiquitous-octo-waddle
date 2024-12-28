import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VideoCardProps {
  title: string
  subtitle: string
  href: string
  videoSrc: string
}

export function VideoCard({ title, subtitle, href, videoSrc }: VideoCardProps) {
  return (
    <Link href={href}>
      <Card className="w-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video">
            <video 
              className="absolute inset-0 w-full h-full object-cover rounded-md"
              src={videoSrc}
              muted
              loop
              playsInline
              autoPlay
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

