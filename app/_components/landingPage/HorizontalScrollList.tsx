import { useRef } from "react"

export function HorizontalScrollList({
  children,
}: {
  children: React.ReactNode
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex items-center relative group">
      <button
        className="absolute z-10 bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity text-xl"
        onClick={() => scroll("left")}
      >
        &#8249;
      </button>
      <div
        className="flex overflow-x-scroll scroll-smooth gap-4 p-4 w-full scrollbar-hide"
        ref={scrollContainerRef}
      >
        {children}
      </div>
      <button
        className="absolute -right-4 z-10 bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity text-xl"
        onClick={() => scroll("right")}
      >
        &#8250;
      </button>
    </div>
  )
}
