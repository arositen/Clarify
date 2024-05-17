import { SelectedPage, ReviewCardType } from "@/shared/types"
import Review from "@/scenes/reviews/reviews";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import profilePic01 from '@/assets/Review pfp 01.jpg';
import profilePic02 from '@/assets/Review pfp 02.jpg';
import profilePic03 from '@/assets/Review pfp 03.jpg';
import profilePic04 from '@/assets/Review pfp 04.jpg';


const reviews: Array<ReviewCardType> = [
    {
        userName: 'Josephine Mancino',
        pfp: profilePic01,
        review: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eaque quaerat, accusamus reprehenderit quos placeat voluptatibus magni iusto corrupti culpa, natus rerum ipsum, voluptatem nobis. Hic tempore molestiae pariatur modi?"',
        stars: 5,
    },
    {
        userName: 'Sarah Young',
        pfp: profilePic02,
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eaque quaerat, accusamus reprehenderit quos placeat voluptatibus magni iusto corrupti culpa, natus rerum ipsum, voluptatem nobis. Hic tempore molestiae pariatur modi?',
        stars: 5,
    },
    {
        userName: 'Florence Davis',
        pfp: profilePic03,
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eaque quaerat, accusamus reprehenderit quos placeat voluptatibus magni iusto corrupti culpa, natus rerum ipsum, voluptatem nobis. Hic tempore molestiae pariatur modi?',
        stars: 5,
    },
    {
        userName: 'James Hernandez',
        pfp: profilePic04,
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eaque quaerat, accusamus reprehenderit quos placeat voluptatibus magni iusto corrupti culpa, natus rerum ipsum, voluptatem nobis. Hic tempore molestiae pariatur modi?',
        stars: 5,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const Reviews = ({ setSelectedPage }: Props) => {
    return (
        <section id="reviews" className="mx-auto min-h-full w-5/6 py-5">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)} >
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
                    <HText>WHAT CLIENTS SAY ABOUT CLARIFY</HText>
                </motion.div>
                {/* REVIEW CARDS */}
                <motion.div
                    className="grid grid-cols-1 my-auto mx-auto md:grid md:grid-cols-2 gap-8 mt-5 items-center justify-between"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}>
                    {reviews.map((review: ReviewCardType, index: number) => (
                        <Review
                            key={`${review.userName}-${index}`}
                            userName={review.userName}
                            pfp={review.pfp}
                            review={review.review}
                            stars={review.stars}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Reviews