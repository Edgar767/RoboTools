import { useState } from 'react';
import PostsSubSection from '../../../../Components/ProgramasEscolares/PostsSubSection';
import FullContentModal from '../../../../Components/FullContentModal';
import LegoEducationSec from './LegoEducationSec';
import MicrobitSec from './MicrobitSec';
import MojoRTSec from './MojoRTSec';

const postsData = [
    {
        title: "LEGO EDUCATION",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/legoeducationsec", // Ruta a la que se redirigirá al presionar esta entrada
        useModal: true
    },
    {
        title: "MICROBIT + CROWBITS",
        desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
        img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/microbitsec", // Ruta a la que se redirigirá al presionar esta entrada
        useModal: true
    },
    {
        title: "MOJO RT",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/mojortsec", // Ruta a la que se redirigirá al presionar esta entrada
        useModal: true
    }
]

const RoboticaSec = () => {
    const [modalContent, setModalContent] = useState(null);

    const handlePostClick = (post) => {
        if (post.useModal) {
            switch(post.title) {
                case "LEGO EDUCATION":
                    setModalContent(<LegoEducationSec />);
                    break;
                case "MICROBIT + CROWBITS":
                    setModalContent(<MicrobitSec isInModal={true} />);
                    break;
                case "MOJO RT":
                    setModalContent(<MojoRTSec isInModal={true} />);
                    break;
                default:
                    window.location.href = post.href;
            }
        } else {
            window.location.href = post.href;
        }
    };

    const closeModal = () => setModalContent(null);

    return (
    <div>
        <h4 className="title color-variation-1 mt-20 mb-0 text-center text-4xl font-extrabold">ROBOTICA SECUNDARIA</h4>
            <PostsSubSection posts={postsData} onPostClick={handlePostClick} />

            <FullContentModal
                isOpen={modalContent !== null}
                onClose={closeModal}
                content={modalContent}
            />
    </div>
    )
}

export default RoboticaSec;
