export interface Post {
    _id: string,
    _createdAt: string
    title: string,
    author: {
        name: string
        image: string
    },
    comments: [Comment]
    description: string
    mainImage: {
        asset: {
            url: string
        }
    }
    slug: {
        current: string
    }
    body: [object]

}
export interface Comment {
    name: string
    _id: string
    comment: string
    email: string
    approved: boolean
}