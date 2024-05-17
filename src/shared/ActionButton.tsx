import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink className="rounded-md text-white bg-secondary-500 px-10 py-2 hover::bg-primary-500 hover::text-white hover:drop-shadow-md"
            offset='80'
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}>
            {children}
        </AnchorLink>
    )
}

export default ActionButton