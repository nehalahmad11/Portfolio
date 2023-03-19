import kfc from "./media/kfc.mp4"
import skinstore from "./media/skinstore.mp4"
import royal from "./media/royal.mp4";



export const details={
    firstname:"Nehal",
    lastname:"Ahmad",
    navList:["Home","About","Skills","Work","Contact"],
    scrollPosition:[0,545,1070,1730,3400],
    className:["introDiv","aboutContainer","skillContainer","workDiv","contactDiv"],
    linkedInLink:"https://www.linkedin.com/in/nehal-ahmad11/",
    githubLink:"https://github.com/nehalahmad11",
    instagramLink:"https://www.instagram.com/rehanmalick0786/",
    mailLink:"nehalahamad1999@gmail.com",
    techStack:[
            {
                name:"HTML",
                img:"https://img.icons8.com/color/512/html-5--v1.png"
            },
            {
                name:"CSS",
                img:"https://img.icons8.com/fluency/512/css3.png"
            },
            {
                name:"JavaScript",
                img:"https://img.icons8.com/color/512/javascript.png"
            },
            {
                name:"Java",
                img:"https://img.icons8.com/ios-filled/512/java-coffee-cup-logo.png"
            },
            {
                name:"React",
                img:"https://img.icons8.com/office/512/react.png"
            },
            {
                name:"Material UI",
                img:"https://img.icons8.com/color/512/material-ui.png"
            },
            {
                name:"Chakra UI",
                img:"https://img.icons8.com/color/512/chakra-ui.png"
            },
            {
                name:"Node JS",
                img:"https://img.icons8.com/fluency/512/node-js.png"
            },
            {
                name:"BootStrap",
                img:"https://img.icons8.com/color/512/bootstrap.png",

            },
            {
                name:"Github",
                img:"https://img.icons8.com/glyph-neue/512/github.png"
            },
            {
                name:"Express JS",
                img:"https://img.icons8.com/ios/512/express-js.png"
            },
            {
                name:"Mongo DB",
                img:"https://img.icons8.com/color/512/mongodb.png"
            }

    ],
    projects:[

        {
            name:"KFC",
            github:"https://github.com/MOHDSHABANKHAN/KFC-clone",
            live:"https://gilded-tapioca-ca26b0.netlify.app/",
            type:"Colaborative",
            tech:["HTML","CSS","JavaScript"],
            img:kfc,
            description:"KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville Kentucky, that specializes in fried chicken."
        },

        {
            name:"Skin Store",
            github:"https://github.com/AmanNinave/Skin_Store_Clone",
            live:"https://idyllic-biscuit-d36106.netlify.app/an-skinstore/homepage/",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript"],
            img:skinstore,
            description:"SkinStore is an online marketplace that offers a vast catalog of beauty products comprising skincare, haircare, self-care, makeup, and body categories."
        },
    
        {
            name:"Royal Brothers",
            github:"https://github.com/nehalahmad11/royalBrothersclone",
            live:"https://royalbrothers-project.vercel.app/",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript", "React"],
            img:royal,
            description:"bike rental (bikes, superbikes, scooty) platform providing rentals spanning across 14 states, 43 cities and 3 international cities."
        }
       

    ]

}