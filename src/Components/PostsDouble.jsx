import PropTypes from 'prop-types';

const PostsDouble = ({ title, description, cards }) => {
    return (
        <div className="container mx-auto max-w-4xl p-10">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{title}</h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{description}</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {cards.map((option, index) => (
                            <a key={index} href={option.href} className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src={option.image} loading="lazy" alt={option.alt} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                <div className="relative flex flex-col">
                                    <span className="text-gray-300">{option.label}</span>
                                    <span className="text-lg font-semibold text-white lg:text-xl">{option.title}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

PostsDouble.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired
};

export default PostsDouble;
