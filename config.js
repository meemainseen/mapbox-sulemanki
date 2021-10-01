var config = {
    style: 'mapbox://styles/meemainseen/cku6fcvh23ifx17mkq6kfo2nx',
    accessToken: 'pk.eyJ1IjoibWVlbWFpbnNlZW4iLCJhIjoiY2t1Mm9wN25tMWdlNzJ2bzc3OHYzZ2o4ZyJ9.jnUPJ5ORkW6Goj1LegYOfg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Shuhada e Asafwala',
    subtitle: 'The War South of Sutlej',
    byline: '',
    footer: '@meemainseen',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'left',
            hidden: false,
            title: '',
            
            description: "A through traffic from Baba Farid’s Pakpattan to the grand railway bazar of Bathinda, is abrupty cut off by a small patch of 'No Man's Land' at Sadiqia border post just next to Sulemanki Headworks. This location is just on the tip of Fazilka bulge jutting into Pakistani territory.<br>The ‘Monsoon War’ south of Sutlej was no mach to the fanfare at Lahore and Sialkot sectors. The operations had a modest aim of 'straightening out the bulge’ and in the process win some territory to sit on and bargain. A clue to the operations in Sulemanki - Fazilka sector, dear reader, comes to us from the modest town of Haveli Lakha.",
            location: {
                center: [73.17847, 30.32162],
                zoom: 7.46,
                pitch: 1.00,
                bearing: 0.00
            },
            image: './images/entrance.jpg',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fazilka-points',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'fazilka-blue1',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'fazilka-fox1',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'fazilka-blue2',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'fazilka-fox2',
                    opacity: 0,
                    duration: 0
                },

                {
                    layer: 'pakpattan-bhatinda',
                    opacity: 0.5,
                    duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            title: 'The Graves of Haveli Lakha',
            image: './images/graves.jpg',
            description: "Driving out of Haveli Lakha on a bearing to Head Sulemanki situated beside the road is Martyrs' Graveyard. Gracefully whitewashed, neatly aligned and well kept these graves belong to 1 Baloch. These soldiers of 'The Gallant One' were among the leading elements that had attacked Asafwala.",
            location: {
                center: [73.72684, 30.46254],
                zoom: 12.33,
                pitch: 60.00,
                bearing: 116.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pakpattan-bhatinda',
                    opacity: 0,
                },

                {
                    layer: 'fazilka-points',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/board.jpg',
            description: 'An on-site board announces that on the morning of 9th September, Delta Company of 1 Baloch attacked Asafwala and that these soldiers embraced shahadat in that gallant action. It goes on to state that Asafwala was captured. Well, not exactly.',
            location: {
                center: [73.72684, 30.46254],
                zoom: 12.33,
                pitch: 60.00,
                bearing: 116.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        },

        {
            id: 'chapter4',
            alignment: 'left',
            hidden: false,
            title: 'The Attack on Asafwala',
            image: './images/sadiqi.jpg',
            description: "1 Baloch was to launch an attack on Asafwala believed to be a border outpost. In a broad daylight attack on 9 September what D Company actually encountered was a regular Indian Battalion 14 Punjab.",
            location: {
                center: [73.89388, 30.36812],
                zoom: 13.71,
                pitch: 59.50,
                bearing: 67.15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fazilka-blue1',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/grave2.jpg',
            description: "In the face of stiff opposition 1 Baloch fought gallantly managing to secure a platoon location, but 14 Punjab soon evicted them causing heavy casualties. These were the very soldiers we met at Haveli Lakha Graveyard.<br>1 Baloch in coming days would bag Chananwala & Khanwala, a consolation prize after the Asafwala debacle. Channawala would prove significant in later operations but let's first meet Indian 14 Punjab.",
            location: {
                center: [73.93696, 30.37031],
                zoom: 14.91,
                pitch: 60.00,
                bearing: 32.04
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fazilka-fox1',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            title: 'The Nabha Akal Battalion',
            image: './images/nabha.jpg',
            description: "14 Punjab (Nabha Akal) defended the Asafwala post on Fazilka Road. Indian accounts tell us that having repulsed the assault by 1st Baloch, later into the battle their locality came under deliberate attacks by 22 Punjab. In the span of two days they beat back more than 4 attempts giving an excellent account of themselves.",
            location: {
                center: [73.95028, 30.36785],
                zoom: 14.93,
                pitch: 58.50,
                bearing: -133.87
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fazilka-blue1',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'fazilka-fox1',
                    opacity: 0,
                }

            ]
        },

        {
            id: 'chapter7',
            alignment: 'left',
            hidden: false,
            title: 'Action at Chananwala',
            image: './images/farooq.jpg',
            description: "A performance par excellence was also delivered by Pakistani 4 Punjab. Chananwala initially captured by 1 Baloch was converted to a well defended locality by 4 Punjab who were well dug in by 23 Sep. This location came under a formidable Indian counter attack on 25 Sep.<br>___<br>The picture above is the then Lieutenant Farooq Nawaz Janjua Sitara-e-Jurat who fought with utmost valour at Chananwala.<br>image courtesy @leftofthepincer",
            location: {
                center: [73.94762, 30.36572],
                zoom: 13.25,
                pitch: 60.00,
                bearing: 29.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fazilka-blue2',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter8',
            alignment: 'left',
            hidden: false,
            title: "Bobby's 4 Punjab",
            image: './images/chananwala.jpg',
            description: "3/9 Gorkha Rifles supported by an Armour Squadron attacked Chananwala. 4 Punjab absorbed the Phase 1 thrust by two companies with patience and then struck back. In a brilliant maneuver they encircled the attacking companies. 2 Officers, 4 JCOs and 45 Soldiers were taken prisoner.<br>___<br>In the picture above General Musa pins the Sitara-e-Jurat on Lieutenant Colonel Jehanzeb 'Bobby' Arbab, commanding officer of the 4ᵗʰ Punjab.<br>image courtesy @leftofthepincer",
            location: {
                center: [73.94847, 30.35364],
                zoom: 14.83,
                pitch: 60.00,
                bearing: 29.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fazilka-fox2',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "The area up to Chananwala stayed with Pakistan until a ceasefire was agreed upon by Sep 26.",
            location: {
                center: [73.90074, 30.36090],
                zoom: 11.35,
                pitch: 0.00,
                bearing: 0.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fazilka-fox1',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'fazilka-blue1',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
    ]
};
