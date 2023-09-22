import { Metadata } from "next"
import Link from "next/link"

async function getData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if(!response.ok) throw new Error ("Unable to fetch posts!")

  return response.json()
}

export const metadata: Metadata = {
  title: "Blog | Next App",
}

export default async function Blog() {
  const posts = await getData()
  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {/* Будем обходить каждый пост,  */}
        {posts.map((post: any) => (
          // т.к. это React, то нужен key
          <li key={post.id}>
            {/* Используем ссылку, потому что мы же захотим переходить на нее */}
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}