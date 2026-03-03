import { defineCollection } from "astro:content"
import { client } from "@/lib/client"

export const collections = {
    recomendedBooks: defineCollection({
        loader: async () => {
            const response = await client.getEntries({
                content_type: "recomendedbooks",
                include: 2,
            })

            return response.items.map((item) => ({
                id: item.sys.id,
                sectionTitle: item.fields.titlerecomendedbook,
                books: (Array.isArray(item.fields.booksimage) ? item.fields.booksimage : []).map((book: any) => ({
                    image: `https:${book.fields.bookrecomended.fields.file.url}`
                }))
            }))
        }
    }),

    books: defineCollection({
        loader: async () => {
            const response = await client.getEntries({
                content_type: "books",
            })

            return response.items.map((item: any) => ({
                id: item.sys.id, // obligatorio
                title: item.fields.title,
                bookfrase: item.fields.bookfrase,
                slug: item.fields.slug,
                description: item.fields.description,
                body: item.fields.body,
                image: `https:${item.fields.imagen.fields.file.url}`
            }))
        }
    })
}