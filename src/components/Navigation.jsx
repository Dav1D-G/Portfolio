'use client'
import Image from "next/image"
import burger_menu from '@/assets/icons/burger-menu-button.svg';
import cancel_menu from '@/assets/icons/cancel-menu-button.svg';
import home_dark from '@/assets/icons/home-dark.svg';
import user_dark from '@/assets/icons/user-dark.svg';
import books_dark from '@/assets/icons/books-dark.svg';
import work_dark from '@/assets/icons/work-dark.svg';
import home_white from '@/assets/icons/home-white.svg';
import home_yellow from '@/assets/icons/home-yellow.svg';
import  useMediaQuery  from '@mui/material/useMediaQuery';
import { useState , useEffect } from "react";
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import { useInView } from "framer-motion";
import burger_black from "@/assets/icons/burger-menu-button-black.svg";

export function Navigation({helloRef , aboutRef , expRef , projectRef})
{
    const searchParams = useSearchParams()
    const search = searchParams.get('page');
    const isSmallScreen = useMediaQuery('(max-width:768px)');
    const [isClick , setIsClick] = useState(false);
    const isInViewHello = useInView(helloRef);
    const isInViewAbout = useInView(aboutRef);
    const isInViewExp = useInView(expRef);
    const isInViewProject = useInView(projectRef);

    const menuVariants = {
        open: {
            x: "0%",
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        closed: {
            x: "100%",
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    const moveToProjects = () => {
            projectRef.current.scrollIntoView({ behavior: 'smooth',block: 'start' });
    };
    const moveToHello = () => {
        helloRef.current.scrollIntoView({ behavior: 'smooth',block: 'start' });
    };
    const moveToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth',block: 'start' });
    };
    const moveToExp = () => {
        expRef.current.scrollIntoView({ behavior: 'smooth',block: 'start' });
    };

    useEffect(() => {
       console.log(isInViewHello,isInViewAbout,isInViewProject);
    }, [isInViewHello,isInViewAbout,isInViewProject]);

    return(
        <nav className="navigation">
            {
                isSmallScreen ?
                <div className="burger-nav">
                    <motion.img 
                        onClick={(e)=>setIsClick(!isClick)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.5 }}
                        whileTap={{scale : 0}}
                        src={isClick ? cancel_menu.src : burger_menu.src}
                        alt="cancel-icon"
                        width={30}
                        height={30}
                    />
                    <motion.div
                        className="burger-menu"
                        variants={menuVariants}
                        initial="closed"
                        animate={isClick ? "open" : "closed"}
                    >
                        <ul className="burger-menu-items">
                            <li className="kumar-one-font burger-item" onClick={(e)=>moveToHello()}>
                                <div className="image-burger-menu">
                                    <Image src={home_yellow} alt="home-dark" width={30} height={30}/>
                                </div>
                                <div className="content-burger-menu">
                                    <p className={`${(isInViewHello && !isInViewAbout ) && "is-active-page"}`}>Home</p>
                                </div>
                            </li>
                            <li className="kumar-one-font burger-item" onClick={(e)=>moveToAbout()}>
                                <div className="image-burger-menu">
                                    <Image src={user_dark} alt="home-dark" width={30} height={30}/>
                                </div>
                                <div className="content-burger-menu">
                                    <p className="">About Me</p>
                                </div>
                            </li>
                            <li className="kumar-one-font burger-item" onClick={(e)=>moveToExp()}>
                                <div className="image-burger-menu">
                                    <Image src={books_dark} alt="home-dark" width={30} height={30}/>
                                </div>
                                <div className="content-burger-menu">
                                    <p className="">Experience</p>
                                </div>
                            </li>
                            <li className="kumar-one-font burger-item" onClick={(e)=>moveToProjects()}>
                                <div className="image-burger-menu">
                                    <Image src={work_dark} alt="home-dark" width={30} height={30}/>
                                </div>
                                <div className="content-burger-menu">
                                    <p className="">Projects</p>
                                </div>
                            </li>
                            {/* Dodaj więcej elementów menu tutaj */}
                        </ul>
                    </motion.div>
                </div> 
                : 
                <div className="aside-nav">
                    <div className="block-1">
                    </div>
                    <div className="block-2">
                        <div className="progress-nav" style={{height : '50%'}}></div>  
                    </div>
                    <div className="aside-menu">
                        <Image src={burger_black} alt="burger-black" width={25} height={25}/>
                    </div>
                    <div className="aside-home">
                        <Image src={burger_black} alt="burger-black" width={25} height={25}/>
                    </div>
                </div>
            }
        </nav>
    )
}