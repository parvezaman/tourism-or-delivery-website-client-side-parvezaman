// const guides =[
//     {
//         id:1,
//         name: "Md. Amanullah Parvez",
//         title: "Tour Manager",
//         imageUrl: "https://www.unite2canada.com/images/dummy-user.png"
//     },
//     {
//         id:2,
//         name: "Amanullah",
//         title: "Tour Planner",
//         imageUrl: "https://www.unite2canada.com/images/dummy-user.png"
//     },
//     {
//         id:3,
//         name: "Parvez Aman",
//         title: "Tour Guide",
//         imageUrl: "https://www.unite2canada.com/images/dummy-user.png"
//     },
//     {
//         id:4,
//         name: "Parvez Amanullah",
//         title: "Tour Guide",
//         imageUrl: "https://www.unite2canada.com/images/dummy-user.png"
//     },
//     {
//         id:5,
//         name: "Md. Amanullah",
//         title: "Tour Guide",
//         imageUrl: "https://www.unite2canada.com/images/dummy-user.png"
//     },
//     {
//         id:6,
//         name: "Amanullah Aman",
//         title: "Tour Guide",
//         imageUrl: "https://www.unite2canada.com/images/dummy-user.png"
//     },
// ]



const placesToVisit =[
    {
        name:'Bali, Indonesia',
        description:'You’ll find beaches, volcanoes, Komodo dragons and jungles sheltering elephants, orangutans and tigers. Basically, it’s paradise. It’s likely you’ve seen an image of Bali on social media at least once in the past seven days, as it’s such a popular bucket list destination for 2019.',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/b-_WGBp-inZQlUAncBaCIOJ2FFB-GgZpRqR4XtcUMvmJ6MNr0Sb3r874PXeCM0aVRg7r8KFdyU5Fr3FPQuLqFB_Jw4AJqRq4yIymXvJM7oNQ2xsaTkl96w'
    },
    {
        name:'New Orleans',
        description:'The lively city known for its street music, festive vibe and a melting pot of French, African and American cultures is well worth the trip. NOLA is a city packed with adventures at every turn and should be on everyone’s must-visit list.',
        imageUrl: 'https://www.progressiverailroading.com/resources/editorial/2019/PR0819-NOLA.jpg'
    },
    {
        name:'Kerry, Ireland',
        description:'All the way west in Ireland is one of the country’s most scenic counties. Kerry’s mountains, lakes and coasts are postcard-perfect, and that’s before you add in Killarney National Park. The unique small towns such as Dingle add to its charm.',
        imageUrl: 'https://loveirishtours.com/wp-content/uploads/2017/11/Kerry542-900x500.jpg'
    },
    {
        name:'Marrakesh, Morocco',
        description:'This ancient walled city is home to mosques, palaces and lush gardens. It’s known as The Red City thanks to the color of the brick walls surrounding the city. The medina is a UNESCO World Heritage Centre.',
        imageUrl: 'https://magicdeserttours.com/wp-content/uploads/2018/08/desert-15.jpg'
    },
    {
        name:'Sydney',
        description:'Sydney is known around the world as one of the greatest and most iconic cities on the planet. Amazing things to do aren’t hard to find; the city has gorgeous beaches, great cafes and world-class entertainment on offer wherever you look.',
        imageUrl: 'https://www.blueskyconsultancy.com/assets/uploads/university/campus/1543513888-Sydney-900x500.jpg'
    },
    {
        name:'The Maldives',
        description:'This tropical nation in the Indian Ocean is made up of more than 1,000 coral islands. It’s home to some of the world’s most luxurious hotel resorts, with white sandy beaches, underwater villas and restaurants and bright blue waters.',
        imageUrl: 'https://www.travel-in-luxury.com/wp-content/uploads/2019/09/Untitled.png'
    },
    {
        name:'Paris, France',
        description:'One of the most iconic cities in the world, Paris tops many people’s bucket lists. You’ll see so many famous landmarks here: the Eiffel Tower, Arc de Triomphe, Notre Dame cathedral—the list is never-ending.',
        imageUrl: 'https://i1.wp.com/hippocketwifi.com/wp-content/uploads/2017/09/Paris-automne-900x500.jpg'
    },
    {
        name:'Cape Town, South Africa',
        description:'Cape Town is a dream location to visit: endless natural beauty and clifftop views, pastel pink neighborhoods and turquoise waters.',
        imageUrl: 'https://unforgettabletravel.imgix.net/wp-content/uploads/2021/05/January-Cape-Town-SA-1.jpg'
    },
    {
        name:'',
        description:'The high-flying city of the U.A.E, Dubai is one of the most glamorous destinations you’ll ever visit, and is particularly popular with Big 7 Travel readers.',
        imageUrl: ''
    },
    {
        name:'Dubai, U.A.E.',
        description:'The high-flying city of the U.A.E, Dubai is one of the most glamorous destinations you’ll ever visit, and is particularly popular with Big 7 Travel readers.',
        imageUrl: 'https://www.worldd.info/wp-content/uploads/2017/12/dubai1-900x500.jpg'
    },
    {
        name:'Bora Bora, French Polynesia',
        description:'Bora Bora is Tahitis most famous island. How do overwater bungalows and underwater adventures sound to you? To us, it’s everything we could want from a bucket list destination.',
        imageUrl: 'https://tahiti-experiences.net/wp-content/uploads/2020/11/46492407_975341059328193_8951634515508330496_o-900x500.jpg'
    },
    {
        name:'New York',
        description:'New York is one of America’s most exciting states. With charming upstate scenery, world-class cuisine and culture and more things to do than you could fit in one lifetime. The city’s five boroughs all have special features; it’s almost impossible to narrow it down',
        imageUrl: 'https://heliny.com/wp-content/uploads/2019/05/shutterstock_235760404-900x500.jpg'
    },
    {
        name:'Dubrovnik, Croatia',
        description:'As George Bernard Shaw once said, Those who seek paradise on Earth should come to Dubrovnik. With its winding streets, cliffside beach bars and UNESCO World Heritage Site of the Old Town, it’s no wonder Dubrovnik is such a popular spot.',
        imageUrl: 'https://welcome-to-croatia.com/wp-content/uploads/2017/01/Dubrovnik-harbour-900x500.jpg'
    },
    {
        name:'Edinburgh, Scotland',
        description:'With the historic Edinburgh castle looming over the city, culture in spades and wonderfully friendly locals, this is one of the world’s greatest city breaks.',
        imageUrl: 'https://images.prismic.io/betterbooking/0e49e48493a8e6f234be848b910e7af65522971b_446790_edinburgh_yedinburg_gorod_shotlandiya_scotland_arx_2048x1365_www.gdefon.ru.jpg?auto=compress,format'
    },
    {
        name:'Rome, Italy',
        description:'Whether it’s your first time in Rome or your 50th, the best thing about this city is that you’ll always discover something new each time you stroll the scenic streets.',
        imageUrl: 'https://www.destinitaly.com/wp-content/uploads/2019/04/Ok-The-Temple-of-Saturn-by-night-at-Roman-Forum-Rome-000014083054_Full.jpg'
    },
    {
        name:'Paro Valley, Bhutan',
        description:'Paro Valley is known for its monasteries, fortresses (or dzongs) and dramatic landscapes. Tucked between China and India, Bhutan is a mysterious country that prides itself on sustainable tourism. You’ll find Paro Taktsang here, a Himalayan Buddhist sacred site.',
        imageUrl: 'https://www.ewsholidays.com/wp-content/uploads/2019/12/Paro-Valley-Paro-Bhutan-Asia5_1.jpg'
    }
]