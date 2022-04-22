const PAGES = {
    SPACE: {
        accentColor: "#2c3791",
        name: "Space",
        badge: {
            icon: "star",
            color: "#F0B800"
        },
        contents: ["news", "quiz"]
    },
    // DINOSAUR: {
    //     accentColor: "#199600",
    //     name: "Dinosaurs",
    //     badge: {
    //         icon: "bone",
    //         color: "#9d40f5"
    //     },
    //     contents: ["quiz"]
    // }
}

const PARTNERS = {
    observatory: {
        color: "#DA6161"
    }
}

const API_ROUTES = {
    SPACE_GET: `${"someRoute"}/space`,
    DINOSAUR_GET: `${"someRoute"}/dinosaur`,
}

export {
    PAGES,
    PARTNERS,
    API_ROUTES 
}