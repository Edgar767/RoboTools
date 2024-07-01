import PostsSubSection from '../../../../Components/ProgramasEscolares/PostsSubSection';

const postsData = [
    {
        title: "FISICA LAB ROOM",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "QUIMICA LAB ROOM",
        desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
        img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "BIOLOGIA LAB ROOM",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "ANATOMIA LAB ROOM",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "KIT HERRAMIENTAS BREAKOUT EDU",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
]

const BreakoutSec = () => {
    return (
    <div>
        <h4 className="title color-variation-1 mt-20 mb-0 text-center text-4xl font-extrabold">BREAKOUT EDU SECUNDARIA</h4>
            <PostsSubSection posts={postsData} />
    </div>
    )
}

export default BreakoutSec;