// Project + case study content. Screenshots live in /public/projects/<slug>/.
// Desktop captures are 1440x900, mobile captures are 390x844 at 2x (780x1688).

const desktop = { width: 1440, height: 900 };
const mobile = { width: 780, height: 1688 };

export const projects = [
  {
    slug: "konektbarangay",
    title: "KonektBarangay",
    category: "E-Services Platform",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Web application",
    status: "Live",
    summary:
      "A barangay e-services platform where residents request documents, book a claim schedule, and track each request online, while staff review and update requests from an admin dashboard.",
    highlights: [
      "Role-based admin access checked on the server",
      "Real-time notifications and request updates",
      "Guided request → appointment → summary flow"
    ],
    link: "https://konektbarangay.vercel.app/",
    repo: "https://github.com/Aelowww/KonektBarangay",
    techStack: [
      { name: "Next.js", purpose: "App Router pages and a proxy that guards admin routes" },
      { name: "TypeScript", purpose: "Typed pages and data handling" },
      { name: "Supabase Auth", purpose: "Registration, login, password reset, sessions" },
      { name: "PostgreSQL", purpose: "Profiles, document requests and notifications tables" },
      { name: "Supabase Realtime", purpose: "Live admin queue and notification badge" },
      { name: "Tailwind CSS", purpose: "Responsive styling alongside CSS modules" },
      { name: "Vercel", purpose: "Hosting with automatic deploys from GitHub" }
    ],
    cover: {
      desktop: { src: "/projects/konektbarangay/desktop-home.webp", alt: "KonektBarangay home page on desktop", ...desktop },
      mobile: { src: "/projects/konektbarangay/mobile-home.webp", alt: "KonektBarangay home page on mobile", ...mobile }
    },
    gallery: [
      { src: "/projects/konektbarangay/desktop-home.webp", alt: "KonektBarangay landing page", caption: "Landing page with the two main actions", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/mobile-home.webp", alt: "KonektBarangay landing page on mobile", caption: "Landing page on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/konektbarangay/desktop-login.webp", alt: "KonektBarangay login page", caption: "Login with password reset", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/mobile-register.webp", alt: "KonektBarangay registration form on mobile", caption: "Registration with live password rules", viewport: "mobile", ...mobile },
      { src: "/projects/konektbarangay/desktop-register.webp", alt: "KonektBarangay registration page", caption: "Registration page", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/mobile-login.webp", alt: "KonektBarangay login page on mobile", caption: "Login on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/konektbarangay/app-resident-home.webp", alt: "Signed-in resident home with notification badge", caption: "Signed-in view with the notification badge", viewport: "app", width: 811, height: 865 },
      { src: "/projects/konektbarangay/app-request-summary.webp", alt: "Request summary before submission", caption: "Request summary: review before submitting", viewport: "app", width: 804, height: 854 },
      { src: "/projects/konektbarangay/app-manage-requests.webp", alt: "Admin manage requests screen with approve and reject actions", caption: "Admin queue with status filter, search, approve and reject", viewport: "app", width: 799, height: 858 },
      { src: "/projects/konektbarangay/app-notifications.webp", alt: "Notifications list showing request status updates", caption: "Notifications for each status change", viewport: "app", width: 819, height: 867 }
    ],
    caseStudy: {
      overview:
        "KonektBarangay moves common barangay transactions online. Residents create an account, request documents such as a Barangay Clearance or Barangay Certificate, choose a date and time to claim them, and follow the request from pending to completed. Barangay staff get a dashboard to review, approve, or reject requests.",
      problem:
        "Getting a barangay document usually means going to the hall, lining up, and coming back or calling to ask whether it is ready. Residents have little visibility into their request, and staff track everything by hand.",
      goals: [
        "Let residents request documents and book a claim schedule without a first visit",
        "Show a clear status for every request",
        "Give staff one place to review and update requests",
        "Keep admin tools locked to admin accounts"
      ],
      approach:
        "I built it on Next.js with TypeScript and used Supabase for authentication, the Postgres database, and realtime updates. The request is split into three short steps (choose a document, pick an appointment, review the summary) so each screen stays simple on a phone. The draft is kept in the browser between steps, and a request is only written to the database once the resident confirms the summary.",
      features: [
        { title: "Guided document requests", detail: "A three-step flow from choosing a document to a final summary the resident reviews before submitting." },
        { title: "Appointment calendar", detail: "A month calendar with time slots so residents pick when to claim their document." },
        { title: "Resident dashboard", detail: "Residents see every request they have made and its current status." },
        { title: "Admin request queue", detail: "Staff filter by status, search by name, document type or request ID, and approve or reject in one click." },
        { title: "Live notifications", detail: "Status changes create notifications, and the header badge updates without a page refresh." },
        { title: "Secure registration", detail: "Password rules are checked as you type: length, upper and lower case, a number, and a special character." }
      ],
      challenges: [
        {
          title: "Admin pages had to be protected, not just hidden",
          problem: "Removing admin links from the menu does not stop someone from typing /admin in the address bar.",
          solution:
            "I added a Next.js proxy that runs before any /admin page loads. It reads the Supabase session from cookies, looks up the user's role in the profiles table, sends signed-out visitors to login (with a link back), and redirects non-admins to their own dashboard."
        },
        {
          title: "Statuses had to stay in sync without refreshing",
          problem: "Staff and residents were looking at stale data until they reloaded the page.",
          solution:
            "I subscribed to Supabase Realtime channels for the admin request list and for each user's notifications, and removed the subscriptions when the page unmounts so they don't pile up."
        },
        {
          title: "Keeping a multi-step form reliable",
          problem: "Data from the first step had to survive navigation to the appointment and summary pages.",
          solution:
            "The draft is saved in localStorage between steps. The summary page checks for an active session before submitting, then clears the draft so a finished request can't be sent twice."
        }
      ],
      outcomes: [
        "The full request lifecycle works end to end: submitted, pending, approved or rejected, then completed, with a notification at each step.",
        "The layout adapts from phone to desktop, since most residents are expected to use a phone.",
        "Deployed on Vercel with automatic deploys on every push to GitHub."
      ],
      learnings: [
        "Authorization belongs on the server. Hiding UI is only a convenience.",
        "Designing related tables (profiles, requests, notifications) before building screens saved rework later.",
        "Realtime features need cleanup as much as setup."
      ],
      nextSteps: [
        "Send an email or SMS reminder before an appointment",
        "Add automated tests for the request flow"
      ]
    }
  },
  {
    slug: "teech",
    title: "Teech",
    category: "Consultation Booking System",
    year: "2026",
    role: "Head Full-Stack Developer (team project)",
    type: "Mobile-first web app",
    status: "In development",
    summary:
      "A student–faculty consultation booking system. Faculty publish the dates, times and rooms they're free, students request a slot, and faculty confirm or decline, with booking rules enforced by the database itself.",
    highlights: [
      "Double booking blocked at the database level",
      "Booking rules and status changes enforced by Postgres triggers",
      "AI help chat that replies in English, Filipino or Taglish"
    ],
    link: null,
    repo: "https://github.com/Aelowww/Teech",
    techStack: [
      { name: "Next.js", purpose: "Pages, API routes, and a proxy for sign-in checks and phone vs computer routing" },
      { name: "TypeScript", purpose: "Typed pages, helpers and API routes" },
      { name: "Supabase Auth", purpose: "Student ID sign-in for students, email sign-in for faculty" },
      { name: "PostgreSQL", purpose: "Bookings, availability, notifications, points and badges, with row-level security" },
      { name: "Supabase Storage", purpose: "Private profile photos" },
      { name: "pg_cron", purpose: "Nightly job that expires unanswered requests" },
      { name: "Gemini API", purpose: "In-app support assistant" },
      { name: "CSS Modules", purpose: "Component-scoped mobile styling" }
    ],
    cover: {
      mobile: { src: "/projects/teech/student-home.webp", alt: "Teech student dashboard", ...mobile }
    },
    gallery: [
      { src: "/projects/teech/student-home.webp", alt: "Student dashboard with streak, points and a pending request", caption: "Student dashboard: next consultation, streak and pending requests", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/student-faculty.webp", alt: "List of faculty with their next open date", caption: "Pick a faculty member with open dates", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/student-notifications.webp", alt: "Student notifications for submitted and confirmed requests", caption: "Notifications for every request update", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/student-points.webp", alt: "Points balance, ways to earn and rewards shop", caption: "Points shop: streak freezes and collectible badges", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/student-badges.webp", alt: "Grid of badges to unlock", caption: "Badges to unlock and show on your profile", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/faculty-home.webp", alt: "Faculty dashboard with open dates and requests needing a response", caption: "Faculty dashboard: open dates and requests to answer", viewport: "mobile", group: "faculty", ...mobile },
      { src: "/projects/teech/faculty-requests.webp", alt: "Faculty request list with approve and decline buttons", caption: "Approve or decline requests, filtered by status", viewport: "mobile", group: "faculty", ...mobile },
      { src: "/projects/teech/faculty-calendar.webp", alt: "Faculty calendar showing published dates", caption: "Calendar of published consultation dates", viewport: "mobile", group: "faculty", ...mobile },
      { src: "/projects/teech/faculty-availability.webp", alt: "Availability form with dates, times and meeting room", caption: "Publish dates, times and a meeting room", viewport: "mobile", group: "faculty", ...mobile },
      { src: "/projects/teech/mobile-splash.webp", alt: "Teech splash screen with the tagline Teach within your reach", caption: "Splash screen", viewport: "mobile", group: "public", ...mobile },
      { src: "/projects/teech/mobile-role-select.webp", alt: "Choose between student and faculty", caption: "Separate student and faculty portals", viewport: "mobile", group: "public", ...mobile },
      { src: "/projects/teech/mobile-student-sign-in.webp", alt: "Student sign-in with Student ID", caption: "Students sign in with their Student ID", viewport: "mobile", group: "public", ...mobile },
      { src: "/projects/teech/mobile-student-create-account.webp", alt: "Student account creation form", caption: "Student sign-up with password rules and help chat", viewport: "mobile", group: "public", ...mobile },
      { src: "/projects/teech/mobile-faculty-sign-in.webp", alt: "Faculty sign-in with school email", caption: "Faculty sign in with their school email", viewport: "mobile", group: "public", ...mobile }
    ],
    caseStudy: {
      overview:
        "Teech (\"Teach within your reach\") puts consultation booking in one place. Faculty publish the dates, time ranges and rooms they're available, students pick a faculty member and a slot and send a request, and the faculty member confirms or declines. Both sides get in-app notifications at every step.",
      problem:
        "Booking a consultation at our school meant messaging a teacher, waiting for a late reply, finding the time no longer works, and starting over. There was no shared view of when a teacher was actually free.",
      goals: [
        "Let faculty publish real availability, including the meeting room",
        "Let students request a slot in a few taps from their phone",
        "Make it impossible for two students to book the same slot",
        "Keep both sides updated without extra messaging"
      ],
      approach:
        "We built the mobile version first, since students mostly use their phones. Instead of trusting the app to follow the booking rules, we put them in the database: Postgres triggers check every new request and every status change, and row-level security controls who can read or edit each record. A proxy serves the mobile or desktop version at the same URLs depending on the device, so the desktop version can be rolled out page by page.",
      features: [
        { title: "Slot-based booking", detail: "Faculty availability is split into hourly slots. Taken slots and past times today are hidden." },
        { title: "Request tracking", detail: "Students follow each request through pending, confirmed, declined or cancelled, and can cancel if plans change." },
        { title: "Faculty tools", detail: "Faculty publish dates, times and rooms, then confirm, decline or cancel requests." },
        { title: "Notifications", detail: "The database creates a notification for the other person whenever a request is made or changes." },
        { title: "Streaks, points and badges", detail: "Daily login streaks earn points that can be exchanged for streak freezes and collectible badges to show on your profile." },
        { title: "AI help chat", detail: "Answers questions about using Teech in English, Filipino or Taglish, and never asks for passwords or IDs." },
        { title: "Account recovery", detail: "Students reset passwords with security questions, since they sign in with a Student ID. Faculty reset by email." },
        { title: "Account deletion", detail: "Deleting an account cancels upcoming consultations and notifies the other person." }
      ],
      challenges: [
        {
          title: "Two students booking the same slot",
          problem: "If two students request the same time at almost the same moment, checking availability in the app first isn't enough; both checks can pass.",
          solution:
            "A unique partial index on faculty, date and time, applied only to pending and confirmed requests, makes the database reject the second booking. Cancelled and declined requests free the slot again automatically."
        },
        {
          title: "Enforcing booking rules everywhere",
          problem: "Rules like \"at most 3 pending requests\" or \"no confirming a past date\" could be skipped by anyone calling the API directly.",
          solution:
            "A trigger validates every new request: the faculty member exists, the date isn't past, the time falls inside their availability, and the student has no clash, no other pending request with that teacher, and fewer than 3 pending overall. A second trigger only allows valid status changes (pending → confirmed, declined or cancelled; confirmed → cancelled) and records who cancelled."
        },
        {
          title: "Requests nobody answered",
          problem: "Pending requests for dates that had already passed stayed pending forever and kept the slot reserved.",
          solution:
            "A nightly pg_cron job, timed for just after midnight Philippine time, cancels stale requests as \"system\", and the notification trigger tells the student their request expired."
        },
        {
          title: "Keeping the AI help chat safe and affordable",
          problem: "A public AI endpoint can be spammed or pushed off topic.",
          solution:
            "Questions are capped at 300 characters and rate-limited per visitor (15 per 10 minutes) and overall (200 per hour). The assistant only gets Teech FAQ facts for the right audience and is told to refuse unrelated topics."
        }
      ],
      outcomes: [
        "The mobile version works end to end: accounts, booking, requests, notifications, streaks, points and badges.",
        "Teammates tested it on their own phones through an ngrok tunnel during development.",
        "26 versioned database migrations document how the schema and its rules evolved."
      ],
      learnings: [
        "Rules that protect data belong in the database, not just the UI",
        "Row-level security and security-definer functions in Postgres",
        "Working in a team with versioned migrations and a shared database"
      ],
      nextSteps: [
        "Finish the desktop version",
        "Deploy it publicly so students can use it"
      ]
    }
  },
  {
    slug: "awesome-todos",
    title: "Awesome ToDo's",
    category: "Task Management App",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Web application",
    status: "Temporarily offline",
    linkNote: "The live demo is temporarily offline. The source code and screenshots show the full app.",
    summary:
      "A full-stack task manager with a React front end, an Express REST API, and MongoDB Atlas. It started as CRUD practice and was later redesigned into a cleaner, more focused interface.",
    highlights: [
      "REST API with create, read, update and delete",
      "Front end and API deployed as one service",
      "Redesigned dark interface"
    ],
    link: null,
    repo: "https://github.com/Aelowww/AwesomeToDo-s",
    techStack: [
      { name: "React", purpose: "Task list, form and state" },
      { name: "Vite", purpose: "Development server and production build" },
      { name: "Node.js + Express", purpose: "REST API under /api/todos and static hosting of the built app" },
      { name: "MongoDB Atlas", purpose: "Stores tasks and their completed status" },
      { name: "Render", purpose: "Hosts the API and front end together" }
    ],
    cover: {
      desktop: { src: "/projects/awesome-todos/desktop-home.webp", alt: "Awesome ToDo's task list", width: 915, height: 632 }
    },
    gallery: [
      { src: "/projects/awesome-todos/desktop-home.webp", alt: "Task list with three tasks", caption: "Task list", viewport: "desktop", width: 915, height: 632 },
      { src: "/projects/awesome-todos/desktop-typing.webp", alt: "Typing a new task", caption: "Adding a task", viewport: "desktop", width: 920, height: 630 },
      { src: "/projects/awesome-todos/desktop-added.webp", alt: "New task added to the list", caption: "New task saved to MongoDB", viewport: "desktop", width: 916, height: 726 },
      { src: "/projects/awesome-todos/desktop-completed.webp", alt: "Completed task shown with a strike-through", caption: "Marking a task as done", viewport: "desktop", width: 919, height: 730 }
    ],
    caseStudy: {
      overview:
        "Awesome ToDo's is a full-stack task manager. You can add tasks, mark them done, and delete them, and everything is saved to MongoDB Atlas. I built it to learn how a front end, an API and a database fit together in one deployed app.",
      problem:
        "I wanted a project small enough to finish and polish but still cover the whole stack: a user interface, a REST API, a real database, and deployment.",
      goals: [
        "Build a complete create, read, update and delete flow",
        "Design a small, predictable REST API",
        "Ship the front end and API as a single deployment"
      ],
      approach:
        "The React app talks to four REST routes under /api/todos (GET, POST, PUT, DELETE). In production, Express serves the built React files and falls back to index.html for any non-API route, so one Render service hosts everything and no cross-origin setup is needed.",
      features: [
        { title: "Quick add", detail: "Type and press Enter. Empty or whitespace-only tasks are ignored." },
        { title: "Complete and undo", detail: "A checkbox toggles the task, and completed tasks are struck through." },
        { title: "Delete", detail: "Remove a task with one click." },
        { title: "Persistent storage", detail: "Tasks are saved in MongoDB Atlas, so they are still there after a reload." }
      ],
      challenges: [
        {
          title: "Database connection failing on some networks",
          problem: "MongoDB Atlas connection strings need an SRV DNS lookup, which some local DNS providers block.",
          solution: "I pointed Node's DNS resolver at public resolvers (8.8.8.8 and 1.1.1.1) before connecting, which made local development reliable."
        },
        {
          title: "Task text showing extra quotes",
          problem: "The server stored task text as a JSON string, so some tasks displayed with quotation marks.",
          solution: "I added a small display helper that safely parses the stored value, so older and newer records both display correctly."
        },
        {
          title: "Rejecting bad updates",
          problem: "The update route could receive a status that wasn't a boolean.",
          solution: "The PUT route validates the status and returns 400 Bad Request if it isn't true or false."
        }
      ],
      outcomes: [
        "A working CRUD app with a clear split between client and server folders.",
        "One repository and one deployment for both the front end and the API."
      ],
      learnings: [
        "How REST routes map to user actions",
        "Managing environment variables and build commands for deployment",
        "Free hosting tiers sleep when idle, which affects first-load time"
      ],
      nextSteps: [
        "Edit tasks inline",
        "Update the list immediately instead of re-fetching after every change",
        "Show a friendly error when the database is unreachable"
      ]
    }
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Portfolio Website",
    year: "2026",
    role: "Designer & Developer",
    type: "Website",
    status: "Live",
    summary:
      "This site: a responsive portfolio that presents my projects, skills, certificates and contact details, with light and dark themes and an AI chatbot that answers questions about my work.",
    highlights: [
      "AI chatbot with the API key kept on the server",
      "Light and dark themes with no flash on load",
      "SEO metadata, sitemap and structured data"
    ],
    link: "/",
    repo: "https://github.com/Aelowww/Personal-Portfolio",
    techStack: [
      { name: "Next.js", purpose: "App Router pages, API route for the chatbot, static case studies" },
      { name: "React", purpose: "Interactive components like the chatbot and previews" },
      { name: "CSS", purpose: "Hand-written responsive styles and theme tokens" },
      { name: "Gemini API", purpose: "Powers the Chat with Carl assistant" },
      { name: "Vercel", purpose: "Hosting and analytics" }
    ],
    cover: {
      desktop: { src: "/projects/portfolio/desktop-home.webp", alt: "Portfolio home page on desktop", ...desktop },
      mobile: { src: "/projects/portfolio/mobile-home.webp", alt: "Portfolio home page on mobile", ...mobile }
    },
    gallery: [
      { src: "/projects/portfolio/desktop-home.webp", alt: "Portfolio hero section", caption: "Hero section", viewport: "desktop", ...desktop },
      { src: "/projects/portfolio/mobile-home.webp", alt: "Portfolio hero on mobile", caption: "Hero on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/portfolio/desktop-skills.webp", alt: "Skills page", caption: "Skills grouped by area", viewport: "desktop", ...desktop },
      { src: "/projects/portfolio/mobile-skills.webp", alt: "Skills page on mobile", caption: "Skills on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/portfolio/desktop-certificates.webp", alt: "Certificates page", caption: "Certificates overview", viewport: "desktop", ...desktop },
      { src: "/projects/portfolio/mobile-certificates.webp", alt: "Certificates page on mobile", caption: "Certificates on a phone", viewport: "mobile", ...mobile }
    ],
    caseStudy: {
      overview:
        "My portfolio is the one link I share with recruiters, classmates and collaborators. It brings together my projects, skills, certificates, resume and contact details, and includes a chatbot that answers questions about me in my own voice.",
      problem:
        "A PDF resume can't show working software. I needed a place where someone can see what I've built in a couple of minutes, on any device, and reach me easily.",
      goals: [
        "Present projects with real screenshots and a written case study for each",
        "Work well on phones, since many visitors come from social links",
        "Be easy to find by name in search results"
      ],
      approach:
        "Content such as skills and projects lives in data files and is rendered by reusable components, so adding a project means adding one entry. Case study pages are generated at build time from the same data.",
      features: [
        { title: "Chat with Carl", detail: "An AI assistant that answers questions about my projects, skills and contact details in first person." },
        { title: "Light and dark themes", detail: "Follows your system setting by default and remembers your choice." },
        { title: "Project case studies", detail: "Desktop and mobile previews, a screenshot gallery and a write-up for every project." },
        { title: "Certificates and resume", detail: "Dedicated pages to view each credential and my resume." },
        { title: "Search-friendly", detail: "Page metadata, Open Graph tags, a sitemap and Person structured data." }
      ],
      challenges: [
        {
          title: "Keeping the AI key private",
          problem: "Calling the Gemini API from the browser would expose the API key to anyone who opens developer tools.",
          solution:
            "The chatbot sends messages to a Next.js API route, which adds the key on the server and calls Gemini. Only the last 12 messages are sent, and the instructions keep answers limited to facts on my portfolio."
        },
        {
          title: "Theme flashing on page load",
          problem: "Pages briefly rendered in the wrong theme before React loaded.",
          solution: "A tiny script in the layout sets the theme before the page is shown, using the saved choice or the system preference."
        },
        {
          title: "Fitting a lot of content on small screens",
          problem: "The navigation and hero didn't fit well on narrow phones.",
          solution: "The navigation scrolls sideways on small screens, the hero reorders its content, and layouts adjust at several breakpoints down to 360px wide."
        }
      ],
      outcomes: [
        "Live at carldev.vercel.app, with Vercel Analytics tracking page visits.",
        "New projects can be added by editing a single data file."
      ],
      learnings: [
        "How to write chatbot instructions that keep answers grounded in real facts",
        "Using the Next.js Metadata API for SEO",
        "Designing mobile-first instead of shrinking a desktop layout"
      ],
      nextSteps: []
    }
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function isExternalLink(href) {
  return Boolean(href) && /^https?:\/\//.test(href);
}
