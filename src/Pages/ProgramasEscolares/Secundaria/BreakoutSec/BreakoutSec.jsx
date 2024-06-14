import React from 'react';
import { Link } from 'react-router-dom';

const BreakoutSec = () => {
    const posts = [
        {
            title: "FISICA LAB ROOM",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/" // Ruta a la que se redirigirá al presionar esta entrada
        },
        {
            title: "QUIMICA LAB ROOM",
            desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/" // Ruta a la que se redirigirá al presionar esta entrada
        },
        {
            title: "BIOLOGIA LAB ROOM",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/" // Ruta a la que se redirigirá al presionar esta entrada
        },
        {
            title: "ANATOMIA LAB ROOM",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/" // Ruta a la que se redirigirá al presionar esta entrada
        },
        {
            title: "KIT HERRAMIENTAS BREAKOUT EDU",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/" // Ruta a la que se redirigirá al presionar esta entrada
        },
    ]
    
        return (
            <div>
            <div className="container mx-auto max-w-4xl p-10">
            {/* Carrusel */}
                <div className="w-full carousel rounded-box mb-20">
                    <div className="w-full carousel-item">
                        <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full" />
                    </div>
                    <div className="w-full carousel-item">
                        <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full" />
                    </div>
                    <div className="w-full carousel-item">
                        <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full" />
                    </div>
                    </div>
                    </div>

                <section className="py-32">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">BREAKOUT EDU SECUNDARIA</h1>
                        </div>
                        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                posts.map((items, key) => (
                                    <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                        <a href={items.href}>
                                            <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                            <div className="mt-3 space-y-2">
                                                <span className="block text-indigo-600 text-sm">{items.date}</span>
                                                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                                    {items.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                </div>
            )
        }
  
  export default BreakoutSec;