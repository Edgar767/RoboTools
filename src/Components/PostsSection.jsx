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
                            <Link to={item.href} key={index} className="w-full group relative overflow-hidden rounded-lg shadow-lg">
                                <img 
                                    src={item.img} 
                                    loading="lazy" 
                                    alt={item.title} 
                                    className="object-cover object-center w-full h-full rounded-lg transition duration-200 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-lg"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
                                    <h3 className="text-3xl text-white font-extrabold">{item.title}</h3>
                                </div>
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">{item.date}</span>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {/* Segunda columna */}
                        {secondColumn.map((item, index) => (
                            <Link to={item.href} key={index} className="w-full group relative overflow-hidden rounded-lg shadow-lg">
                                <img 
                                    src={item.img} 
                                    loading="lazy" 
                                    alt={item.title} 
                                    className="object-cover object-center w-full h-full rounded-lg transition duration-200 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-lg"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
                                    <h3 className="text-3xl text-white font-extrabold">{item.title}</h3>
                                </div>
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">{item.date}</span>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
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
