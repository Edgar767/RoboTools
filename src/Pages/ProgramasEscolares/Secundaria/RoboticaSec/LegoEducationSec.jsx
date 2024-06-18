import PostsSubSection from '../../../../Components/PostsSubSection';

const postsData = [
    {
        title: "LEGO EV3",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "LEGO EDUCATION SPACE CHALLENGE",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "LEGO EDUCATION ENGINEERING PACK",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/" // Ruta a la que se redirigirá al presionar esta entrada
    },
]

const LegoEducationSec = () => {
    return (
    <div>
        <h4 className="title color-variation-1 mt-20 mb-0 text-center text-4xl font-extrabold">LEGO EDUCATION SECUNDARIA</h4>
            <PostsSubSection posts={postsData} />
    </div>
    )
}

export default LegoEducationSec;