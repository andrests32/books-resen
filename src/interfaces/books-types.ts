import type { Document } from "@contentful/rich-text-types"

// export interface Book {
//     id: string
//     title: string
//     bookfrase: string
//     slug: string
//     description: string
//     body: Document
//     image: string
// }

export interface Book {
    title: string
    slug: string
    description: string
    bookfrase: string

    image: string
    body: any

    author: string
    rating: number
    numpages: number
    tags: string[]

    categories?: {
        slug: string
        name?: string
    }[]
}