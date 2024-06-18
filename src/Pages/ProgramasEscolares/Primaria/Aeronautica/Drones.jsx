import PostsDouble from "../../../../Components/PostsDouble";

const DoubleData = [
  {
      href: "#",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Drones",
      title: "LITE BEE WING"
  }
];

const Drones = () => {
  return (
    <PostsDouble
          title="DRONES"
          description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
          cards={DoubleData}
      />
  );
};

export default Drones;
