import { SelectedPage, ImageCardType } from '@/shared/types'
import { motion } from "framer-motion"
import ImageCard from './ImageCard'
import HText from '@/shared/HText';
import orgImage1 from "@/assets/OrgImage01.jpg"
import orgImage2 from "@/assets/OrgImage02.jpg"
import orgImage3 from "@/assets/OrgImage06.jpg"
import orgImage5 from "@/assets/OrgImage05.jpg"
import orgImage6 from "@/assets/OrgImage03.jpg"
import orgImage7 from "@/assets/OrgImage07.jpg"
import orgImageLong1 from "@/assets/OrgImageLong01.jpg"
import orgImageLong2 from "@/assets/OrgImageLong02.jpg"
import orgImageLong3 from "@/assets/OrgImageLong03.jpg"
import orgImageLong4 from "@/assets/OrgImageLong04.jpg"
import orgImageLong5 from "@/assets/OrgImageLong05.jpg"



const cards: Array<ImageCardType> = [
    {
        name: "Office",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: orgImage1,
    },

    {
        name: "Knitting Room",
        image: orgImageLong1,
    },
    {
        name: "Living Room",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: orgImage2,
    },
    {
        name: "Kitchen",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: orgImageLong2,
    },
    {
        name: "Kitchen II",
        image: orgImage3,
    },
    {
        name: "Gift Wrapping",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: orgImage6,
    },
    {
        name: "Kitchen III",
        image: orgImage5,
    },
    {
        name: "Wardrobe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: orgImage7,
    },
    {
        name: "Garage",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: orgImageLong5,
    },
    {
        name: "Garage II",
        image: orgImageLong4,
    },
    {
        name: "Wardrobe II",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: orgImageLong3,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Gallery({ setSelectedPage }: Props) {
    return (
        <section id='gallery' className='mx-auto min-h-full w-5/6 py-5'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)} >
                {/* HEADER */}
                <motion.div
                    className='md:my-5 md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HText>OUR WORK</HText>
                </motion.div>
                {/* IMAGE CARDS */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="grid gap-4 content-between">
                        {cards.slice(0, 3).map((card: ImageCardType, index: number) => (
                            <ImageCard
                                key={`${card.name} - ${index}`}
                                name={card.name}
                                description={card.description}
                                image={card.image} />
                        ))}
                    </div>
                    <div className="grid gap-4 content-between">
                        {cards.slice(3, 6).map((card: ImageCardType, index: number) => (
                            <ImageCard
                                key={`${card.name} - ${index}`}
                                name={card.name}
                                description={card.description}
                                image={card.image} />
                        ))}
                    </div>
                    <div className="grid gap-4 content-between">
                        {cards.slice(6, 9).map((card: ImageCardType, index: number) => (
                            <ImageCard
                                key={`${card.name} - ${index}`}
                                name={card.name}
                                description={card.description}
                                image={card.image} />
                        ))}
                    </div>
                    <div className="grid gap-4 content-between">
                        {cards.slice(9).map((card: ImageCardType, index: number) => (
                            <ImageCard
                                key={`${card.name} - ${index}`}
                                name={card.name}
                                description={card.description}
                                image={card.image} />
                        ))}
                    </div>
                </div>
            </motion.div>

        </section>
    )
}

export default Gallery

{/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="grid justify-stretch">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImage1}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center "
                            src={orgImageLong1}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImage2}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid justify-stretch">
                    <div>
                        <img

                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImageLong2}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImage3}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center "
                            src={orgImage6}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImage5}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center "
                            src={orgImage7}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImageLong3}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImageLong4}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={orgImageLong5}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
            </div> */}