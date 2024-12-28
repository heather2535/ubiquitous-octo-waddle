'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Speech Audio Emotion Recognition', description: 'April 28, 2024', tags: ['Featured Projects', 'Machine Learning', 'NLP'], href: "/projects/speech-audio", image: '/image1.jpg' },
  { id: 2, title: 'City of Boston Budget Reallocation Analysis', description: 'April 22, 2024', tags: ['Data Visualization', 'Statistical Analysis'], href: "/projects/city-of-boston", image: '/image2.jpg' },
  { id: 3, title: 'Small Business Association Loan Prediction', description: 'April 22, 2024', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/small-business", image: '/image3.webp' },
  { id: 4, title: 'Flight Satisfaction Prediction', description: 'December 6, 2023', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/flight-satisfaction", image: '/image4.webp' },
  { id: 5, title: 'Predicting Climate Investments', description: 'October 10, 2023', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/predicting-climate", image: '/image5.jpg' },
  { id: 6, title: 'Classifying Political Bias in News Media', description: 'August 3, 2023', tags: ['Featured Projects', 'NLP'], href: "/projects/als-resource", image: '/image6.webp' },
  { id: 7, title: 'COVID-19 Policy Analysis and Recommendations', description: 'May 12, 2023', tags: ['Featured Projects', 'Statistical Analysis'], href: "/projects/als-resource", image: '/image7.webp' },
  { id: 8, title: 'Forecasting Volatility in NVDA Stock Returns', description: 'December 18, 2023', tags: ['Machine Learning', 'Statistical Analysis'], href: "/projects/als-resource", image: '/image8.jpg' },
  { id: 9, title: 'Text Classification Program', description: 'April 28, 2021', tags: ['NLP'], href: "/projects/als-resource", image: '/image9.png' },
  { id: 10, title: 'Airbnb Investment Analysis', description: 'April 19, 2023', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image10.jpg' },
  { id: 11, title: 'Government Welfare Income vs. Health Status', description: 'May 3, 2022', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image11.jpg' },
  { id: 12, title: 'Analysis of Cardiovascular Disease: Causes, Treatment, and Prevention', description: 'April 12, 2022', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image12.jpg' },
  { id: 13, title: 'Undergraduate Housing Expenses', description: 'Nov 19, 2021', tags: ['Statistical Analysis'], href: '/projects/als-resource', image: '/image13.jpg' },
  { id: 14, title: 'Boston University Campus Waste Prediction', description: 'Nov 19, 2021', tags: ['Linear Regression'], href: "/projects/als-resource", image: '/image14.jpg' },
  { id: 15, title: 'Housing Prices in San Francisco', description: 'December 19, 2022', tags: ['Linear Regression'], href: "/projects/als-resource", image: '/image15.webp' },
  { id: 16, title: 'GDP by Region', description: 'Nov 29, 2022', tags: ['Linear Regression', 'Data Visualization'], href: "/graphics/web-development", image: '/image16.jpg' },
  { id: 17, title: 'Grocery Recommendation Engine', description: 'February 25, 2023', tags: ['Linear Regression', 'Machine Learning'], href: "/projects/als-resource", image: '/image17.jpg' },
]

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag))
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTags && matchesSearch
    })
  }, [selectedTags, searchQuery])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <section className="mt-24 min-h-screen py-20 max-w-5xl mx-auto">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 z-0"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map(tag => (
                <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="text-[16px] cursor-pointer h-10 px-4 font-light"
                onClick={() => toggleTag(tag)}
                >
                {tag}
                </Badge>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg overflow-hidden"
              >
                <Link href={project.href} className="block h-full">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="relative z-0"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{project.description}</p>
                    <h3 className="text-xl font-light mb-4 text-gray-800">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

