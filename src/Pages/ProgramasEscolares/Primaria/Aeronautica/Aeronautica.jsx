import PostsDouble from "../../../../Components/PostsDouble";

const DoubleData = [
  {
      href: "./Cohetes",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Aero",
      title: "Cohetes"
  },
  {
      href: "./Drones",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Aero",
      title: "Drones"
  }
];

const Aeronautica = () => {
    return (
        <PostsDouble
            title="AERONAUTICA"
            description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
            cards={DoubleData}
        />
    );
};

export default Aeronautica;