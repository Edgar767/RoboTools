import PostsDouble from "../../../../Components/ProgramasEscolares/PostsDouble";
import PropTypes from 'prop-types';

const DoubleData = [
  {
      href: "#",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "MojoRTSec",
      title: "Title"
  },
  {
      href: "#",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "MojoRTSec",
      title: "Title"
  }
];

const MojoRTSec = ({ isInModal }) => {
    return (
        <PostsDouble
            title="MOJORT SECUNDARIA"
            description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
            cards={DoubleData}
            isInModal={isInModal}
        />
    );
};

MojoRTSec.propTypes = {
    isInModal: PropTypes.bool
};

export default MojoRTSec;