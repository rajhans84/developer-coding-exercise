export interface Post {
    title: string;
    author: string;
    slug: string;
    content: string;
}

export interface PostRespons {
    post: Post;
}