import { useState } from 'react';
import PostsDouble from "../../../../Components/PostsDouble";
import FullContentModal from "../../../../Components/FullContentModal";
import Cohetes from './Cohetes';
import Drones from './Drones';

const DoubleData = [
  {
      href: "./Cohetes",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Aero",
      title: "Cohetes",
      useModal: true
  },
  {
      href: "./Drones",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Aero",
      title: "Drones",
      useModal: true
  }
];

const Aeronautica = () => {
    const [modalContent, setModalContent] = useState(null);

    const handleCardClick = (card) => {
        if (card.useModal) {
            switch(card.title) {
                case "Cohetes":
                    setModalContent(<Cohetes />);
                    break;
                case "Drones":
                    setModalContent(<Drones />);
                    break;
                default:
                    window.location.href = card.href;
            }
        } else {
            window.location.href = card.href;
        }
    };

    const closeModal = () => setModalContent(null);

    return (
        <>
            <PostsDouble
                title="AERONAUTICA"
                description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
                cards={DoubleData}
                onCardClick={handleCardClick}
            />
            <FullContentModal
                isOpen={modalContent !== null}
                onClose={closeModal}
                content={modalContent}
            />
        </>
    );
};

export default Aeronautica;