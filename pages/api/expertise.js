const expertise = [
    {
        id: 0,
        title: 'Web Development using HTML, CSS, JavaScript, TypeScript',
        desc: 'I’m passionate about developing websites using HTML, CSS, JavaScript, and TypeScript. As a graduating B.S. Computer Science student, I’ve honed my skills in creating user-focused, interactive web solutions, like my portfolio website, blending tech and design to craft visually appealing and functional experiences.',
    },
    {
        id: 1,
        title: 'Machine Learning with Python',
        desc: 'Specializing in Artificial Intelligence at West Visayas State University, I use Python to explore machine learning projects. My curiosity drives me to experiment with data and algorithms, aiming to create intelligent solutions that solve real-world problems while enhancing my technical skills.',
    },
    {
        id: 2,
        title: 'UI/UX Design with Figma',
        desc: 'I wireframe and design user interfaces using Figma, combining my love for tech and creativity. My experience in UI/UX design allows me to craft intuitive and aesthetically pleasing layouts, ensuring a seamless user experience that aligns with modern design trends.',
    },
    {
        id: 3,
        title: 'Video Editing with CapCut and Premiere Pro',
        desc: 'I edit videos for reels, TikTok, and YouTube Shorts using CapCut, and I’m learning Premiere Pro to expand my skills. Video editing lets me tell stories through visuals, and I enjoy creating engaging content that resonates with audiences on social platforms.',
    },
    {
        id: 4,
        title: 'Creative Design with Canva, Photoshop, Spline, and Blender',
        desc: 'I use Canva for quick edits, Photoshop for complex designs, and Spline and Blender for 3D modeling. These tools fuel my passion for design, allowing me to create stunning visuals and models that bring my ideas to life, from graphics to immersive 3D projects.',
    },
    {
        id: 5,
        title: 'Music Production with Audacity and RVC',
        desc: 'I’m deeply interested in music production, using Audacity to edit audio and RVC to clone singers’ voices. Music heals me, and working with these tools lets me explore my creativity, blending tech with my love for sound to produce unique audio experiences.',
    },
    {
        id: 6,
        title: 'App Development with Flutter',
        desc: 'I develop apps using Flutter, leveraging its flexibility to create cross-platform mobile applications. My journey in app development allows me to build functional and user-friendly apps, combining my technical skills with a focus on design.',
    },
    {
        id: 7,
        title: 'Productivity with Microsoft Office',
        desc: 'I’m proficient in Microsoft Office, using it for office work, documentation, and presentations. These tools help me stay organized and efficient, ensuring I can deliver high-quality work for school projects and professional tasks with ease.',
    },
    {
        id: 8,
        title: 'GitHub for Collaboration',
        desc: 'I use GitHub to manage my projects, like my portfolio website, and to collaborate with others. It’s a vital tool for version control, allowing me to track changes, contribute to projects, and showcase my work to the tech community.',
    },
    {
        "id": 9,
        "title": "GoHighLevel Development",
        "desc": "I am proficient in using GoHighLevel to develop both front-end and back-end solutions. I build engaging front-end interfaces like landing pages and forms, and implement back-end automations, workflows, and calendar integrations to create powerful, scalable web applications."
    }
];

export default function handler(req, res) {
    res.status(200).json(expertise);
}