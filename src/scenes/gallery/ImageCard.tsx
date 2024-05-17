type Props = {
    name: string,
    description?: string;
    image: string;
};

function ImageCard({ name, description, image }: Props) {

    const overlayStyles = 'absolute flex p-5 flex-col justify-center z-30 min-h-full min-w-full rounded-lg whitespace-normal bg-primary-500 text-gray-500 opacity-0 transition duration 500 hover:opacity-90'

    return (
        <div className="relative">
            <div className={overlayStyles}>
                <p className=" text-2xl md:text-xl text-center">{name}</p>
                <p className="mt-5 text-center">{description}</p>
            </div>
            <img className="h-auto max-w-full rounded-lg object-cover object-center" src={image} alt={`${image}`} />
        </div>
    )
}

export default ImageCard