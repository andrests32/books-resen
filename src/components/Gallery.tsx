import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import type { Book } from '@/interfaces/books-types'

interface GalleryProps {
	books: Book[]
}

export const GalleryBooks = ({ books }: GalleryProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const cards = gsap.utils.toArray<HTMLElement>('.book-card', containerRef.current)

			cards.forEach((card) => {
				card.addEventListener('mouseenter', () => {
					gsap.to(card, {
						y: -5,
						scale: 1.05,
						duration: 0.35,
						ease: 'power3.out'
					})

					gsap.to(
						cards.filter((c) => c !== card),
						{
							opacity: 0.1,
							scale: 0.99,
							duration: 0.3
						}
					)
				})

				card.addEventListener('mouseleave', () => {
					gsap.to(card, {
						y: 0,
						scale: 1,
						duration: 0.35
					})

					gsap.to(cards, {
						opacity: 1,
						scale: 1,
						duration: 0.3
					})
				})
			})
		}, containerRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			ref={containerRef}
			className="relative grid min-h-screen w-full grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-12 lg:pt-20"
		>
			{books.map((book) => (
				<a
					key={book.slug}
					href={`/resenas/${book.slug}`}
					className="book-card relative h-60 overflow-hidden"
				>
					<img src={book.image} alt={book.title} className="h-full w-full object-cover" />

					{/* overlay */}
				</a>
			))}
		</section>
	)
}
