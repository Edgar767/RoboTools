import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostsSection = ({ posts }) => {
    const renderPost = (item, index) => (
        <div key={index} className="group">
            <Link to={item.href} className="block w-full relative overflow-hidden rounded-lg shadow-lg">
                <img 
                    src={item.img} 
                    loading="lazy" 
                    alt={item.title} 
                    className="object-cover object-center w-full h-64 sm:h-80 md:h-96 rounded-lg transition duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-extrabold text-center px-4">{item.title}</h3>
                </div>
            </Link>
            <div className="mt-3 space-y-2 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">{item.title}</h3>
                <span className="block text-indigo-600 text-sm">{item.date}</span>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
        </div>
    );

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <section className="py-4">
                <div className="mx-auto">
                    <div className="grid gap-8 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {posts.map(renderPost)}
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