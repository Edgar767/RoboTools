import InicioCards from "../../../../Components/InicioCards";
import PropTypes from 'prop-types';

const InicioCardsData = [
    {
      title: "LITE BEE WING",
      image: "",
      alt: "Photo by Fakurian Design",
      link: "",
    },
    {
      title: "LITE BEE WING FM",
      image: "",
      alt: "Photo by Fakurian Design",
      link: "",
    },
    {
      title: "GHOST II",
      image: "",
      alt: "Photo by Fakurian Design",
      link: "",
    },
  ];

const DronesSec = ({ isInModal }) => {
    return (
        <InicioCards
            title="DRONES SECUNDARIA"
            description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
            cards={InicioCardsData}
            isInModal={isInModal}
        />
    );
};

DronesSec.propTypes = {
  isInModal: PropTypes.bool
};

export default DronesSec;
