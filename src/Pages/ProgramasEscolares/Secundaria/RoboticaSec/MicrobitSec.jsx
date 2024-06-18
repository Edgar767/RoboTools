import PostsDouble from "../../../../Components/PostsDouble";

const DoubleData = [
  {
      href: "#",
      image: "https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Micro",
      title: "MICROBIT V2.0"
  },
  {
      href: "#",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750",
      alt: "Photo by Fakurian Design",
      label: "Micro",
      title: "C.T. STARTER KIT"
  }
];

const MicrobitSec = () => {
    return (
        <div className="container mx-auto max-w-4xl p-10">
        {/* Carrusel */}
        <div className="w-full carousel rounded-box mb-20">
          <div className="w-full carousel-item">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full" />
          </div>
          <div className="w-full carousel-item">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full" />
          </div>
          <div className="w-full carousel-item">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full" />
          </div>
        </div>

        <PostsDouble
            title="MICROBIT + C.T. STARTER KIT"
            description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
            cards={DoubleData}
        />

      </div>
    );
  };

export default MicrobitSec;