import { useState } from 'react';
import PostsDouble from '../../Components/ProgramasEscolares/PostsDouble';
import FullContentModal from '../../Components/FullContentModal';
import Ingenius from './Ingenius';
import Sensoria from './Sensoria';
import FloatingBlocks from '../../Components/Animation/FloatingBlocks';


const DoubleData = [
  {
      href: "./Ingenius",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "",
      title: "INGENIUS",
      useModal: true
  },
  {
      href: "./Sensoria",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "",
      title: "SENSORIA",
      useModal: true
  }
];

const SalasInteractivas = () => {
  const [modalContent, setModalContent] = useState(null);

      const handleCardClick = (card) => {
        if (card.useModal) {
            switch(card.title) {
                case "INGENIUS":
                    setModalContent(<Ingenius />);
                    break;
                case "SENSORIA":
                    setModalContent(<Sensoria />);
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
        <div className="relative min-h-screen">
      <FloatingBlocks />
      <div className="relative z-10">
        <>
            <PostsDouble
                title="SALAS INTERACTIVAS"
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
        </div>
        </div>
    );
};

export default SalasInteractivas;