export default function ExceptionalRestaurants() {
  const restaurants = [
    {
      id: 1,
      image: "/images/list-your-restaurant-2.png",
    },
    {
      id: 2,
      image: "/images/list-your-restaurant-2.png",
    },
    {
      id: 3,
      image: "/images/list-your-restaurant-2.png",
    },
  ]

  return (
    <section id="featured" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 font-light tracking-wide">
            Exceptional Restaurants
          </h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt="Restaurant"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
