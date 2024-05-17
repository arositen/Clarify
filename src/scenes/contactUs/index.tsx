import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {

    const inputStyles = 'mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-500';

    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-10 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
                <motion.div
                    className="md:w-4/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        START ORGANIZING YOUR LIFE <span className="text-secondary-500">TODAY</span>
                    </HText>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni ex provident animi molestias facilis eius,
                        eveniet quas dolorum ullam est voluptas quos dignissimos enim ad veniam ab atque distinctio?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni ex provident animi molestias facilis eius,
                        eveniet quas dolorum ullam est voluptas quos dignissimos enim ad veniam ab atque distinctio?
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/ab5b8b2ae7c553e18957b892bc55db04"
                            method="POST"
                        >
                            <input className={inputStyles} type="text" placeholder="Name" {...register("name", { required: true, maxLength: 100, })} />
                            {errors.name && (
                                <p className=" text-secondary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 characters."}
                                </p>
                            )}

                            <input className={inputStyles} type="email" placeholder="Email"
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
                            {errors.email && (
                                <p className=" text-secondary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}

                            <textarea className={inputStyles} rows={4} cols={50} placeholder="Message" {...register("message", { required: true, maxLength: 2000, })} />
                            {errors.message && (
                                <p className=" text-secondary-500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <img className="w-full rounded-lg" src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
                    </motion.div>
                </div>

            </motion.div>

        </section>
    )
}

export default ContactUs;