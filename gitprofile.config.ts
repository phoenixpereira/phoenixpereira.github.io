// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'phoenixpereira', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Courses API',
          description:
            'Contributed to the Courses API, a project that scrapes course information from the University of Adelaide website and serves it through API endpoints for integration into other CS Club projects. Focused on fixing and optimising the web scraper to ensure accurate and efficient data extraction. Additionally, added more API endpoints to enhance access to detailed course information. The API will be across multiple projects, providing reliable and up-to-date course data for students at the University of Adelaide.',
          imageUrl: '/projects/courses-api.png',
          link: 'https://github.com/compsci-adl/courses-api',
          techStack: ['Python', 'FastAPI', 'Requests'],
          date: 'Jul 2024 - Current',
        },
        {
          title: 'DuckBot',
          description:
            "Developed DuckBot, a feature-rich Discord bot for the Computer Science Club's Discord server as part of an ongoing CS Club Open Source Team project. Built using Python and the discord.py library, DuckBot enhances the server experience by providing a variety of commands and automated functionality. Contributed to the bot's core functionality, including handling commands and adding basic commands.",
          imageUrl: '/projects/duckbot.png',
          link: 'https://github.com/compsci-adl/duckbot',
          techStack: ['Python', 'Discord.py'],
          date: 'May 2024 - Current',
        },
        {
          title: 'Computer Science Club Website',
          description:
            'Developed a dynamic and responsive website for the Computer Science Club within as part of the CS Club Open Source Team using React, Next.js, TypeScript, Tailwind CSS, SQLite, and Redis. Implemented frontend components and ensured a seamless user experience with Clerk to handle account authentication. Deployed the website using Docker containers on AWS, ensuring a scalable and efficient infrastructure to support further CS Club open source projects.',
          imageUrl: '/projects/cs-club-website.png',
          link: 'https://github.com/compsci-adl/website',
          techStack: [
            'React',
            'Typescript',
            'Tailwind CSS',
            'Vite',
            'SQLite',
            'Redis',
          ],
          date: 'Nov 2023 - Current',
        },
        {
          title: 'MGT Detection UI',
          description:
            'Created a Machine Generated Text (MGT) detector to determine if text is machine-generated or not. Conducted in-depth analysis of the HC3 dataset using Python to generate text statistics required for visualisations. Uses multiple MGT detection models through the Hugging Face API rather than locally, improving the user experience.',
          imageUrl: '/projects/mgt-detection-ui.png',
          link: 'https://github.com/phoenixpereira/MGT-Detection-UI',
          techStack: ['React', 'Typescript', 'Tailwind CSS', 'Vite', 'Python'],
          date: 'Apr 2024 - Jun 2024',
        },
        {
          title: 'Lecture Master',
          description:
            'Developed a browser extension designed to make watching university lectures more efficient. Implemented automatic silent part skipping by dynamically adjusting playback rates based on the silence threshold. Utilised technologies including React, Tailwind CSS, and Vite to build and customise the extension, providing users with configurable playback settings and an extended playback speed range.',
          imageUrl: '/projects/lecture-master.png',
          link: 'https://github.com/phoenixpereira/Lecture-Master',
          techStack: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
          date: 'Aug 2023 - Sep 2023',
        },
        {
          title: 'News Sentiment Analysis',
          description:
            'Analysed the sentiment and emotion of news headlines from 2007 to 2021 of prominent global news outlets. Used Python and Pandas for sorting the data, Hugging Face Transformers models for performing the sentiment and emotion analysis, and Matplotlib for displaying the results in graphs. Results provided insights into the evolution of sentiment and emotions in news headlines over time, facilitating a comprehensive understanding of how news tone changed.',
          imageUrl: '/projects/news-sentiment-analysis.png',
          link: 'https://github.com/phoenixpereira/News-Sentiment-Analysis',
          techStack: ['Python'],
          date: 'Aug 2023 - Sep 2023',
        },
        {
          title: 'Realm of Critters',
          description:
            'Collaborated within a small team to develop a 2D game using C++ based on ”Vampire Survivors”. Applied Object Orientated Programming concepts to implement core game mechanics, including character interactions, enemy behaviours, and experience accumulation for level progression and upgrades. Integrated various features including intuitive user interfaces, immersive sound effects, and a simple save file system.',
          imageUrl: '/projects/realm-of-critters.png',
          link: 'https://github.com/CuinnKemp/Realm-of-Critters',
          techStack: ['C++', 'SFML'],
          date: 'Aug 2022 - Oct 2022',
        },
        {
          title: 'MATLAB Tetris',
          description:
            'Recreated the classic game Tetris using MATLAB, offering users an interactive gameplay experience. Implemented controls for moving, rotating, and speeding up block descent, offering intuitive keyboard commands. Designed the game to feature sound effects for block movements and music that dynamically speeds up as players advance through levels, enhancing the gaming atmosphere and engagement. The project was recognised for its technical proficiency and creativity, receiving the University of Adelaide Computer Science Club MATLAB and C Project Award.',
          imageUrl: '/projects/tetris.png',
          link: 'https://github.com/phoenixpereira/MATLAB-Tetris',
          techStack: ['MATLAB'],
          date: 'Mar 2022 - Apr 2022',
        },
      ],
    },
  },
  seo: {
    title: 'Phoenix Pereira',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'phoenixpereira',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'phoenixpereira@outlook.com.au',
  },
  skills: [
    'C++',
    'Python',
    'HTML',
    'CSS',
    'SQL',
    'JavaScript',
    'TypeScript',
    'MATLAB',
    'GitHub',
    'VS Code',
    'Docker',
    'Linux',
    'AWS',
    'Azure',
    'Turso',
    'Redis',
    'MySQL',
    'React',
    'Tailwind CSS',
    'Vite',
    'Next.js',
    'SFML',
  ],

  experiences: [
    {
      company: 'Australian Government',
      position: 'STEM Cadet',
      from: 'Feb 2024',
      to: 'Present',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'The University of Adelaide',
      degree: 'Bachelor of Computer Science (Advanced)',
      from: '2023',
      to: '2025 (Expected)',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
  about:
    "Hi, I'm Phoenix, a second-year Bachelor of Computer Science (Advanced) student at the University of Adelaide. I'm interested in web development, cyber security and artificial intelligence. When I'm not coding, you can find me playing video games, watching movies, and photographing various landscapes. I'm currently seeking opportunities to apply myself and expand my knowledge through software engineering internships, please feel free to get in touch.",
};

export default CONFIG;
