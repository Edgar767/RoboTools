import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostsSection = ({ posts }) => {
    // Divide el array de posts en dos partes
    const firstColumn = posts.slice(0, 2);
    const secondColumn = posts.slice(2);

    return (
        <div className="px-4 md:px-8 lg:px-16"> {/* Agrega padding horizontal */}
            <section className="py-4">
                <div className="mx-auto">
                    <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {/* Primera columna */}
                        {firstColumn.map((item, index) => (
                            <Link to={item.href} key={index} className="w-full group">
                                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">{item.date}</span>
                                    <h3 className="text-3xl text-gray-800 duration-150 group-hover:text-indigo-600 font-extrabold">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {/* Segunda columna */}
                        {secondColumn.map((item, index) => (
                            <Link to={item.href} key={index} className="w-full group">
                                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">{item.date}</span>
                                    <h3 className="text-3xl text-gray-800 duration-150 group-hover:text-indigo-600 font-extrabold">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

PostsSection.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default PostsSection;