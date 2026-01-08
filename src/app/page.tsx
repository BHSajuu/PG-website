"use client"

import { Contact } from "@/components/Contact"
import { Facilities } from "@/components/Facilities"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Location } from "@/components/Location"
import { RoomTypes } from "@/components/RoomTypes"

function page() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <RoomTypes />
      <Facilities />
      <Location />
      <Contact/>
      <Footer />
    </div>
  )
}

export default page