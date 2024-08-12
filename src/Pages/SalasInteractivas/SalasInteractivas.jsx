import InicioCards from '../../Components/InicioCards';
import FloatingBlocks from '../../Components/Animation/FloatingBlocks';
import FloatingImages from '../../Components/Animation/FloatingImages';

const InicioCardsData = [
  {
    title: "INGENIUS",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/Ingenius",
  },
  {
    title: "SENSORIA",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image22.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/Sensoria",
  },
  {
    title: "OTROS",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image33.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/",
  },
];

const SalasInteractivas = () => {

  return (
    <div className="relative min-h-screen">
      <FloatingBlocks />
      <div className="relative z-10">
        <> 

            <FloatingImages images={
                  [
                    {
                      src: '/extras/roboto/roboto1.png',
                      speed: 3,
                      zIndex: 20,
                      positionX: '10%',
                      positionY: '2%',
                    },
                    {
                      src: '/extras/roboto/roboto2.png',
                      speed: 2,
                      zIndex: 20,
                      positionX: '77%',
                      positionY: '65%',
                    },
                  ]
                }
            />

            <InicioCards
                title="Salas Interactivas"
                description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
                cards={InicioCardsData}
            />
        </>
      </div>
    </div>
  );
};

export default SalasInteractivas;