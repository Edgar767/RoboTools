import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostsSection = ({ posts }) => {
    // Divide el array de posts en dos partes
    const firstColumn = posts.slice(0, 2);
    const secondColumn = posts.slice(2);

    return(
        <div>
            <section className="py-32">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    </div>
                    <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {/* Primera columna */}
                        {firstColumn.map((item, index) => (
                            <Link to={item.href} key={index} className="w-full mx-auto group sm:max-w-sm">
                                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">{item.date}</span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
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
                            <Link to={item.href} key={index} className="w-full mx-auto group sm:max-w-sm">
                                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">{item.date}</span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
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
