import { getDocuments } from 'outstatic/server'
import Link from "next/link";
import back from '../images/background.jpg'
import Logo from '../images/logo.jpg'
import Image from 'next/image'
export default function Home({ posts }) {
  console.log(posts, "posts")
  return (
    <div>

      <div>
        <div>
          <Image
            className='w-[100%] h-[35vh]'
            src={back}
            alt="Picture"
          />
        </div>
        <div className='flex justify-center relative h-[30vh] top-[-70px] border-b'>
          <div className='absolute text-center flex flex-col items-center'>
            <Image
              className='w-[150px] h-[150px] rounded-full'
              src={Logo}
              alt="Picture"
            />
            <div className='text-5xl font-bold pt-1	'>Webstories</div>
          </div>
        </div>

      </div>


      <div className="container">
        <h1>Welcome to my Blog!</h1>
        <div className="row">
          {posts.map((post) => (
            <Link href={"/blog/" + post.slug} key={post.publishedAt}>
              <div className="card">
                <img
                  className="card-img"
                  src={post.coverImage}
                  alt={post.title}
                />
                <div className="card-body">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <small className="author">By: {post.author.name}</small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const posts = getDocuments("posts", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
    "author",
  ]);
  console.log(posts, "post")
  return {
    props: { posts }
  }


}


