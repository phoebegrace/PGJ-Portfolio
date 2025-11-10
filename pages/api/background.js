const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'West Visayas State University',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science Major in Artificial Intelligence, Magna Cumlaude",
                year: '2021-2025'
            },
            {
                id: 1,
                title: 'Governor Julian Fullon Pacificador National School',
                degree: 'STEM (Science, Technology, Engineering, Mathematics)',
                detail: "Boy Scout of the Philippines: Eagle Scout Rank | Supreme Student Government Officer | Consistent Honor Student",
                year: '2015-2021'
            },
            {
                id: 2,
                title: 'TESDA',
                degree: 'Java Programming NCIII',
                detail: "Completed Java Programming NCIII and topped the OCA Mock Exam",
                year: '2022'
            },
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'TESDA Antique - Provincial Office',
                role: 'Government Internship Program ',
                url: 'https://primof.ph/',
                desc: 'I assisted the Provincial Director in planning and executing major events, including the WorldSkills Competition 2025 at the provincial level. I also led the technical and creative team in developing presentations, LED materials, and event marketing assets such as tarpaulins, posters, and video promotions. Additionally, I coordinated logistics and handled documentation for provincial-level events and training programs. ',
                year: '09/2025 - 12/2025',
                location: 'Antique, Philippines'
            },
            {
                id: 1,
                title: 'Executive Virtual Assistant',
                role: 'Freelancer',
                url: 'no website',
                desc: 'I supported a financial group client by managing daily operations and implementing automation through GoHighLevel (GHL) and Wavv Dialer. I created weekly and monthly performance reports while ensuring CRM data remained accurate. Additionally, I managed task automations to streamline agent workflows and guarantee timely task distribution.',
                year: '05/2025 - 10/2025',
                location: 'Remote Work'
            },
            {
                id: 2,
                title: 'Hamtic Multi-Purpose Corporation',
                role: 'Graphic Designer',
                url: 'no website',
                desc: 'I designed tarpaulins, event posters, booklets, and presentation slides for corporate and community events.',
                year: '07/2025 - 8/2025',
                location: 'Remote Work'
            },
            {
                id: 3,
                title: 'Primof Funnel Marketing Solutions Inc.',
                role: 'Intern ',
                url: 'https://primof.ph/',
                desc: 'Handled funnel creation and full-stack web development using GoHighLevel (GHL), from front-end to back-end implementation and Integrated AI-powered tools and automation into client funnel systems. ',
                year: '01/2025 - 04/2025',
                location: 'Iloilo City, Philippines'
            },
            {
                id: 4,
                title: 'aespaversePH',
                role: 'Founder and Creative Content Creator',
                url: 'https://aespaverseiloilo.carrd.co',
                desc: 'Designed and produced creative materials, including pubmats and videos, for fan events and community projects. Led and managed large-scale events such as cinema block screenings with 200+ attendees and received positive feedbacks.',
                year: '03/2024 - Present',
                location: 'Iloilo City, Philippines'
            },
            {
                id: 5,
                title: 'Ang Pagbutlak',
                role: 'Publication Staff Writer',
                url: 'no website',
                desc: "Layout and wrote feature, news, and editorial articles for school publication releases. ",
                year: '07/2015 - 04/2021',
                location: 'Antique, Philippines'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
