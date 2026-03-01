import type { Entry, EntrySkeletonType } from 'contentful'

/* 📦 Entry hijo (recomendedbooksimage) */
export interface RecomendedBookImageFields {
    bookrecomended: {
        fields: {
            file: {
                url: string
            }
        }
    }
}

/* 🧩 Skeleton del entry hijo */
export type RecomendedBookImageSkeleton = EntrySkeletonType<
    RecomendedBookImageFields,
    'recomendedbooksimage'
>

/* 📚 Fields del content principal */
export interface RecomendedBooksFields {
    titlerecomendedbook: string
    booksimage: Entry<RecomendedBookImageSkeleton>[]
}

/* 🧠 Skeleton principal */
export type RecomendedBooksSkeleton = EntrySkeletonType<
    RecomendedBooksFields,
    'recomendedbooks'
>

/* 🎨 Tipos para UI */
export interface BooksRecomended {
    image: string
}

export interface RecomendedBooksSection {
    sectionTitle: string
    books: BooksRecomended[]
}