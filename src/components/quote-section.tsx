import { Button } from '@/components/ui/button'

export function QuoteSection() {
  return (
    <section className="py-24 bg-white max-w-5xl mx-auto">
      <div className="container px-4 md:px-6">
        <blockquote className="text-center space-y-4">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-5xl mx-auto">
            Design is the intermediary between information and understanding. It is the art of making the complex beautifully simple.
          </p>
          <Button variant="link" className="text-primary">
            Learn more
          </Button>
        </blockquote>
      </div>
    </section>
  )
}

