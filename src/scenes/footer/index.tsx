import ClarifyLogo from "@/shared/clarifyLogoSVG";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <ClarifyLogo height={2} />
                    <p className="my-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Ipsa dolorum ex dolor cum molestiae repellat temporibus obcaecati, vero,
                        quaerat dicta delectus labore eum enim reprehenderit assumenda quisquam perferendis non ratione?
                    </p>
                    <p>© Clarify All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Mass orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(555)555-5555</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer