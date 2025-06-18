import { FooterContactDetails, FooterLinks, FooterKeyFacts, FooterMedia, FooterCopyright } from "@/types/types";

export const footerLinks: FooterLinks= {
    links: [
        {id: 1, logo: "/btn/logo_3.png", href: "/", },
        {id: 2, label: "Game", href: "/game", },
        {id: 3, label: "About", href: "/about", },
        {id: 4, label: "Demo", href: "/demo", },
    ],
}

export const footerMedia: FooterMedia = {
    developers: {
        title: "Developers",
        names: [
            {id: 1, name:'Lava Sharif', linkedin: "", icon:"/btn/linkedin.png"},
            {id: 2, name:'Bushra ----', linkedin: "", icon:"/btn/linkedin.png"},
            {id: 3, name:'May ----', linkedin: "", icon:"/btn/linkedin.png"},
            {id: 4, name:'Dimitar ---', linkedin: "", icon:"/btn/linkedin.png"},
            {id: 5, name:'Saif ----', linkedin: "", icon:"/btn/linkedin.png"},
            {id: 6, name:'Srilata ----', linkedin: "", icon:"/btn/linkedin.png"},
    ]},
}

export const footerContactDetails: FooterContactDetails = {
    title: "Connect with Us",
    phone: "08-33 60 16",
    email: "info@futuregames.se"
}

export const footerKeyFacts: FooterKeyFacts = {
    title: "Key Facts",
    facts: [
        "Genre: Survival | Exploration | Mystic",
        "Developer: Futuregames",
        "Beta versions available",
        "Controls: WASD movement, crafting, mystical powers",
    ]
}

export const footerCopyright: FooterCopyright = {
    copyright: '©2025 | Røsvik Team | All rights reserved'
}