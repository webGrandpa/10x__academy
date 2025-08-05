// const news = [
//     {
//         title: "today i do something",
//         subtitle: "something 1",
//         content: "doing somehting is good",
//         image: ['https://awdaw', 'https://awaddaw'],
//         partners: [{
//             title: "we are chempions",
//             site: "jdjawd.ge",
//             keyword: ["we are good", "we are better"]
//         },
//         {
//             title: "we are chempions2",
//             site: "jdjawd.g2e",
//             keyword: ["we are good2", "we are better2"]
//         }
//     ]
//     }
// ]

// const keywords = news[0].partners[1].keyword;

// console.log(keywords);

// const image = news[0].image[1];

// console.log(image)


const news = [
    {
        title: "today i do something",
        subtitle: "something 1",
        content: "doing somehting is good",
        image: ['https://awdaw', 'https://awaddaw'],
        partners: [{
            title: "we are chempions",
            site: "jdjawd.ge",
            keyword: ["we are good", "we are better"]
        },
        {
            title: "we are chempions2",
            site: "jdjawd.g2e",
            keyword: ["we are good2", "we are better2"]
        }
    ]
    },
    {
        title: "today i do something3",
        subtitle: "something 13",
        content: "doing somehting is good3",
        image: ['https://awdaw3', 'https://awaddaw3'],
        partners: [{
            title: "we are chempions3",
            site: "jdjawd.ge3",
            keyword: ["we are good3", "we are better3"]
        },
        {
            title: "we are chempions23",
            site: "jdjawd.g2e3",
            keyword: ["we are good23", "we are better23"]
        }
    ]
    }
]


if (!news || news.length ===0){
    console.log(`dont have newses`);
} else {
    const firstNews = news[0];
    const secondNews = news[1];
}