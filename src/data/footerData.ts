import { FooterContactDetails, FooterLinks, FooterMedia, FooterCopyright } from "@/types/types";

export const footerLinks: FooterLinks= {
    quickLinks: {
        title: "Quick Links",
    links: [
        {id: 1, logo: "/btn/logo_3.png", href: "/", },
        {id: 2, label: "Game", href: "/game", },
        {id: 3, label: "About", href: "/about", },
        {id: 4, label: "Demo", href: "/demo", },
    ]},
}

export const footerMedia: FooterMedia = {
    developers: {
        title: "Web Developers",
        names: [
            {id: 1, 
                name:'Lava Sharif', 
                linkedin: "https://www.linkedin.com/in/lava-sharif-24a400323/", 
                icon:"/btn/linkedin.png", 
                github: "https://github.com/Lvhacker1", 
                giticon: "/btn/github.png"},
            {id: 2, 
                name:'Srilatha Potnuru', 
                linkedin: "https://www.linkedin.com/in/srilatha-potnuru-229b80215/", 
                icon:"/btn/linkedin.png", 
                github: "https://github.com/potnurusrilatha", 
                giticon: "/btn/github.png"},
            {id: 3,
                name:'May Sunktong', 
                linkedin: "https://www.linkedin.com/in/may-sunktong-276b53143/", 
                icon:"/btn/linkedin.png", 
                github: "https://github.com/maysunktong", 
                giticon: "/btn/github.png"},
            {id: 4, 
                name:'Saifelislam Eisa', 
                linkedin: "", 
                icon:"/btn/linkedin.png", 
                github: "https://github.com/SSSpac", 
                giticon: "/btn/github.png"},
            {id: 5, 
                name:'Bushra Rauf', 
                linkedin: "", 
                icon:"/btn/linkedin.png",                
                github: "https://github.com/bushra-rauf", 
                giticon: "/btn/github.png",},
            {id: 6, 
                name:'Dimitar Manastirski', 
                linkedin: "https://www.linkedin.com/in/dimitar-manastirski-89638b303/?originalSubdomain=se", 
                icon:"/btn/linkedin.png", 
                github: "https://github.com/DimitarIM", 
                giticon: "/btn/github.png"},
    ]},
}

export const footerContactDetails: FooterContactDetails = {
    title: "Connect with Us",
    phone: "08-33 60 16",
    email: "info@futuregames.se"
}

export const footerCopyright: FooterCopyright = {
    copyright: '© 2025 | Røsvik Team | All rights reserved'
}