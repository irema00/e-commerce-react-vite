import React from 'react'
import Header from "../layouts/Header"
import { Carousel } from "@material-tailwind/react"
import { CarouselCustomNavigation } from "../utils/CarouselComponent"

export default function Home() {
  return (
    <>
    <Header/>
    <CarouselCustomNavigation/>
    </>
  )
}
