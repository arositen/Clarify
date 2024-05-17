export enum SelectedPage {
    Home = "home",
    Services = "services",
    Gallery = "gallery",
    Reviews = "reviews",
    ContactUs = "contactus",
}

export interface ServiceType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ImageCardType {
    name: string,
    description?: string;
    image: string;
}

export interface ReviewCardType {
    userName: string,
    pfp?: string,
    review: string,
    stars: number,
}