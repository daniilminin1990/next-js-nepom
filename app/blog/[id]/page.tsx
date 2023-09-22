import { Metadata } from "next";

async function getData(id: string){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json()
}

// типизируем props
type Props = {
  params: {
    id: string //! id потому что так названа папка
  }
}
// Вставляем props
export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
  const post = await getData(id) 
  console.log(post);

  return {
    title: post.title
  }
}

async function Post({params: {id}}: Props) {
  const post = await getData(id) 
  {/* Не params.id, потому что params деструктурирован строкой выше*/}
  return <><h1>{post.title}</h1>
  <p>{post.body}</p></>;
}

export default Post