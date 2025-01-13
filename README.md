<div align="center">
  <br />
    <a href="https://youtu.be/EZajJGOMWas" target="_blank">
      <img src="https://github.com/user-attachments/assets/7cff0964-6c02-4af5-aa0c-964b349cc9aa" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/-Upstash-black?style=for-the-badge&logoColor=white&logo=upstash&color=00E9A3" alt="Upstash" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="TailwindCSS" />
  </div>

  <h3 align="center">A University Library Management System</h3>

  <div align="center">
     In this project, I am coding along with Adrian Hajdin from JavaScript Mastery (YouTube) to build an University Library Management System. 
  </div>
</div>
<div align="center">
    <br><br>
    <a href="https://www.youtube.com/watch?v=EZajJGOMWas&t=501s&ab_channel=JavaScriptMastery" target="_blank">Project Video</a>
    <br>
    <a href="https://github.com/adrianhajdin" target="_blank">Adrian Hajdin GitHub</a>
</div>


## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🤝 [Acknowledgments](#acknowledgments)
8. 📄 [License](#license)
9. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on JavaScript Mastery's YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow Adrian's tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/EZajJGOMWas" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Built with Next.js, TypeScript and Postgres, the University Library Management System is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows and a modern, optimized tech stack for real-world scalability.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **50k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- PostgreSQL
- Upstash
- ImageKit
- TypeScript
- Resend
- Tailwind CSS

## <a name="features">🔋 Features</a>

### Features of the University Library Management System Project

👉 **Open-source Authentication**: Personalized onboarding flow with email notifications.  

👉 **Home Page**: Highlighted books and newly added books with 3D effects.  

👉 **Library Page**: Advanced filtering, search, and pagination for book discovery.  

👉 **Book Detail Pages**: Availability tracking, book summaries, videos, and suggestions for similar books.  

👉 **Profile Page**: Manage accounts, track borrowed books, and download receipts.  

👉 **Onboarding Workflows**: Automated welcome emails when users sign up, with follow-ups based on inactivity or activity dates.  

👉 **Borrow Book Reminder**: Customized email notifications sent before, on, and after the due date, reminding users to return books or avoid charges. 

👉 **Borrow Book Receipt**: Automatically generates a customized PDF receipt when a book is successfully borrowed.  

👉 **Analytics Dashboard**: Statistics, new users, books, borrow requests, and more.  

👉 **All Users Page**: View and manage users, including approving or revoking access.  

👉 **Account Requests Page**: Admin approval for account requests, with email notifications for user verification.  

👉 **All Books Page**: List and manage all library books with advanced search, pagination, and filters. 

👉 **Book Management Forms**: Add new books and edit existing entries.  

👉 **Book Details Page**: Detailed book information for administrators.  

👉 **Borrow Records Page**: Complete borrow history with pagination and search.  

👉 **Role Management**: Change user roles to invite more admins, with email notifications sent upon role updates. 

👉 **Advanced Functionalities**: Caching, rate-limiting, DDoS protection, and custom notifications.  

👉 **Database Management**: Postgres with Neon for scalable and collaborative database handling.  

👉 **Real-time Media Processing**: ImageKit for image and video optimization and transformations. 

👉 **Efficient Caching**: Upstash Redis for caching, workflows, and triggers.  

👉 **Database ORM**: Drizzle ORM for simplified and efficient database interactions.  

👉 **Modern UI/UX**: Built with TailwindCSS, ShadCN, and other cutting-edge tools.  

👉 **Technology Stack**: Next.js with TypeScript for scalable development, and NextAuth for robust authentication.  

👉 **Seamless Email Handling**: Resend for automated email communications, including notifications and updates.  

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/rr3s1/BookWise-Uni-Library
cd bookwise-uni-library
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=

NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PROD_API_ENDPOINT=

DATABASE_URL=

UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

AUTH_SECRET=

# Required for workflow
QSTASH_URL=
QSTASH_TOKEN=

# RESEND_TOKEN=
RESEND_TOKEN=
```

Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. You can obtain these credentials by signing up on the [ImageKit](https://bit.ly/49zmXkt), [NeonDB](https://fyi.neon.tech/1jsm), [Upstash](https://upstash.com/?utm_source=jsmastery1), and [Resend](https://resend.com/). 

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "bebas-neue": ["var(--bebas-neue)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        primary: {
          DEFAULT: "#E7C9A5",
          admin: "#25388C",
        },
        green: {
          DEFAULT: "#027A48",
          100: "#ECFDF3",
          400: "#4C7B62",
          500: "#2CC171",
          800: "#027A48",
        },
        red: {
          DEFAULT: "#EF3A4B",
          400: "#F46F70",
          500: "#E27233",
          800: "#EF3A4B",
        },
        blue: {
          100: "#0089F1",
        },
        light: {
          100: "#D6E0FF",
          200: "#EED1AC",
          300: "#F8F8FF",
          400: "#EDF1F1",
          500: "#8D8D8D",
          600: "#F9FAFB",
          700: "#E2E8F0",
          800: "#F8FAFC",
        },
        dark: {
          100: "#16191E",
          200: "#3A354E",
          300: "#232839",
          400: "#1E293B",
          500: "#0F172A",
          600: "#333C5C",
          700: "#464F6F",
          800: "#1E2230",
        },
        gray: {
          100: "#CBD5E1",
        },
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        pattern: "url('/images/pattern.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

</details>

<details>
<summary><code>app/globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --radius: 0.5rem;
  }

  .hide-scrollbar::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    border-radius: 0px;
  }

  .hide-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .hide-scrollbar::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0px;
  }

  .hide-scrollbar::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
}

@layer components {
  .form-btn {
    @apply bg-primary text-dark-100 hover:bg-primary inline-flex min-h-14 w-full items-center justify-center rounded-md px-6 py-2 font-bold text-base !important;
  }

  .form-input {
    @apply w-full min-h-14 border-none text-base font-bold placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none bg-dark-300 !important;
  }

  /* Book Card */
  .book-title {
    @apply mt-2 line-clamp-1 text-base font-semibold text-white xs:text-xl;
  }

  .book-genre {
    @apply mt-1 line-clamp-1 text-sm italic text-light-100 xs:text-base;
  }

  .book-loaned {
    @apply flex flex-row items-center gap-1 max-xs:justify-center;
  }

  .book-btn {
    @apply bg-dark-600 mt-3 min-h-14 w-full font-bebas-neue text-base text-primary;
  }

  /* Borrowed Book */
  .borrowed-book {
    @apply gradient-vertical p-5 rounded-2xl xs:w-min w-full relative;
  }

  .borrowed-book_cover {
    @apply py-4 lg:px-16 px-10 flex justify-center items-center w-full rounded-lg;
  }

  /* Book Cover */
  .book-cover_extra_small {
    @apply w-[28.95px] h-10;
  }

  .book-cover_small {
    @apply w-[55px] h-[76px];
  }

  .book-cover_medium {
    @apply w-[144px] h-[199px];
  }

  .book-cover_regular {
    @apply xs:w-[174px] w-[114px] xs:h-[239px] h-[169px];
  }

  .book-cover_wide {
    @apply xs:w-[296px] w-[256px] xs:h-[404px] h-[354px];
  }

  /* Book List */
  .book-list {
    @apply mt-10 flex flex-wrap gap-5 max-xs:justify-between xs:gap-10;
  }

  /* Book Overview */
  .book-overview {
    @apply flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8;
  }

  .book-overview h1 {
    @apply text-5xl font-semibold text-white md:text-7xl;
  }

  .book-info {
    @apply mt-7 flex flex-row flex-wrap gap-4 text-xl text-light-100;
  }

  .book-copies {
    @apply flex flex-row flex-wrap gap-4 mt-1;
  }

  .book-copies p {
    @apply text-xl text-light-100;
  }

  .book-copies p span {
    @apply ml-2 font-semibold text-primary;
  }

  .book-description {
    @apply mt-2 text-justify text-xl text-light-100;
  }

  .book-overview_btn {
    @apply mt-4 min-h-14 w-fit bg-primary text-dark-100 hover:bg-primary/90 max-md:w-full !important;
  }

  /* File Upload */
  .upload-btn {
    @apply flex min-h-14 w-full items-center justify-center gap-1.5 rounded-md;
  }

  .upload-filename {
    @apply mt-1 text-center text-xs;
  }

  .progress {
    @apply rounded-full bg-green-800 p-0.5 text-center font-bebas-neue text-[8px] font-bold leading-none text-light-100;
  }

  /* Search */
  .search {
    @apply relative mt-10 flex min-h-14 w-full items-center rounded-xl bg-dark-300 px-4;
  }

  .search-input {
    @apply w-full border-none font-bold placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none !important;
  }

  /* Book Receipt */
  .book-receipt_admin-btn {
    @apply bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 !important;
  }

  /* Book Ticket */
  #book-ticket {
    @apply relative mt-10 hidden w-[544px] overflow-hidden bg-dark-300 py-8;
  }

  #book-ticket #book-details div {
    @apply space-y-1 rounded-md border border-light-100/10 p-3;
  }

  #book-ticket #book-details div p:first-child {
    @apply text-xs text-light-700;
  }

  #book-ticket #book-details div p:last-child {
    @apply text-sm font-bold text-white;
  }

  #book-ticket #book-divider div:first-child {
    @apply absolute -left-3.5 top-1/2 size-7 -translate-y-1/2 rounded-full bg-black;
  }

  #book-ticket #book-divider div:last-child {
    @apply absolute -right-3.5 top-1/2 size-7 -translate-y-1/2 rounded-full bg-black;
  }

  .book-ticket-circles {
    @apply absolute inset-x-0 -bottom-6 flex flex-row gap-1.5;
  }

  /* Not Found */
  #not-found {
    @apply flex justify-center items-center flex-col text-center w-full;
  }

  #not-found h4 {
    @apply text-white mt-6 font-semibold text-2xl;
  }

  #not-found p {
    @apply text-light-100 w-[360px] mt-1;
  }

  .not-found-btn {
    @apply bg-primary font-bebas-neue min-w-[360px] mt-6 text-dark-100 text-xl hover:bg-primary/90 min-h-12 !important;
  }

  /* Pagination */
  #pagination {
    @apply flex flex-row justify-end gap-3;
  }

  .pagination-btn_light {
    @apply bg-light-300 text-dark-300 hover:bg-light-300/70 !important;
  }

  .pagination-btn_dark {
    @apply bg-dark-300 hover:bg-dark-100 !important;
  }

  #pagination p {
    @apply text-sm inline-flex items-center font-semibold px-4 py-1.5 rounded-md text-center;
  }

  /* Sort */
  .select-trigger {
    @apply w-40 h-10 px-4 bg-dark-300 text-light-100 border-dark-100 !important;
  }

  .select-content {
    @apply bg-dark-300 text-light-100 border-dark-100 !important;
  }

  .select-item {
    @apply focus:bg-dark-600 focus:text-light-100 !important;
  }
}

@layer utilities {
  .gradient-vertical {
    background: linear-gradient(180deg, #12141d 0%, #12151f 100%);
  }

  .gradient-gray {
    background: linear-gradient(270deg, #37363a 0%, #353637 100%);
  }

  .gradient-blue {
    background: linear-gradient(180deg, #232839 0%, #12141d 100%);
  }

  /* Auth */
  .auth-container {
    @apply relative flex flex-col-reverse text-light-100 sm:flex-row;
  }

  .auth-form {
    @apply my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-dark-100 px-5 py-10;
  }

  .auth-box {
    @apply gradient-vertical mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10;
  }

  .auth-illustration {
    @apply sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1;
  }

  /* Root */
  .root-container {
    @apply flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top bg-dark-100 px-5 xs:px-10 md:px-16;
  }

  /* Book Details */
  .book-details {
    @apply lg:mt-36 mt-16 mb-20 flex flex-col gap-16 lg:flex-row;
  }

  .book-details h3 {
    @apply text-xl font-semibold text-primary;
  }

  /* Library */
  .library {
    @apply mx-auto flex max-w-xl w-full flex-col text-center;
  }

  .library-subtitle {
    @apply text-lg font-semibold uppercase text-light-100;
  }

  .library-title {
    @apply mt-2 text-3xl font-semibold text-white xs:text-5xl;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
```

</details>

<details>
<summary><code>constants/index.ts</code></summary>

```typescript
export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/borrow-records",
    text: "Borrow Records",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullname: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullname: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy / Fiction",
    rating: 4.6,
    totalCopies: 20,
    availableCopies: 10,
    description:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
    coverColor: "#1c1f40",
    coverUrl: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help / Productivity",
    rating: 4.9,
    totalCopies: 99,
    availableCopies: 50,
    description:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    coverColor: "#fffdf6",
    coverUrl: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
  },
  {
    id: 3,
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    genre: "Computer Science / JavaScript",
    rating: 4.7,
    totalCopies: 9,
    availableCopies: 5,
    description:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    coverColor: "#f8e036",
    coverUrl:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophy / Adventure",
    rating: 4.5,
    totalCopies: 78,
    availableCopies: 50,
    description:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    coverColor: "#ed6322",
    coverUrl:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Help / Productivity",
    rating: 4.7,
    totalCopies: 23,
    availableCopies: 23,
    description:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    coverColor: "#ffffff",
    coverUrl: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Computer Science / Programming",
    rating: 4.8,
    totalCopies: 56,
    availableCopies: 56,
    description:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    coverColor: "#080c0d",
    coverUrl:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
  },
  {
    id: 7,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    genre: "Computer Science / Programming",
    rating: 4.8,
    totalCopies: 25,
    availableCopies: 3,
    description:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    coverColor: "#100f15",
    coverUrl:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance / Self-Help",
    rating: 4.8,
    totalCopies: 10,
    availableCopies: 5,
    description:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
    coverColor: "#ffffff",
    coverUrl:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
  },
];

export const sorts = [
  {
    value: "oldest",
    label: "Oldest",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "available",
    label: "Available",
  },
  {
    value: "highestRated",
    label: "Highest Rated",
  },
];

export const userRoles = [
  {
    value: "user",
    label: "User",
    bgColor: "bg-[#FDF2FA]",
    textColor: "text-[#C11574]",
  },
  {
    value: "admin",
    label: "Admin",
    bgColor: "bg-[#ECFDF3]",
    textColor: "text-[#027A48]",
  },
];

export const borrowStatuses = [
  {
    value: "overdue",
    label: "Overdue",
    bgColor: "bg-[#FFF1F3]",
    textColor: "text-[#C01048]",
  },
  {
    value: "borrowed",
    label: "Borrowed",
    bgColor: "bg-[#F9F5FF]",
    textColor: "text-[#6941C6]",
  },
  {
    value: "returned",
    label: "Returned",
    bgColor: "bg-[#F0F9FF]",
    textColor: "text-[#026AA2]",
  },
];
```

</details>

<details>
<summary><code>components/BookCoverSvg.tsx</code></summary>

```typescript
const BookCoverSvg = ({ coverColor }: { coverColor: string }) => {
  return (
    <svg
      preserveAspectRatio="none"
      fill="none"
      width="100%"
      height="100%"
      viewBox="0 0 143 199"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0"
    >
      <path
        d="M141.851 196.481H140.652V174.61C141.39 173.885 141.851 172.876 141.851 171.763V4.26316C141.851 2.07107 140.068 0.277516 137.889 0.277516H16.7824C16.7824 0.277516 3.06348 -0.381156 0 11.5424V183.921C0 199.797 9.59001 198.993 9.59001 198.993H141.851C142.497 198.886 142.991 198.655 143 197.938C143.018 196.582 141.851 196.481 141.851 196.481Z"
        fill="#CAD7DB"
      />
      <path
        d="M141.851 196.481H140.652V194.036H4.79924C2.20563 190.492 2.50324 184.366 2.50324 184.366C2.76966 174.251 16.7824 175.749 16.7824 175.749H137.888C138.961 175.749 139.937 175.313 140.652 174.61C141.39 173.885 141.851 172.876 141.851 171.763V4.26316C141.851 2.07107 140.068 0.277516 137.888 0.277516H16.7824C16.7824 0.277516 3.06348 -0.381156 0 11.5424V183.921C0 199.797 9.59001 198.993 9.59001 198.993H141.851C142.497 198.886 142.991 198.655 143 197.938C143.018 196.582 141.851 196.481 141.851 196.481Z"
        fill={coverColor}
      />
      <path
        d="M16.7824 173.873V0.277516C16.7824 0.277516 3.06348 -0.381156 0 11.5424V183.921C0 183.921 1.70019e-06 173.27 16.7824 173.873Z"
        fill={coverColor}
      />
      <path
        d="M118.676 34.8091H33.5649V72.9915H118.676V34.8091Z"
        fill={coverColor}
      />
      <path
        d="M6.3468 19.8239C8.70341 18.7114 11.202 18.121 13.1615 17.8225C15.1211 17.5225 16.5391 17.5098 16.7401 17.51H16.7607H16.761L16.7689 17.5102H16.7823V14.0939L16.7402 14.0938C16.1538 14.0991 11.6323 14.136 6.74782 15.955C4.44814 16.8161 2.05989 18.0912 0 19.9928V25.3396C0.569709 24.3755 1.24048 23.5291 1.99482 22.7842C3.26784 21.5331 4.77417 20.5647 6.3468 19.8239Z"
        fill="white"
      />
      <path
        d="M7.17491 29.1211C9.53787 27.7332 11.9814 26.9986 13.8218 26.6228C14.7415 26.4345 15.5093 26.3349 16.0373 26.283C16.3014 26.257 16.5054 26.243 16.6387 26.2354C16.7046 26.2317 16.7524 26.2298 16.7823 26.2286V22.8115H16.7666L16.7495 22.8119C16.6123 22.8205 12.2181 22.8977 7.31586 25.1949C4.86821 26.3461 2.28842 28.0692 0.124461 30.6432C0.0818969 30.6937 0.0422296 30.75 0 30.8013V37.431C0.727262 35.6175 1.6601 34.1105 2.71796 32.849C4.05638 31.2571 5.59793 30.0464 7.17491 29.1211Z"
        fill="white"
      />
      <path
        d="M6.34702 153.638C8.70375 152.525 11.2022 151.935 13.1617 151.636C15.1213 151.336 16.5393 151.324 16.7403 151.324H16.7587H16.7588L16.7667 151.324H16.7823V147.908L16.7402 147.908C16.1538 147.913 11.6324 147.95 6.74782 149.769C4.44826 150.63 2.06 151.905 0 153.807V159.154C0.569709 158.189 1.2407 157.343 1.99504 156.598C3.26806 155.347 4.77439 154.379 6.34702 153.638Z"
        fill="white"
      />
      <path
        d="M7.17491 162.935C9.53787 161.547 11.9814 160.813 13.8218 160.437C14.7415 160.249 15.5093 160.149 16.0373 160.097C16.3014 160.071 16.5054 160.057 16.6387 160.05C16.7046 160.046 16.7524 160.044 16.7823 160.043V156.625H16.7666L16.7495 156.626C16.6123 156.634 12.2181 156.712 7.31586 159.009C4.86821 160.16 2.28842 161.883 0.124461 164.457C0.0818969 164.508 0.0422296 164.564 0 164.615V171.245C0.727262 169.432 1.6601 167.925 2.71796 166.663C4.05638 165.071 5.59793 163.86 7.17491 162.935Z"
        fill="white"
      />
      <path
        d="M141.851 196.481H9.19034C7.1895 196.361 5.78601 195.384 4.79924 194.036C2.20563 190.492 2.50324 184.366 2.50324 184.366C2.76966 174.251 16.7824 175.749 16.7824 175.749H137.888C138.961 175.749 139.937 175.312 140.652 174.61C141.39 173.885 141.851 172.876 141.851 171.763V169.887C141.851 172.079 140.068 173.873 137.888 173.873H16.7824C1.70019e-06 173.27 0 183.921 0 183.921C0 199.797 9.59001 198.993 9.59001 198.993H141.851C142.497 198.885 142.991 198.654 143 197.938C143.018 196.581 141.851 196.481 141.851 196.481Z"
        fill="#03030B"
      />
      <path
        d="M13.9253 184.443C23.7659 181.368 34.4608 180.461 44.7071 180.008C55.8062 179.517 66.919 179.88 78.0178 180.19C89.0344 180.499 99.9894 180.437 111.004 180.14C116.509 179.992 122.108 179.803 127.587 180.459C131.917 180.977 136.279 181.915 140.652 181.968V174.61C139.937 175.313 138.961 175.749 137.888 175.749H16.7822C16.7822 175.749 2.76943 174.252 2.50302 184.367C2.50302 184.367 2.38736 186.75 2.92955 189.403C6.35961 187.354 10.0113 185.666 13.9253 184.443Z"
        fill="#AAB8BC"
      />
    </svg>
  );
};

export default BookCoverSvg;
```

</details>

<details>
<summary><code>database/seed.ts</code></summary>

```typescript
import { config } from "dotenv";
import ImageKit from "imagekit";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import { books } from "./schema";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

const dummyBooks = [
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell and Peter Norvig",
    genre: "Artificial Intelligence",
    rating: 4,
    coverUrl:
      "https://m.media-amazon.com/images/I/61nHC3YWZlL._AC_UF1000,1000_QL80_.jpg",
    coverColor: "#c7cdd9",
    description:
      "A leading textbook on artificial intelligence, offering a deep dive into algorithms, machine learning, and robotics, suitable for both beginners and professionals.",
    totalCopies: 10,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
    summary:
      "Artificial Intelligence: A Modern Approach is a comprehensive guide to the field of AI, combining foundational concepts with cutting-edge research. The book covers topics like search algorithms, knowledge representation, machine learning, and robotics. \n\nIts clear explanations and practical examples make it a valuable resource for students, researchers, and industry professionals. By bridging theory and application, this book serves as a cornerstone for understanding and advancing AI technologies. \n\nThe book is suitable for both beginners and professionals, offering a deep understanding of the fundamental concepts and applications of AI.",
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    author: "James F. Kurose and Keith W. Ross",
    genre: "Networking",
    rating: 5,
    coverUrl:
      "https://m.media-amazon.com/images/I/91hg1HHyiWL._AC_UF1000,1000_QL80_.jpg",
    coverColor: "#f7a13e",
    description:
      "A comprehensive introduction to computer networking, using a top-down approach to explain protocols, architecture, and applications.",
    totalCopies: 25,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/1107129903/preview/stock-footage-an-open-book-is-on-fire-big-bright-flame-burning-paper-on-old-publication-in-the-dark-book.webm",
    summary:
      "'Computer Networking: A Top-Down Approach' provides a thorough and accessible introduction to the world of computer networks. James Kurose and Keith Ross present networking concepts by starting with high-level applications like web browsers and email, gradually moving down to the underlying layers of networking protocols. \n\nThe book covers essential topics such as HTTP, DNS, TCP/IP, and network security. Each chapter includes practical examples, hands-on exercises, and real-world scenarios to help readers grasp complex concepts. The authors also explore emerging trends like cloud computing and the Internet of Things, ensuring that the material remains relevant in a rapidly evolving field. \n\nWhether you're a student, professional, or enthusiast, this book offers a clear and engaging path to understanding the architecture and operation of modern computer networks.",
  },
];

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

async function uploadToImageKit(url: string, fileName: string, folder: string) {
  try {
    const response = await imagekit.upload({
      file: url,
      fileName: fileName,
      folder,
    });
    return response.filePath;
  } catch (error) {
    console.error(`Error uploading ${fileName} to ImageKit:`, error);
    throw error;
  }
}

async function seed() {
  console.log("Seeding books...");

  try {
    for (const book of dummyBooks) {
      const coverUrl = await uploadToImageKit(
        book.coverUrl,
        `${book.title}.jpg`,
        "/books/covers"
      );

      const videoUrl = await uploadToImageKit(
        book.videoUrl,
        `${book.title}.mp4`,
        "/books/videos"
      );

      await db.insert(books).values({
        ...book,
        coverUrl,
        videoUrl,
      });

      console.log(`Added book: ${book.title}`);
    }

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding books:", error);
  }
}

seed();
```

</details>

<details>
<summary><code>styles/admin.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .admin-container {
    @apply flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10;
  }

  .back-btn {
    @apply mb-10 w-fit border border-light-300 bg-white text-xs font-medium text-dark-200 hover:bg-light-300 !important;
  }

  /* Confirmation Dialog */
  .confirm-trigger {
    @apply font-semibold text-sm shadow-none hover:bg-opacity-70 w-full !important;
  }

  .confirm-approve {
    @apply bg-green-100 text-green-800 hover:bg-green-100/70 !important;
  }

  .confirm-reject {
    @apply bg-red-100 text-red-800 hover:bg-red-100/70 !important;
  }

  .confirm-content {
    @apply sm:max-w-md flex flex-col items-center justify-center p-6 !important;
  }

  .confirm-illustration {
    @apply size-28 rounded-full flex justify-center items-center mx-auto;
  }

  .confirm-illustration div:first-child {
    @apply size-[70%] rounded-full flex justify-center items-center;
  }

  .confirm-btn {
    @apply w-full min-h-14 rounded-xl font-bold text-base text-light-800 !important;
  }

  /* Book Form */
  .book-form_input {
    @apply min-h-14 border border-gray-100 bg-light-600 p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 !important;
  }

  .book-form_btn {
    @apply min-h-14 w-full bg-primary-admin hover:bg-primary-admin/95 !important;
  }

  /* Home Page */
  .view-btn {
    @apply bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 shadow-none !important;
  }

  .add-new-book_btn {
    @apply mt-7 mb-3 bg-light-300 py-4 px-3 flex flex-row items-center rounded-xl gap-4;
  }

  .add-new-book_btn div:first-child {
    @apply size-12 bg-white rounded-full flex justify-center items-center;
  }

  .add-new-book_btn p:first-child {
    @apply font-semibold text-lg text-dark-400;
  }

  /* Statistics */
  .stat {
    @apply bg-white rounded-xl p-5 space-y-5 flex-1;
  }

  .stat-info {
    @apply flex justify-between items-center gap-5;
  }

  .stat-label {
    @apply font-medium text-base text-light-500 whitespace-nowrap;
  }

  .stat-count {
    @apply font-semibold text-3xl text-dark-400;
  }

  /* Book Stripe */
  .book-stripe {
    @apply flex flex-row gap-4 bg-light-300 p-4 rounded-lg;
  }

  .book-stripe .title {
    @apply font-semibold text-base text-dark-400 line-clamp-1;
  }

  .book-stripe .author {
    @apply flex flex-wrap flex-row items-center gap-2;
  }

  .book-stripe .author p:first-child {
    @apply text-light-500 text-sm line-clamp-1;
  }

  .book-stripe .author div {
    @apply size-1 rounded-full bg-light-500;
  }

  .book-stripe .author p:last-child {
    @apply text-light-500 text-sm;
  }

  .book-stripe .user {
    @apply mt-2.5 flex flex-row flex-wrap gap-5;
  }

  .book-stripe .user .avatar {
    @apply flex flex-row items-center gap-1.5;
  }

  .book-stripe .user .avatar p {
    @apply text-xs text-dark-200;
  }

  .book-stripe .borrow-date {
    @apply flex flex-row items-center gap-1.5;
  }

  .book-stripe .borrow-date p {
    @apply text-xs text-dark-200;
  }

  /* Color Picker */
  .color-picker {
    @apply flex min-h-14 flex-row items-center gap-3 rounded-md border border-gray-100 bg-light-600 p-4 text-base font-semibold text-dark-400;
  }

  .hex-input {
    @apply h-full flex-1 bg-transparent font-ibm-plex-sans outline-none;
  }

  .hex-color-picker {
    @apply absolute left-0 top-full z-50 mt-3;
  }

  /* Error Fallback */
  .error-fallback {
    @apply p-4 bg-red-100 text-red-700 rounded-md;
  }

  .error-fallback h2 {
    @apply text-lg font-semibold mb-2;
  }

  /* Header */
  .admin-header {
    @apply flex lg:items-end items-start justify-between lg:flex-row flex-col gap-5 sm:mb-10 mb-5;
  }

  /* Search */
  .admin-search {
    @apply flex border border-gray-100 min-h-14 items-center gap-1 rounded-md bg-light-600 px-4 lg:max-w-md w-full;
  }

  .admin-search_input {
    @apply w-full border-0 shadow-none bg-transparent outline-none focus:outline-none focus:ring-0 focus:border-0 !important;
  }

  /* Sidebar */
  .admin-sidebar {
    @apply sticky left-0 top-0 flex h-dvh flex-col justify-between bg-white px-5 pb-5 pt-10;
  }

  .admin-sidebar .logo {
    @apply flex flex-row items-center gap-2 border-b border-dashed border-primary-admin/20 pb-10 max-md:justify-center;
  }

  .admin-sidebar .logo h1 {
    @apply text-2xl font-semibold text-primary-admin max-md:hidden;
  }

  .admin-sidebar .link {
    @apply flex flex-row items-center w-full gap-2 rounded-lg px-5 py-3.5 max-md:justify-center;
  }

  .admin-sidebar .link p {
    @apply text-base font-medium max-md:hidden;
  }

  .admin-sidebar .user {
    @apply my-8 flex w-full flex-row gap-2 rounded-full border border-light-400 px-6 py-2 shadow-sm max-md:px-2;
  }

  /* User Card */
  .user-card {
    @apply w-40 bg-light-300 py-4 px-3 flex justify-center items-center flex-col rounded-xl text-center;
  }

  .user-card .name {
    @apply font-medium mt-3 text-dark-400 line-clamp-1 w-full break-words;
  }

  .user-card .email {
    @apply text-light-500 text-sm line-clamp-1 break-words w-full;
  }
}
```

</details>


## <a name="links">🔗 Assets</a>

- Assets used in the project can be found [here](https://drive.google.com/file/d/1Q-Wx1Y5W-0tsHCyWLXQ1oLW8x8fnROy_/view?usp=sharing)
- [Watch how to Integrate EmailJS](https://youtu.be/kt0FrkQgw8w?feature=shared&t=13792) in Your Website.
- [Source Code for Integrating EmailJS](https://github.com/adrianhajdin/threejs-portfolio/blob/main/src/sections/Contact.jsx) in any of your codebases. 



## <a name="acknowledgments">🤝 Acknowledgments</a>

Adrian Hajdin: For the comprehensive tutorial and
guidance. [JavaScript Mastery](https://www.youtube.com/watch?v=kt0FrkQgw8w&t=3910s&ab_channel=JavaScriptMastery).


## <a name="license">📄 License</a>

This project is licensed under the MIT License.

Note: This project is for educational purposes and is free to use under the terms of the MIT License.


## <a name="more">🚀 More</a>

**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with
detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsmastery.pro/next15" target="_blank">
   <img src="https://github.com/user-attachments/assets/b8760e69-1f81-4a71-9108-ceeb1de36741" alt="Project Banner">
</a>
