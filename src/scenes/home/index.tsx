import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClarifyTagline from "@/assets/clarify-tagline.png";
import HomePageGraphic2 from "@/assets/clarify-home-graphic02.png"
import SponsorRealSimple from "@/assets/SponsorRealSimple.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void,

}

function Home({ setSelectedPage }: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


    return (
        <section
            id='home'
            className='min-h-full bg-white py-10 md:h-full md:pb-0'
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div className='md:flex mx-auto w-5/6 h-auto items-center justify-center md:h-5/6'
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                {/* MAIN HEADER */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/*HEADINGS  */}
                    <motion.div
                        className='md:-mt-20'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <div className='relative'>
                            {/* md:before:content-evolvetext */}
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] '>
                                <img src={ClarifyTagline} alt="home-page-text" />
                            </div>
                        </div>
                        <p className='mt-8 text-small'>
                            Unrivaled service and unparalleled organization to get the life you want. Take control and Clarify life TODAY!
                        </p>
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div
                        className='mt-8 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <ActionButton
                            setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className='text-sm font-bold text-gray-500 underline transition duration-100 hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* IMAGE */}
                <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                    <img className='object-contain' src={HomePageGraphic2} alt="home-pageGraphic" />
                </div>
            </motion.div>

            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-white py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex items-center justify-between gap-8'>
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img className='h-[28px]' src={SponsorRealSimple} alt="redbull-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home