import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/1.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { React, useRef, useEffect } from 'react'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    //Track the state and velocity of animating values
    const motionValue = useMotionValue(0);
    //Creates a motion value that will animate to its latest target with a spring
    const springValue = useSpring(motionValue, { duration: 3000})
    //State hook for when an element is within the viewport
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value ) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },  [springValue, value])
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Valerie | About Page</title>
            <meta name="description" content="any description"></meta>
        </Head>
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Biography" className='mb-16 lg:!text-8xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className="grid w-full grid-cols-8 gap-16  sm:gap-8">
                    <div className='col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:p-4'>
                        <p className="font-medium">
                            Hi, I’m Valerie, a recent Computer Systems Technology graduate from BCIT with a passion for creating beautiful, functional, 
                            and user-centered digital experiences.  I strive to make a positive impact in the world of technology and design and I am continually seeking to innovate and create solutions that bring value to users and clients alike.
                        </p>
                        <p className="font-medium my-4">
                            When I’m not immersed in coding or design, you can often find me exploring new hobbies, playing video games, or going on long walks with my 3 dogs. These experiences help shape my approach to problem-solving and creativity, allowing me to bring a unique perspective to every project.
                        </p>
                        <p className='font-medium'>
                            I am excited about the opportunity to connect with fellow professionals, collaborate on exciting projects, and contribute to the advancement of technology and design. Thank you for visiting my portfolio website, and I look forward to the possibility of working together.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:order-1 md:col-span-8'/>
                        <Image src={profilePic} alt="Val" className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                    </div>
                    {/* <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={50}/> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={40}/>+
                            </span>
                            <h2  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm' >projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={4}/>+
                            </span>
                            <h2  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm' >years of experience</h2>
                        </div>
                    </div> */}
                </div>
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about