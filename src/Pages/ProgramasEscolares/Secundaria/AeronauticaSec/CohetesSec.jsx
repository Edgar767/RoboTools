import PostsDouble from "../../../../Components/PostsDouble";

const DoubleData = [
  {
      href: "",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Primaria",
      title: "KIT BASICO"
  },
  {
      href: "",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Secundaria",
      title: "AVANZADO"
  }
];

const CohetesSec = () => {
    return (
      <PostsDouble
          title="KITS DE COHETES"
          description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
          cards={DoubleData}
      />
    );
  };
  
  export default CohetesSec;