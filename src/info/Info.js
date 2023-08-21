import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(95, 92, 255)", "rgb(168, 215, 255)"];
// https://gradientgenerator.paytonpierce.dev/ 


export const info = {
    firstName: "Gabrielle",
    lastName: "Lailler",
    initials: "gl", 
    position: "développeuse web junior",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🩺',
            text: 'passionnée par la santé'
        },
        {
            emoji: '🌎',
            text: 'à Paris'
        },
        {
            emoji: "💼",
            text: "en recherche d'alternance"
        },
        {
            emoji: "📧",
            text: "gabrielle.lailler@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/gabrielle.lailler",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/gabriellelailler",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Je suis Gabrielle Lailler, développeuse web. Après des études à HEC et une expérience en tant que responsable des opérations dans une startup pharmaceutique, j'ai choisi de me former en tant que développeuse web via OpenClassroom.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs']
        }
    ,
    hobbies: [
        {
            label: 'cyclisme',
            emoji: '🚴‍♂️'
        },
        {
            label: 'boxe',
            emoji: '🥊'
        },
        {
            label: 'running',
            emoji: '🏃‍♀️'
        },
        {
            label: 'concerts',
            emoji: '🎤'
        }

    ],
    portfolio: [
        {
            title: "Booki - HTML, CSS",
            source: "https://github.com/gabriellelailler/oc-projet2",
            image: mock1
        },
        {
            title: "Sophie Bluel - Javascript",
            source: "https://github.com/gabriellelailler/oc-projet3",
            image: mock2
        },
        {
            title: "Nina Carducci - Debug, SEO",
            source: "https://github.com/gabriellelailler/oc-projet5",
            image: mock3
        },
        {
            title: "Kasa - React",
            source: "https://github.com/gabriellelailler/oc-projet6",
            image: mock4
        },
        {
            title: "Mon Vieux Grimoire - NodeJS",
            source: "https://github.com/gabriellelailler/oc-projet7",
            image: mock5
        }
    ]
}