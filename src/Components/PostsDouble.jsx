import PropTypes from 'prop-types';

const PostsDouble = ({ title, description, cards, onCardClick, isInModal }) => {
    const isSingleCard = cards.length === 1;

    return (
        <>
            <div className={`container mx-auto ${isInModal ? 'max-w-full' : 'max-w-4xl'} p-4 sm:p-6 lg:p-8`}>
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-10 md:mb-16">
                            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{title}</h2>
                            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container mx-auto ${isInModal ? 'max-w-full' : 'max-w-screen-2xl'} p-4 sm:p-6 lg:p-8`}>
                <div className={`flex flex-col md:flex-row md:justify-center ${isSingleCard ? 'md:items-center' : 'md:space-x-6'} space-y-6 md:space-y-0`}>
                    {cards.map((option, index) => (
                        <div 
                            key={index} 
                            className={`group relative flex h-[60vh] md:h-[80vh] w-full ${
                                isInModal 
                                    ? isSingleCard ? 'md:w-[70%] lg:w-[60%]' : 'md:w-[90%] lg:w-[80%]'
                                    : isSingleCard ? 'md:w-[60%] lg:w-[50%]' : 'md:w-[45%] lg:w-[35%]'
                            } items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg cursor-pointer`}
                            onClick={() => onCardClick ? onCardClick(option) : window.location.href = option.href}
                        >
                            <img src={option.image} loading="lazy" alt={option.alt} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                            <div className="relative flex flex-col">
                                <span className="text-gray-300">{option.label}</span>
                                <span className="text-lg font-semibold text-white lg:text-xl">{option.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
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
    })).isRequired,
    onCardClick: PropTypes.func,
    isInModal: PropTypes.bool
};

PostsDouble.defaultProps = {
    isInModal: false
};

export default PostsDouble;