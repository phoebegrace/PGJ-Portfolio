const portfolio = {
  projects: {
    primof: [
      {
        id: 0,
        projectName: "Prime Media Hub",
        url: "https://automation.civy.io/v2/preview/4H7dctiVPfRyGetO2lhe",
        image: "projects/primof/pmh.png",
        projectDetail: "A comprehensive funnel and automation system including landing, thank-you, booking, and cancellation pages. Integrated email sequences and payment workflows to support subscriptions, free trials, and demos. Designed mockups in Figma and Canva using trends like glassmorphism.",
        technologiesUsed: [
          { tech: "GoHighLevel (Civy)" },
          { tech: "Figma" },
          { tech: "Canva" },
          { tech: "Whimsical" },
          { tech: "Pabbly + PayMongo" },
        ]
      },
      {
        id: 1,
        projectName: "Cris Vinson Life Coaching Funnel",
        url: "https://automation.civy.io/v2/preview/cjKPJTon9I2VVHKwr1vh",
        image: "projects/primof/crisvinson.png",
        projectDetail: "Designed a responsive coaching funnel layout and automated lead management workflows for life coaching sessions. Balanced design with strategy, ensuring a smooth user journey.",
        technologiesUsed: [
          { tech: "GoHighLevel (Civy)" },
          { tech: "Canva" },
        ]
      },
      {
        id: 2,
        projectName: "Internal Booking System - Primof BOD",
        url: "https://www.canva.com/design/DAGkOVTWMmU/vYKHVcv76QxvzkxIH4oKqg/view?utm_content=DAGkOVTWMmU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h38a954a03a",
        image: "projects/primof/bodbooking.png",
        projectDetail: "Designed and implemented an internal calendar-integrated booking system for Primof’s Board of Directors, focusing on usability and frontend responsiveness.",
        technologiesUsed: [
          { tech: "GoHighLevel (Civy)" },
          { tech: "Canva" },
          { tech: "Calendar Integration" },
          { tech: "Email Notifications" },
        ]
      },
      {
        id: 3,
        projectName: "Civy Course Mock-ups",
        url: "https://www.canva.com/design/DAGlOQtuQrQ/dqa0ZTEP6FjPbfqsLT_4JA/view?utm_content=DAGlOQtuQrQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f9551d7ef",
        image: "projects/primof/civycourse.png",
        projectDetail: "Transcribed and mocked up Civy course content, focusing on UI structure, then integrated AI-generated sales copy into the design for better conversion.",
        technologiesUsed: [
          { tech: "Canva" },
          { tech: "Google Docs" },
          { tech: "ChatGPT" },
          { tech: "Funnel Scripts AI" },
        ]
      },
      {
        id: 4,
        projectName: "VVIP Challenge Funnel",
        url: "#",
        image: "projects/primof/vvip.png",
        projectDetail: "Designed a multi-page funnel for a VVIP client, including landing, upsell, thank-you, sign-in, sales, and onboarding pages. Prioritized user journey flow and visual alignment with branding.",
        technologiesUsed: [
          { tech: "Canva" },
          { tech: "GoHighLevel (Civy)" },
          { tech: "UI/UX Strategy" },
        ]
      },
      {
        id: 5,
        projectName: "Salon Booking Automations",
        url: "#",
        image: "projects/primof/salon.png",
        projectDetail: "Created a salon booking automation with conditional logic workflows, external and internal email alerts for appointment tracking.",
        technologiesUsed: [
          { tech: "GoHighLevel (Civy)" },
          { tech: "Automation Workflows" },
          { tech: "Email Notifications" },
        ]
      },
      {
        id: 6,
        projectName: "Life Coaching Event Funnel",
        url: "https://automation.civy.io/v2/preview/BYQSm6y76HEpsyqmhF4w",
        image: "projects/primof/lifecoaching.png",
        projectDetail: "Built a complete funnel from landing to backend workflows, including form submissions, email sequences, and lead nurturing for a life coaching event.",
        technologiesUsed: [
          { tech: "GoHighLevel (Civy)" },
          { tech: "Funnel Automation" },
          { tech: "Lead Management" },
        ]
      }
    ],
    aespaverse: [
      {
        id: 0,
        projectName: "Event Poster Designs",
        url: "https://aespaverseiloilo.carrd.co",
        image: "projects/aespaverse/events.png",
        projectDetail: "Creative posters, pubmats, and videos for fan events including a 200+ seat block screening event.",
        technologiesUsed: [
          { tech: "Canva" },
          { tech: "Photoshop" },
        ]
      },
      {
        id: 0,
        projectName: "Event Banner Designs",
        url: "https://aespaverseiloilo.carrd.co",
        image: "projects/aespaverse/banners.png",
        projectDetail: "Creative posters, pubmats, and videos for fan events including a 200+ seat block screening event.",
        technologiesUsed: [
          { tech: "Canva" },
          { tech: "Photoshop" },
        ]
      },
      {
        id: 1,
        projectName: "Social Media Content",
        url: "https://aespaverseiloilo.carrd.co",
        image: "projects/aespaverse/social.png",
        projectDetail: "Led visual branding and content design for aespaversePH’s social campaigns.",
        technologiesUsed: [
          { tech: "Canva" },
          { tech: "Photoshop" }
        ]
      }
    ]
  }
};

export default function handler(req, res) {
  res.status(200).json(portfolio);
}
