import { getDocuments } from 'outstatic/server'
import back from '../images/background.jpg'
import Logo from '../images/logo.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Toggletwo } from './svg';
import Toggleone from './svg';

export default function Home({ posts }) {
  const [toggle, setToggle] = useState(true)
  const [story, setStory] = useState(true)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [storyImage, setStoryImage] = useState()
  const [postchange, setPostchange] = useState(0)

  useEffect(() => {

    const storyData = storyimages.find((ele) => ele.index === postchange)
    if (storyData && storyData.imageUrls.length) {
      setStoryImage(storyData.imageUrls);
    } else {
      alert("no next post image")
    }

  }, [postchange])

  const HandleToggle = (value) => {
    setToggle(value)
  }



  const HandelstoryClick = (event) => {
    setPostchange(event)

    const found = storyimages.find((element) => element.index === event);
    if (found.imageUrls.length > 0) {
      setStoryImage(found.imageUrls);
      setStory(false);
    } else {
      alert("no image found")
    }
  }

  const Nextpost = () => {
    setPostchange(postchange + 1);
    setCurrentStoryIndex(0);
  }

  const Storyend = () => {
    !(currentStoryIndex >= storyImage.length - 1) && setCurrentStoryIndex(currentStoryIndex + 1)
  }
  function handleClose() {
    window.location.href = 'https://example.com';
  }

  function extractImageUrlsFromObjects(objects) {
    const imageArrays = [];

    for (let i = 0; i < objects.length; i++) {
      const object = objects[i];
      if (object.hasOwnProperty('content')) {
        const content = object.content;
        const imageUrlRegex = /!\[.*?\]\((.*?)\)/g;
        const imageUrls = [];

        let match;
        while ((match = imageUrlRegex.exec(content)) !== null) {
          imageUrls.push(match[1]);
        }
        imageArrays.push({
          index: i,
          imageUrls: imageUrls
        });
      }
    }
    return imageArrays;
  }

  const data = posts?.length ? posts.map((post, index) => {
    return {
      content: post.content,
      index: index
    };
  }) : [];
  const storyimages = extractImageUrlsFromObjects(data);

  return (
    <div>
      {story ?
        <>
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
                <Toggleone />
              </div>
              <div className={`w-[50%] h-[100%] flex items-center justify-center cursor-pointer ${!toggle ? 'bg-blue-200' : ''}`} onClick={() => HandleToggle(false)}>
                <Toggletwo />
              </div>
            </div>
          </div>

          <div className={`grid gap-8 m-[30px] cursor-pointer ${toggle ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7'}`} >
            {posts.map((post, index) => (
              <div>
                <div className={`relative image-wrapper  ${toggle ? "h-[450px]" : "h-[310px]"}`}>
                  <img
                    id={`nextButton${index}`}
                    className='h-[100%] w-[100%] rounded-lg imagecover'
                    src={post.coverImage}
                    alt={post.title}
                  />
                  <div onClick={() => HandelstoryClick(index)} className='play absolute z-[1000] h-[100%] w-[100%] hidden flex items-center justify-center'>
                    <svg width="15%" height="15%" preserveAspectRatio="none" viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 23L0 45.5167L0 0.483339L30 23Z" fill="#FAF9F9"></path></svg>
                  </div>
                  <div className='absolute z-[1000] bottom-[0%] text-xl	p-2 text-white	'>
                    {post.title}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </>
        :
        <>

          <amp-story standalone >
            <button class="i-amphtml-story-close-control i-amphtml-story-ui-hide-button i-amphtml-story-button" aria-label="Close"></button>
            {storyImage.map((imageUrl, index) => (
              <amp-story-page id={`page-${index}`}>
                <amp-story-grid-layer template="fill">
                  <amp-img src={imageUrl}
                    width="720" height="1280"
                    animate-in={index % 2 === 0 ? 'zoom-in' : 'zoom-out'}
                    scale-start={index % 2 === 0 ? '1' : '1.5'}
                    scale-end={index % 2 === 0 ? '1.5' : '1'}
                    animate-in-duration="8s"
                    layout="responsive"
                    alt={`Image ${index}`}>
                  </amp-img>
                </amp-story-grid-layer>
              </amp-story-page>
            ))}
          </amp-story>
        </>

      }
    </div >
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


