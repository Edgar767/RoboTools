import { useState } from 'react';
import PostsDouble from "../../../../Components/PostsDouble";
import FullContentModal from "../../../../Components/FullContentModal";
import CohetesSec from './CohetesSec';
import DronesSec from './DronesSec';

const DoubleData = [
  {
      href: "./CohetesSec",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Aero Sec",
      title: "Cohetes Sec",
      useModal: true
  },
  {
      href: "./DronesSec",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Aero Sec",
      title: "Drones Sec",
      useModal: true
  }
];

const AeronauticaSec = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (card) => {
    if (card.useModal) {
        switch(card.title) {
            case "Cohetes Sec":
                setModalContent(<CohetesSec />);
                break;
            case "Drones Sec":
                setModalContent(<DronesSec />);
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
              title="AERONAUTICA SECUNDARIA"
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

export default AeronauticaSec;