'use client'

import { ClassifiedWithImages } from "@/config/types"
import { ClassifiedCard } from "./classified-card"
import { use } from "react"

interface ClassifiedsListProps {
  classifieds: Promise<ClassifiedWithImages[]>
  favourites: number[]
}

export const ClassifiedsList = (props: ClassifiedsListProps) => {
  const { classifieds, favourites } = props
  const inventory = use(classifieds)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {inventory.map((classified) => {
        return <ClassifiedCard key={classified.id} classified={classified} favourites={favourites}/>
      })}
    </div>
  )
}