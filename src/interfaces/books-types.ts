import type { Document } from "@contentful/rich-text-types"

export interface Book {
    id: string
    title: string
    bookfrase: string
    slug: string
    description: string
    body: Document
    image: string
}