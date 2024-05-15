declare global {
  type Book = {
    id: string
    title: string
    description: string
    authors?: string[]
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    listPrice?: {
      amount: number
      currencyCode: string
    }
    categories?: string[]
    pageCount?: number
    reviews: string[]
  }
}

export {}
