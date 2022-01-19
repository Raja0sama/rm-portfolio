const portfolio = {
  resume: {
    projects: {
      title: "PROJECTS",
      list: [
        {
          title: "Drone Response Project ",
          description:
            "Worked as a freelancer for university of University of Notre Dame Where they have multiple kind of drones, auto piloted towards the destination, Like to search and rescue and Delivery Drones. Work was done over Angular Js and my first time working as an angular Engineer.",
        },
        {
          title: "WaterLink",
          description:
            "Created an online water Tanker delivery system, with realtime tracking of the tanker very similar to Uber minus the animation. The Project was created on React Js, React Native and Firebase, where firestore was the main Database and Cloud serverless functions were used as backend functions.",
        },
        {
          title: "React-native foreground Service",
          description:
            "RN-foreground-service let you run an un-killable headless task for react native, It is the most extensive kind of foreground service for react native in the market that has features like multi-task running from a single headless task, notification control such as buttons and on notification click handle, also let you update the notification on the go. It was designed while I was developing an uber application https://waterlink.pk/ for water tanker supply and needed a headless task running even if the app is killed, therefore the solution was to create a foreground service in android which is an un-killable notification keeping an instance of your application alive, therefore headless",
        },
        {
          title: "WooShop",
          description:
            "Created open-source project e-commerce based project created with React-native, Graph-QL, and woo-commerce. It was developed as a showcase application so that I can show off my react native skills in my resume. The data source is woo-commerce by WordPress which is connected to the application my mean of graph-QL. It supports authentication utilizing JWT, Browses by filter, order creation, product listing, category listing, cart, and has over 100 stars on Github.",
        },
        {
          title: "Accounting Software",
          description:
            "At the start of my career I was tasked to create an accounting system over PHP, and I later made it open-source, and migrate it from a core-PHP to Laravel. The System contains mostly all kinds of features like accounts, ledgers, purchase orders, vouchers, and invoices. The database that is being used is MySQL and is completely open-source for anyone to use.",
        },
        {
          title: "Easy Woo Cart",
          description:
            "A Simple plugin that lets you add products to your woo-commerce cart directly from the URL. It replicates the working flow of Shopify and it can be used in storefronts",
        },
        {
          title: "Electron-Based Browser ",
          description:
            "Open-source project created with Electron + React, a browser with all the basic browser navigation and tabs like controls",
        },
        {
          title: "Real-time Location tracking",
          description:
            "Another open-source flutter and java based project that is integrated with firebase to track-realtime location tracking. Initially, it was first created on java, it contains 2 apps, one is for the client and the other one is for the vendor that needed to be tracked, backed it used firebase to communicated and update real-time location in DB.",
        },
      ],
    },
    info: {
      title: "INFO",
      name: "Raja Osama",
      age: " ,23, ♂",
      list: [
        ["Email -", "contact@rajaosama.com"],
        ["LinkedIn - ", "@rajaosama"],
        ["Github - ", "@raja0sama"],
        ["Medium - ", "@supersami"],
      ],
    },
    education: {
      title: "EDUCTION",
      list: [
        {
          company: "Middlesex University, @Dubai",
          course: "Bachelor of Science - BS, Information Technology",
          range: "2021 : Present - ",
        },
        {
          company: "APTECH Pakistan, @Karachi",
          course:
            "Advance Diploma In Software Engineering, Computer Software Engineering",
          range: "2017 : 2020 - ",
        },
        {
          company: "CMS Collage, @Karachi",
          course: "Higher Secondary - Pre-Engineering",
          range: "2017 : 2019 - ",
        },
      ],
    },
    experience: {
      title: "EXPERIENCE",
      list: [
        {
          range: "2020 : Present -",
          company: "ATOMPOINT, @Karachi",
          title: " Full-Stack SSE, Innovation Lab",
          description: ` - Architected infrastructure, backend, and frontend of an uber-like
            water delivery mobile app, based on GCP, NodeJS, and React Native
            that helped development streamlined and performant <br />- Created a
            Cross-platform Desktop Application that was based on chromium. A
            web-browser for a very specific purpose like automation, proxy, An
            Application was very much like Ockta for the client. <br />- Saved
            an enterprise by regaining control of the website by cloning the
            website in such a way that all the outside communication was
            forwarded. <br />- Collaborated on all stages of the software
            development lifecycle, from requirement gathering to production
            releases. <br />- Developed Webinar Platform, a jitsi based
            application integrated with Firebase and its serverless
            architecture.
            <br />- Conducted research, gathered information from multiple
            sources, and presented results.`,
        },
        {
          range: "2017 : 2020 - ",
          company: "Dominion Stores & DFM @Karachi",
          title: "Full-Stack SSE @DFM",
          description: ` - Earn Multiple Project Of the month on languages such as C#, Java,
            and Android Based Projects. <br />- Learned multiple languages such
            as C#, Java, Javascript, and PHP. <br />- Participated in an Android
            App Development Squad Competition as solo and won it. <br />- Was
            selected and employed within the very first year of my Software
            Engineering diploma by guest recruiter invited @Aptech.`,
        },
      ],
    },
    bio: {
      title: "BIO",
      description: `
      Hey, I'm Raja Osama, A Rockstar programmer, Currently living in
          Karachi~Pakistan. If you are looking for a developer, I am currently
          exploring job opportunities, feel free to contact me.
          <br/><br/>I love programming, and i have been doing it since i was 12 years old,
          i have plenty websites that are dated back to 2012, when i used to use
          blogger platform and share gaming contents. I am passionate about
          programing and in the past 5 years, i have worked with alot of
          projects, frameworks, and languages. In my spare time i usually
          program, explore new frameworks and write technical blogs and my
          experiences with technologies and guides.
      `,
    },
    skills: {
      title: "SKILLS",
      list: [
        "Angular Js",
        "React JS",
        "React Native",
        "Node Js",
        "GCP",
        "Electron",
        "Java",
        "Python",
        "Javascript",
        "Vue Js",
        "Firebase",
        "MongoDB",
        "SQL",
        "Docker",
        "C#",
      ],
    },
    title: "Javascript Full-Stack SSE @Atompoint",
  },
  layout: {
    right: [
      {
        url: "/resume",
        label: "Resume",
        link: true,
      },
      {
        url: "mailto:contact@rajaosama.me",
        label: "Email",
        link: false,
      },
      {
        url: "https://medium.com/@supersami",
        label: "Blogs",
      },
      {
        url: "https://github.com/raja0sama",
        label: "GitHub",
      },
      {
        url: "https://www.linkedin.com/in/rajaosama/",
        label: "LinkedIn",
      },
    ],
    left: [
      {
        url: "/about-me",
        label: "About",
      },
      {
        url: "/contact-me",
        label: "Contact",
      },
      {
        url: "/projects",
        label: "Projects",
      },
      {
        url: "/",
        label: "Home",
      },
    ],
  },
  contact: {
    helmet: {
      title: "Raja Osama - Contact Me",
    },
    title: "GET IN TOUCH 🏃",
    description:
      "I am currently living in dubai and exploring opportunities around me and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    btn: {
      label: "Say Hi 👋",
      url: "",
    },
    ending: "Or contact@rajaosama.me",
  },
  About: {
    helmet: {
      title: "Raja Osama - About Me",
    },
    title: "BIO",
    social: {
      label: "🏃 Follow me on ",
      links: [
        { label: "Twitter", url: "https://twitter.com/devrajaosama" },
        { label: "Linkedin", url: "https://www.linkedin.com/in/rajaosama/" },
        { label: "GitHub", url: "https://github.com/Raja0sama" },
        { label: "Medium", url: "https://supersami.medium.com/" },
      ],
    },
    description: [
      ` a multi-talented Human being, a self-proclaimed Best Developer in
              the world, A Javascript enthusiast, A Rockstar programmer,
              Currently living in Karachi~Pakistan. I have worked my ass off for
              the past 5 years in the tech world, mostly for startups and as a
              freelancer, created tons of landing pages, websites, mobile
              applications along the way, as well as dropped my bachelor's
              degree, failed my startup, and created huge, unrealistic
              expectations of self.`,
      ` The Abundant energy I have fuels me in the pursuit of various
              interests, hobbies, areas of studies, and artistic endeavors. I am
              a fast learner who adapts quickly to change and eager to learn new
              methods and procedures, whether it is a cultural change or a
              work-related one`,
      `I am an adventurer, I want to travel the world, I am fascinated by
              the beauty of the Earth. The goal is to travel and to get me into
              a recursive infinite loop of traveling, living the moment and
              working in a location for a certain period and then move to the
              next one. Not just the world I am fascinated by SPACE, everything
              about space and distant planets and the countless stars fascinate
              me in a way that I can’t put into words.`,
      `   As a Programmer, I would like to call myself a Tech Agnostic
              Polyglot Programmer, One who can adapt and learn and change
              according to the surrounding.`,
      `  I'm usually focused on : <br /> 🎛️ Designing great User interfaces
              experience <br />
              🌐 Developing full-stack websites that scales <br />✨ Developing
              backend and structuring databases. <br />
              🧰 Building Libraries and writing Technical blogs. In my work, I
              value, <br />
              ⏱️ Efficiency 🎯 Consistency <br />
              ♻️ Reusability <br />
              ⚙️ Systems <br />
              📋 Standards <br />
              🤖Automation <br />
              💠 Modular Design <br />
              👍 Emoji Lists`,
    ],
  },
  home: {
    helmet: {
      title: "Raja Osama - Welcome to Raja Osama's Dev-folio",
    },
    title: ["Raja", "Osama"],
    subTitle: "Senior Software Engineer",
    description: `I Describe my self as a Polyglot ~ Tech Agnostic ~ Rockstar
                    Software Engineer. I Specialize in Javascript based Tech
                    stacks to create fascinating applications.`,
  },
  projects: [
    {
      technology: ["React Native", "GraphQL", "Apollo", "WordPress"],
      slug: "projects/wooshop",
      title: "WooShop",
      description:
        "WooShop is created with React-native with Wordpress and Woo-commerce. It is fully functional shop Application with checkout cart and login.",
      image: "https://i.imgur.com/Zlt8V9y.png",
      link: [
        {
          text: "Github",
          url: "https://github.com/Raja0sama/WooShop",
        },
        {
          text: "Read More on Medium",
          url: "https://supersami.medium.com/wooshop-wordpress-wocommerce-based-app-built-with-react-native-graphql-ios-and-android-84ac03f0db02",
        },
      ],
    },
    {
      technology: ["React Native", "Java"],
      slug: "projects/rn-foreground-service-react-native-library",
      title: "RN-Foreground-Service React-native Library",
      description:
        "React Native Foreground Service, Foreground service is a kind of service in Android that has a notification that can not be removed until the foreground service is closed, and because of this, you can run a background task with the help of headless JS.",
      image: "https://miro.medium.com/max/1728/1*5ktY8XkS5a5iM6LsLOP7jw.png",
      link: [
        {
          text: "Github",
          url: "https://github.com/Raja0sama/rn-foreground-service",
        },
        {
          text: "Read More on Medium",
          url: "https://medium.com/javascript-in-plain-english/react-native-foreground-service-f7fc8e617fba",
        },
      ],
    },
    {
      technology: ["WordPress", "WooCommerce"],
      slug: "projects/easy-woo-card-wordpress-plugin",
      title: "easy-woo-cart Wordpress Plugin",
      description:
        "The plugin is created to add products from woocommerce into your cart just by link in your current browser sessions. It replicates the working flow of shopify and it can be use in store fronts.",
      image: "https://i.imgur.com/trSxV8k.png",
      link: [
        {
          url: "https://github.com/Raja0sama/easy-woo-cart",
          text: "Github",
        },
        {
          url: "https://supersami.medium.com/lately-i-have-been-working-with-ecommerce-mobile-applications-where-we-treat-shopify-and-25fc6268c34a",
          text: "Read More on Medium",
        },
      ],
    },
    {
      technology: ["Laravel", "mySQL", "PHP"],
      slug: "projects/php-accounting-system",

      title: "Accounting-System",
      description:
        "An Accounting System designed with PHP and laravel, created with all the basic accounting concepts in the mind like Payment Vouchers, Receipts, Invoices, Adjustments, Ledgers and Accounts.",
      image: "https://i.imgur.com/zHeRJuN.png",
      link: [
        {
          url: "https://github.com/Raja0sama/Accounting-System",
          text: "Github",
        },
      ],
    },
    {
      technology: ["Electron", "React"],
      slug: "projects/super-simple-browser",

      title: "Super Simple browser",
      description:
        "Super Simple Browser is a electron and react based website browser with basic browsing functionality like tabs and navigation.A Gift for the open-source community.",
      image: "https://i.imgur.com/tEGPsIT.png",
      link: [
        {
          url: "https://github.com/Raja0sama/Super-Simple-Browser",
          text: "Github",
        },
      ],
    },
  ],
};
export default portfolio;
