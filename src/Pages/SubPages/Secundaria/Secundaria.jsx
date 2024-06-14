import { useEffect } from 'react';
import PostsSection from '../../../Components/PostsSection';

const Secundaria = () => {
    useEffect(() => {
        // Desplazar la ventana a la parte superior al cargar la página
        const scrollToTop = () => {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'auto' });
            }, 0);
        };

        scrollToTop();

        const handleLoad = () => {
            scrollToTop();
        };

        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            /* Animaciones para el zoom en las imágenes */
            @keyframes zoomIn {
                0% {
                    transform: scale(0.9);
                    opacity: 0;
                }
                100% {
                    transform: scale(1);
                    opacity: 1;
                }
            }

            .image-zoom {
                animation: zoomIn 0.5s ease-out;
                transition: transform 0.2s ease-in-out;
            }

            .image-zoom:hover,
            .image-zoom:focus {
                transform: scale(1.05);
            }

            /* Animaciones para la aparición de elementos al hacer scroll */
            @keyframes fadeInUp {
                0% {
                    transform: translateY(20px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .animate-on-scroll {
                opacity: 0;
                transition: opacity 0.6s, transform 0.6s;
            }

            .animate-on-scroll.animate {
                animation: fadeInUp 1s forwards; /* Ajusta este tiempo para cambiar la duración de la animación */
            }
        `;
        document.head.appendChild(style);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const posts = [
        {
            title: "ROBOTICA",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/RoboticaSec" // Ruta a la que se redirigirá al presionar esta entrada
        },
        {
            title: "AERONAUTICA",
            desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/AeronauticaSec" // Ruta a la que se redirigirá al presionar esta entrada
        },
        {
            title: "REALIDAD VIRTUAL Y AUMENTADA",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/RealidadVirtualSec" // Ruta a la que se redirigirá al presionar esta entrada
        },
        {
            title: "BREAKOUT EDU",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
            img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "",
            href: "/BreakoutSec" // Ruta a la que se redirigirá al presionar esta entrada
        }
    ];

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 animate-on-scroll">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Secundaria</h1>
                </div>
            </div>
            <div className="animate-on-scroll">
                <PostsSection posts={posts} />
            </div>
        </div>
    );
}

export default Secundaria;
