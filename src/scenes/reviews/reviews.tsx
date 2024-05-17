import { motion } from "framer-motion";
import StarRating from "@/shared/StarRating";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
}

type Props = {
    userName: string,
    pfp?: string,
    review: string,
    stars: number
}

function Review({ userName, pfp, review, stars }: Props) {
    return (

        <motion.div
            variants={childVariant}
            className="flex flex-col justify-between border-r border-b border-l border-t rounded-b rounded-r p-4 border-gray-400 md:border-gray-400 bg-white">
            {/* Type 2 comment */}
            <div className="grid min-h-full w-full place-items-center rounded-lg p-3 md:p-6 lg:overflow-visible">
                <div className="px-8 text-center">
                    <h2 className="mb-6 block font-sans text-lg md:text-2xl font-medium leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                        {review}
                    </h2>
                    <img
                        src={pfp}
                        alt="image"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center "
                    />
                    <h6 className="block mt-4 mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                        {userName}
                    </h6>
                    <StarRating number={stars} />

                </div>
            </div>
        </motion.div >
    )
}

export default Review