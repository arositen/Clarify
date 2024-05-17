import { SelectedPage, ServiceType } from "@/shared/types";
import HText from "@/shared/HText";
import { HomeModernIcon, UserGroupIcon, GlobeAmericasIcon, CalendarDaysIcon, ClockIcon, GiftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Service from "./services";

const services: ServiceType[] = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Home Organization",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente sed optio officiis
         reiciendis earum id, accusamus, quas nam cum et harum ex incidunt iste quod, quae ipsum consectetur praesentium?`
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Life Planning",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente sed optio officiis
         reiciendis earum id, accusamus, quas nam cum et harum ex incidunt iste quod, quae ipsum consectetur praesentium?`
    },
    {
        icon: <GlobeAmericasIcon className="h-6 w-6" />,
        title: "Travel Planning",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente sed optio officiis
         reiciendis earum id, accusamus, quas nam cum et harum ex incidunt iste quod, quae ipsum consectetur praesentium?`
    },
    {
        icon: <ClockIcon className="h-6 w-6" />,
        title: "Time Management",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente sed optio officiis
         reiciendis earum id, accusamus, quas nam cum et harum ex incidunt iste quod, quae ipsum consectetur praesentium?`
    },
    {
        icon: <CalendarDaysIcon className="h-6 w-6" />,
        title: "Project Management",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente sed optio officiis
         reiciendis earum id, accusamus, quas nam cum et harum ex incidunt iste quod, quae ipsum consectetur praesentium?`
    },
    {
        icon: <GiftIcon className="h-6 w-6" />,
        title: "Concierge Services",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente sed optio officiis
         reiciendis earum id, accusamus, quas nam cum et harum ex incidunt iste quod, quae ipsum consectetur praesentium?`
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Services({ setSelectedPage }: Props) {
    return (
        <section id="services" className="mx-auto min-h-full w-5/6 py-5">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HText><span className="text-secondary-500">MORE</span> THAN JUST TIDYING UP.</HText>
                    <p className="my-5 text-sm">
                        Our team will work to help you reach your organizational goals. Whether it's redesigning that junk closet, planning your upcoming trip,
                        or preparing for your future, we've got you covered!
                    </p>
                </motion.div>
                {/* SERVICES */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:mt-5 items-center justify-between"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}>
                    {services.map((service: ServiceType) => (
                        <Service
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Services