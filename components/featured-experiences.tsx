import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedExperiences() {
  const experiences = [
    {
      id: 1,
      image: "/images/list-your-experience-2.jpg",
      alt: "Desert safari adventure in the Kalahari",
      title: "Desert Safari Adventure",
      description: "Experience the magic of the Kalahari with our guided safari tours",
    },
    {
      id: 2,
      image: "/images/list-your-experience-2.jpg",
      alt: "Stargazing night tour in the Kalahari",
      title: "Stargazing Night Tour",
      description: "Witness the incredible night skies of the Kalahari with expert astronomers",
    },
    {
      id: 3,
      image: "/images/list-your-experience-2.jpg",
      alt: "Cultural heritage tour in the Kalahari",
      title: "Cultural Heritage Tour",
      description: "Discover the rich cultural heritage of the Kalahari region",
    },
  ]

  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-3xl font-serif text-[#8B2635] mb-12">Featured Experiences</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col h-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <Image src={experience.image || "/placeholder.svg"} alt={experience.alt} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-serif text-[#8B2635] mb-2">{experience.title}</h3>
            <p className="text-gray-600 mb-4">{experience.description}</p>
            <div className="flex-grow" />
            <Link href="https://trip.tp.st/8hvitwPS" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#8B2635] hover:bg-[#6d1e29] text-white self-center px-8">EXPLORE</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
