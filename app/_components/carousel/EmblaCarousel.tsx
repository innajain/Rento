import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
interface Props{
  children:React.ReactNode
 outerContainerClassName?:string
 innerContainerClassName?:string

}
export function EmblaCarousel(props:Props) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={props.outerContainerClassName} ref={emblaRef}>
      <div className= {props.innerContainerClassName}>
       {props.children}
      </div>
    </div>
  )
}
