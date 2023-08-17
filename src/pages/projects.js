import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import ecommerce from '../../public/images/projects/ecommerce.png'
import snews from '../../public/images/projects/snews.png'
import hippo from '../../public/images/projects/hippo.png'
import wordjam from '../../public/images/projects/wordjam.png'
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center jusitfy-between rounded-3xl 
            border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light 
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            {/* shadow effect */}
            <div className='absolute top-0 right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'> 
                        Visit Project 
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            { /* shadow effect */}
            <div className='absolute top-0 right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold xl:text-2xl'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10 md:w-6'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg text-lg font-semibold md:text-base'> Visit </Link>
                </div>
            </div>
        </article>
    )
}

export const projects = () => {
  return (
    <>
      <Head>
            <title>Valerie | Projects Page</title>
            <meta name="description" content="any description"></meta>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                {/* <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/> */}
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Full Stack Ecommerce Website"
                            img={ecommerce}
                            summary="A full stack ecommerce app, including an intuitive admin panel for seamless product management and order tracking and an engaging and user-friendly storefront interface to showcase products and facilitate seamless customer purchasing experiences."
                            link="https://ecommerce-store-opal.vercel.app"
                            github="https://github.com/Valeraii/ecommerce-store"
                            type="Featured Project"/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                             title="CRM Platform"
                             img={hippo}
                             link="https://admin.rollahippo.org"
                             github="https://github.com/DWSimon3/BCIT-ROLLERS"
                             type="Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                             title="SNEWS Website"
                             img={snews}
                             link="https://snews2.org"
                             github="https://github.com/bwp2bwp/BCIT_SNEWS_website"
                             type="Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                             title="WordJam Puzzle Game"
                             img={wordjam}
                             link="/"
                             github="https://github.com/Valeraii/2800-202205-BBY2.git"
                             type="Project"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects