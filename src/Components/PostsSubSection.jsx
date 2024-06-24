import PropTypes from 'prop-types';

const PostsSubSection = ({ posts, onPostClick }) => {
    return (
        <section className="py-4">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((item, key) => (
                        <li 
                            className="w-full mx-auto group sm:max-w-sm cursor-pointer" 
                            key={key}
                            onClick={() => onPostClick ? onPostClick(item) : window.location.href = item.href}
                        >
                            <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                            <div className="mt-3 space-y-2">
                                <span className="block text-indigo-600 text-sm">{item.date}</span>
                                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-extrabold">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

PostsSubSection.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    onPostClick: PropTypes.func
};

export default PostsSubSection;