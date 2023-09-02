import { getDocuments } from 'outstatic/server'
import back from '../images/background.jpg'
import Logo from '../images/logo.jpg'
import Image from 'next/image'
import { useState } from 'react';

export default function Home({ posts }) {
  const [toggle, Settoggle] = useState(true)
  const HandleToggle = (value) => {
    Settoggle(value)
  }

  return (
    <div>
      <div>
        <div>
          <Image
            className='w-[100%] h-[31vh]'
            src={back}
            alt="Picture"
          />
        </div>
        <div className='flex justify-center relative h-[20vh] mb-[30px] border-b'>
          <div className='absolute top-[-40%] text-center flex flex-col items-center'>
            <Image
              className='w-[150px] h-[150px] rounded-full'
              src={Logo}
              alt="Picture"
            />
            <div className='text-4xl font-bold pt-1	'>Webstories</div>
          </div>
        </div>
      </div>

      <div className='flex justify-end '>
        <div className='flex justify-evenly items-center h-[50px] w-[100px] mr-[20px] border rounded-lg overflow-hidden'>
          <div className={`w-[50%] h-[100%] flex items-center justify-center cursor-pointer ${toggle ? 'bg-blue-200' : ''}`} onClick={() => HandleToggle(true)}>
            <svg viewBox="0 0 448 512" className='w-[16px] h-[25px]'><path fill="#000" d="M192 176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V176zM192 432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144C170.5 288 192 309.5 192 336V432zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM448 432C448 458.5 426.5 480 400 480H304C277.5 480 256 458.5 256 432V336C256 309.5 277.5 288 304 288H400C426.5 288 448 309.5 448 336V432z" ></path></svg>
          </div>
          <div className={`w-[50%] h-[100%] flex items-center justify-center cursor-pointer ${!toggle ? 'bg-blue-200' : ''}`} onClick={() => HandleToggle(false)}>
            <svg viewBox="0 0 448 512" className='w-[16px] h-[25px]'><path fill="#000" d="M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232zM128 440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440zM160 72C160 49.91 177.9 32 200 32H248C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM448 120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120zM320 232C320 209.9 337.9 192 360 192H408C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z"></path></svg>
          </div>
        </div>

      </div>

      <div className={`grid  gap-8 m-[30px] cursor-pointer ${toggle ? 'grid-cols-5' : 'grid-cols-7'}`} >
        {posts.map((post) => (

          <div className={`relative image-wrapper  ${toggle ? "h-[450px]" : "h-[310px]"}`}>
            {console.log(posts[0])}

            <img
              className='h-[100%] w-[100%] rounded-lg imagecover'
              src={post.coverImage}
              alt={post.title}
            />
            <div className='play absolute z-[1000] h-[100%] w-[100%] hidden flex items-center justify-center'>
              <svg width="15%" height="15%" preserveAspectRatio="none" viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 23L0 45.5167L0 0.483339L30 23Z" fill="#FAF9F9"></path></svg>
            </div>
            <div className='absolute z-[1000] bottom-[0%] text-xl	p-2 text-white	'>
            <div className='play absolute z-[1000] h-[100%] w-[100%] hidden flex items-center justify-center'>
              <svg width="15%" height="15%" preserveAspectRatio="none" viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 23L0 45.5167L0 0.483339L30 23Z" fill="#FAF9F9"></path></svg>
            </div>
            <div className='absolute z-[1000] bottom-[0%] text-xl	p-2 text-white	'>
              {post.title}
            </div>
            {/* {post.content} */}

          </div>

        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = getDocuments("posts", [
    "title",
    "content",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
    "author",
  ]);
  return {
    props: { posts }
  }

}


