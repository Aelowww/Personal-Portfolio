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
      "A barangay e-services platform where verified residents request documents, book a claim schedule, file blotter reports and follow barangay news, while staff verify residents, review requests and publish announcements from an admin dashboard.",
    highlights: [
      "Email codes and ID verification before residents can request documents",
      "Blotter reports and News & Events alongside document requests",
      "Database rules that block role escalation and self-approval"
    ],
    link: "https://konektbarangay.vercel.app/",
    repo: "https://github.com/Aelowww/KonektBarangay",
    techStack: [
      { name: "Next.js", purpose: "App Router pages and a proxy that guards resident and admin routes" },
      { name: "TypeScript", purpose: "Typed pages, shared document and community models" },
      { name: "Supabase Auth", purpose: "Registration, 6-digit email codes, password reset with codes, sessions" },
      { name: "PostgreSQL", purpose: "Profiles, requests, blotter reports, announcements and notifications with row-level security" },
      { name: "Supabase Storage", purpose: "Private bucket for resident ID photos, readable only by staff" },
      { name: "Supabase Realtime", purpose: "Live admin queue, dashboard and notification badge" },
      { name: "Cloudflare Turnstile", purpose: "Bot check on sign-up and login" },
      { name: "Framer Motion", purpose: "Page and component transitions" },
      { name: "Vercel", purpose: "Hosting with automatic deploys from GitHub" }
    ],
    cover: {
      desktop: { src: "/projects/konektbarangay/desktop-home.webp", alt: "KonektBarangay resident dashboard on desktop", ...desktop },
      mobile: { src: "/projects/konektbarangay/mobile-home.webp", alt: "KonektBarangay resident dashboard on mobile", ...mobile }
    },
    gallery: [
      { src: "/projects/konektbarangay/desktop-home.webp", alt: "Resident dashboard with request totals, quick services and the next appointment", caption: "Resident dashboard: request totals, quick services and upcoming appointment", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/desktop-request-document.webp", alt: "Document types residents can request", caption: "Choose from nine barangay documents", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/desktop-set-appointment.webp", alt: "Appointment calendar with a date and time selected", caption: "Pick a date and an hourly slot within office hours", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/desktop-request-summary.webp", alt: "Request summary before submission", caption: "Review the request before submitting", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/desktop-manage-requests.webp", alt: "Admin request queue with status filter and search", caption: "Admin queue: view, approve, reject or mark completed", viewport: "desktop", ...desktop },
      { src: "/projects/konektbarangay/mobile-home.webp", alt: "Resident dashboard on mobile", caption: "Resident dashboard on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/konektbarangay/mobile-request-document.webp", alt: "Document selection on mobile", caption: "Requesting a document on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/konektbarangay/mobile-set-appointment.webp", alt: "Appointment calendar on mobile", caption: "Booking a claim schedule on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/konektbarangay/mobile-request-summary.webp", alt: "Request summary on mobile", caption: "Request summary on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/konektbarangay/mobile-manage-requests.webp", alt: "Admin request queue on mobile", caption: "Admin queue on a phone", viewport: "mobile", ...mobile }
    ],
    caseStudy: {
      overview:
        "KonektBarangay moves common barangay transactions online. Residents sign up, confirm their email with a 6-digit code, and verify their identity by uploading a valid ID. Once verified they can request documents such as a Barangay Clearance or Certificate of Indigency, choose a date and time to claim them, file blotter reports, and follow barangay news and events. Staff get an admin side to verify residents, process requests and reports, and publish announcements.",
      problem:
        "Getting a barangay document usually means going to the hall, lining up, and coming back or calling to ask whether it is ready. Residents have little visibility into their requests or reports, and staff track everything by hand. Moving this online also means making sure the person requesting a document really is a resident.",
      goals: [
        "Let residents request documents and book a claim schedule without a first visit",
        "Confirm each resident's email and identity before they can make requests",
        "Show a clear status for every request and blotter report",
        "Give staff one place to verify residents, process requests and post announcements",
        "Keep admin tools and approvals locked to staff accounts"
      ],
      approach:
        "I built it on Next.js with TypeScript and used Supabase for authentication, the Postgres database, file storage and realtime updates. A shared app shell gives residents and staff the same navigation on phone and desktop. Access is enforced in the database with row-level security, so the rules hold even if someone calls the API directly. The request flow stays split into three short steps (choose a document, pick an appointment, review the summary), and a request is only written to the database once the resident confirms the summary.",
      features: [
        { title: "Email verification codes", detail: "New residents confirm their email with a 6-digit code before they can sign in, and forgotten passwords are reset with a code as well. Codes expire after 15 minutes." },
        { title: "Resident ID verification", detail: "Residents upload a photo of a valid ID after signing in. Staff review it from the admin side and approve or reject it with a reason the resident can see, and document requests unlock once the resident is verified." },
        { title: "Guided document requests", detail: "Nine document types, from Barangay Clearance to First-Time Job Seeker, plus an \"Other\" option, in a three-step flow that ends with a summary the resident reviews before submitting." },
        { title: "Appointment calendar", detail: "A month calendar with hourly slots inside office hours (Monday to Friday, 8 AM to 5 PM). Fully booked and unavailable days are marked." },
        { title: "Blotter reports", detail: "Residents file incident reports with the type, date, location and a written statement. Staff move each case through filed, under review, scheduled, resolved or dismissed, and can set a hearing date." },
        { title: "News & Events", detail: "Staff publish news, events and advisories. Residents see upcoming events on their dashboard and the full list on the News & Events page." },
        { title: "Resident dashboard", detail: "Request totals by status, quick links to common documents, the next appointment, upcoming events and recent requests on one screen." },
        { title: "Admin tools", detail: "Staff verify residents, filter and search requests, update blotter cases and manage announcements, with live updates and notifications." }
      ],
      challenges: [
        {
          title: "Anyone could register as an admin",
          problem: "The sign-up trigger copied the account role from sign-up data that the browser controls, so a crafted request could create an admin account.",
          solution:
            "I rewrote the trigger so every new account is created as a resident. Staff roles can only be granted from the database, never from the sign-up form."
        },
        {
          title: "Residents could approve their own requests",
          problem: "The update policy let residents change their own request, which meant a direct API call could set it to approved.",
          solution:
            "I added a database trigger that only lets residents cancel their own pending requests. Every other status change has to come from staff."
        },
        {
          title: "Verifying residents without exposing their IDs",
          problem: "ID photos are sensitive, but staff need to see them to verify a resident.",
          solution:
            "Uploads go to a private storage bucket. Residents can only add their own photo, staff view it through short-lived signed links, and residents who are not yet verified can't submit document requests."
        },
        {
          title: "Admin pages had to be protected, not just hidden",
          problem: "Removing admin links from the menu does not stop someone from typing /admin in the address bar.",
          solution:
            "A Next.js proxy runs before any protected page loads. It reads the Supabase session from cookies, checks the user's role, sends signed-out visitors to login with a link back, and redirects non-staff to their own dashboard."
        }
      ],
      outcomes: [
        "The full request lifecycle works end to end: submitted, pending, approved or rejected, then completed, with a notification at each step.",
        "Every account is email-verified, and residents are identity-verified before they can request documents.",
        "The layout adapts from phone to desktop, since most residents are expected to use a phone.",
        "Deployed on Vercel with automatic deploys on every push to GitHub."
      ],
      learnings: [
        "Authorization belongs in the database. Hiding UI and checking roles in the app are only conveniences.",
        "Never trust data the browser sends at sign-up, including fields that look internal.",
        "Designing related tables (profiles, requests, reports, announcements, notifications) before building screens saved rework later.",
        "Realtime features need cleanup as much as setup."
      ],
      nextSteps: [
        "Send an email or SMS reminder before an appointment",
        "Add automated tests for the request and verification flows"
      ]
    }
  },
  {
    slug: "teech",
    title: "Teech",
    category: "Consultation Booking System",
    year: "2026",
    role: "Head Full-Stack Developer",
    type: "Web app",
    status: "Live",
    summary:
      "A student–faculty consultation booking system. Faculty publish the dates, times and rooms they're free, students request a slot, and faculty confirm or decline, with booking rules enforced by the database itself.",
    highlights: [
      "Double booking blocked at the database level",
      "Separate mobile and desktop layouts on the same URLs",
      "Streaks, points and collectible badges that reward showing up"
    ],
    link: "https://teech-app.vercel.app/",
    repo: "https://github.com/Aelowww/Teech",
    techStack: [
      { name: "Next.js", purpose: "Pages, API routes, and a proxy for sign-in checks and phone vs computer routing" },
      { name: "TypeScript", purpose: "Typed pages, helpers and API routes" },
      { name: "Supabase Auth", purpose: "Student ID sign-in for students, email sign-in for faculty" },
      { name: "PostgreSQL", purpose: "Bookings, availability, notifications, points and badges, with row-level security" },
      { name: "Supabase Realtime", purpose: "Live notification and request updates" },
      { name: "Supabase Storage", purpose: "Private profile photos" },
      { name: "pg_cron", purpose: "Nightly job that expires unanswered requests" },
      { name: "Gemini API", purpose: "Help chat fallback" },
      { name: "CSS Modules", purpose: "Component-scoped styling for the mobile and desktop layouts" },
      { name: "Vercel", purpose: "Hosting" }
    ],
    cover: {
      desktop: { src: "/projects/teech/desktop-student-home.webp", alt: "Teech student dashboard on desktop", ...desktop },
      mobile: { src: "/projects/teech/student-home.webp", alt: "Teech student dashboard", ...mobile }
    },
    gallery: [
      { src: "/projects/teech/desktop-student-home.webp", alt: "Student dashboard with study tip, streak and requests", caption: "Student dashboard", viewport: "desktop", group: "student", ...desktop },
      { src: "/projects/teech/desktop-student-faculty.webp", alt: "Faculty cards showing live status and next open date", caption: "Faculty list with live status", viewport: "desktop", group: "student", ...desktop },
      { src: "/projects/teech/desktop-student-book.webp", alt: "Booking step one: choose one of the teacher's open dates", caption: "Four-step booking: date, time, details, review", viewport: "desktop", group: "student", ...desktop },
      { src: "/projects/teech/desktop-student-points.webp", alt: "Points balance, rewards shop and history", caption: "Points shop with common, rare and legendary badges", viewport: "desktop", group: "student", ...desktop },
      { src: "/projects/teech/desktop-faculty-availability.webp", alt: "Faculty availability calendar with times and room", caption: "Faculty publish dates, times and a room", viewport: "desktop", group: "faculty", ...desktop },
      { src: "/projects/teech/student-home.webp", alt: "Student dashboard on mobile", caption: "Student dashboard on a phone", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/student-faculty.webp", alt: "Faculty list on mobile", caption: "Pick a faculty member with open dates", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/student-book.webp", alt: "Choosing an open date on mobile", caption: "Choosing a date on a phone", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/student-points.webp", alt: "Points shop on mobile", caption: "Points shop: streak freezes and badges", viewport: "mobile", group: "student", ...mobile },
      { src: "/projects/teech/faculty-availability.webp", alt: "Faculty availability form on mobile", caption: "Publishing availability on a phone", viewport: "mobile", group: "faculty", ...mobile }
    ],
    caseStudy: {
      overview:
        "Teech (\"Teacher within your reach\") puts consultation booking in one place. Faculty publish the dates, time ranges and rooms they're available, students pick a faculty member and a slot and send a request, and the faculty member confirms or declines. Both sides get in-app notifications at every step.",
      problem:
        "Booking a consultation at our school meant messaging a teacher, waiting for a late reply, finding the time no longer works, and starting over. There was no shared view of when a teacher was actually free.",
      goals: [
        "Let faculty publish real availability, including the meeting room",
        "Let students request a slot in a few taps from their phone",
        "Make it impossible for two students to book the same slot",
        "Keep both sides updated without extra messaging"
      ],
      approach:
        "We built the mobile version first, since students mostly use their phones. Instead of trusting the app to follow the booking rules, we put them in the database: Postgres triggers check every new request and every status change, and row-level security controls who can read or edit each record. A proxy serves the mobile or desktop layout at the same URLs depending on the device, which let us roll out the desktop version page by page until it was complete.",
      features: [
        { title: "Slot-based booking", detail: "A four-step flow (date, time, details, review). Faculty availability is split into hourly slots, and taken slots and past times today are hidden." },
        { title: "Live faculty status", detail: "Faculty set themselves as available, in a class or in a meeting, so students know before they book." },
        { title: "Request tracking", detail: "Students follow each request through pending, confirmed, declined or cancelled, and can cancel if plans change." },
        { title: "Faculty tools", detail: "Faculty publish dates, times and rooms, then confirm, decline or cancel requests." },
        { title: "Notifications", detail: "The database creates a notification for the other person whenever a request is made or changes." },
        { title: "Streaks, points and badges", detail: "Daily check-ins earn more points each day of a streak, peaking on day 7. Points buy streak freezes and common, rare and legendary badges, and up to 3 badges can be shown on a profile." },
        { title: "Study and consultation tips", detail: "Students get a rotating study tip and faculty get consultation tips on their dashboard." },
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
        "Live on Vercel with complete mobile and desktop layouts: accounts, booking, requests, notifications, streaks, points and badges.",
        "Teammates tested it on their own phones through an ngrok tunnel during development.",
        "31 versioned database migrations document how the schema and its rules evolved."
      ],
      learnings: [
        "Rules that protect data belong in the database, not just the UI",
        "Row-level security and security-definer functions in Postgres",
        "Working in a team with versioned migrations and a shared database"
      ],
      nextSteps: []
    }
  },
  {
    slug: "awesome-todos",
    title: "Awesome ToDo's",
    category: "Student Planner",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Web app (PWA)",
    status: "Live",
    summary:
      "A full-stack planner for students that keeps tasks, deadlines, class schedules and grades in one place, with a focus timer and Study Buddy, an AI assistant that knows your tasks and classes.",
    highlights: [
      "Tasks, calendar, timetable and grade tracker in one app",
      "Study Buddy AI chat and \"Break down with AI\" for big tasks",
      "Separate phone and desktop layouts, installable as an app"
    ],
    link: "https://awesometodos-web.onrender.com/",
    repo: "https://github.com/Aelowww/AwesomeToDo-s",
    techStack: [
      { name: "React", purpose: "Pages, components and app state" },
      { name: "Vite", purpose: "Development server and production build" },
      { name: "Node.js + Express", purpose: "REST API for tasks, accounts, classes and grades, plus static hosting of the built app" },
      { name: "MongoDB Atlas", purpose: "Stores users, tasks, classes and grades" },
      { name: "JWT", purpose: "Sign-in sessions stored in cookies" },
      { name: "Gemini API", purpose: "Study Buddy chat and AI task breakdown" },
      { name: "Nodemailer", purpose: "Password reset emails" },
      { name: "Render", purpose: "Hosts the API and front end together, deployed from GitHub" }
    ],
    cover: {
      desktop: { src: "/projects/awesome-todos/desktop-home.webp", alt: "Awesome ToDo's dashboard on desktop", ...desktop },
      mobile: { src: "/projects/awesome-todos/mobile-home.webp", alt: "Awesome ToDo's dashboard on mobile", ...mobile }
    },
    gallery: [
      { src: "/projects/awesome-todos/desktop-home.webp", alt: "Dashboard with progress ring, stat tiles, week strip and today's classes", caption: "Dashboard: today's progress, classes and 7-day activity", viewport: "desktop", ...desktop },
      { src: "/projects/awesome-todos/desktop-tasks.webp", alt: "Task list with filters, search and sorting", caption: "Tasks with All, Today, Next 7 days, Overdue and Done views", viewport: "desktop", ...desktop },
      { src: "/projects/awesome-todos/desktop-classes.webp", alt: "Weekly class timetable with rooms", caption: "Weekly class schedule with rooms", viewport: "desktop", ...desktop },
      { src: "/projects/awesome-todos/desktop-grades.webp", alt: "Grade tracker with target grade per class", caption: "Grade tracker with a target-grade calculator", viewport: "desktop", ...desktop },
      { src: "/projects/awesome-todos/desktop-focus.webp", alt: "Pomodoro focus timer", caption: "Focus timer linked to a task", viewport: "desktop", ...desktop },
      { src: "/projects/awesome-todos/mobile-home.webp", alt: "Dashboard on mobile", caption: "Dashboard on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/awesome-todos/mobile-tasks.webp", alt: "Task list on mobile", caption: "Tasks on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/awesome-todos/mobile-calendar.webp", alt: "Deadline calendar on mobile", caption: "Deadline calendar on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/awesome-todos/mobile-classes.webp", alt: "Class schedule on mobile", caption: "Class schedule on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/awesome-todos/mobile-grades.webp", alt: "Grade tracker on mobile", caption: "Grade tracker on a phone", viewport: "mobile", ...mobile }
    ],
    caseStudy: {
      overview:
        "Awesome ToDo's started as a simple to-do list and grew into a planner for students. You add tasks with a subject, type, priority, due date and steps, see what's due today and this week, keep your class schedule and grades, and stay focused with a built-in timer. Study Buddy, the AI assistant, can answer questions about your schedule and split a big task into steps.",
      problem:
        "Students keep track of assignments, exams and classes across sticky notes, group chats and memory, and things get missed. A plain to-do list doesn't know about your classes or how close your grades are to your goal.",
      goals: [
        "Put tasks, deadlines, classes and grades in one place",
        "Show what matters today at a glance",
        "Help students start big tasks and stay focused",
        "Work well on both phones and computers"
      ],
      approach:
        "The React app talks to an Express REST API split into tasks, accounts, and classes and grades. In production, Express serves the built React files and falls back to index.html for any non-API route, so one Render service hosts everything. Class names double as task subjects, which connects the timetable, tasks and dashboard. Study Buddy gets the student's tasks and classes as context, and the AI code tries a newer Gemini model first and falls back when one is busy.",
      features: [
        { title: "Detailed tasks", detail: "Each task can have a subject, type (task, assignment, exam, project or reading), priority, due date, steps and notes." },
        { title: "Smart views", detail: "All, Today, Next 7 days, Overdue and Done, with search, subject and type filters, and sorting." },
        { title: "Dashboard", detail: "A progress ring, stat tiles, a week strip, today's classes and a 7-day activity chart." },
        { title: "Calendar", detail: "Every deadline on a month calendar. Tap a day to see or add tasks for it." },
        { title: "Classes and grades", detail: "A weekly timetable with rooms and a grade tracker that shows what you need to reach a target grade." },
        { title: "Focus timer", detail: "Pomodoro sessions with one-tap lengths, a custom time and an optional task to work on." },
        { title: "Study Buddy AI", detail: "A chat that knows your tasks and classes, plus \"Break down with AI\" to split a big task into steps." },
        { title: "Accounts", detail: "Welcome tour, profile photo, school and year level, email and password changes, and password reset." },
        { title: "Light and dark mode", detail: "Light, dark or match your device, with separate phone and desktop layouts and PWA install." }
      ],
      challenges: [
        {
          title: "Database connection failing on some networks",
          problem: "MongoDB Atlas connection strings need an SRV DNS lookup, which some local DNS providers block.",
          solution: "I pointed Node's DNS resolver at public resolvers (8.8.8.8 and 1.1.1.1) before connecting, which made local development reliable."
        },
        {
          title: "Keeping the AI assistant available",
          problem: "A single AI model can be busy or rate-limited, which would leave Study Buddy unusable.",
          solution: "The server tries a list of Gemini models in order and moves to the next one when Google reports it busy or unavailable. Without an API key, the rest of the app still works and Study Buddy explains that it isn't switched on yet."
        }
      ],
      outcomes: [
        "Live on Render with automatic deploys from the main branch.",
        "Grew from a four-route CRUD app into a full planner with accounts, classes, grades and AI features.",
        "One repository and one deployment for both the front end and the API."
      ],
      learnings: [
        "How to grow a small CRUD app into a larger product without rewriting it",
        "Handling sign-in with JWTs and cookies",
        "Giving an AI assistant the right context and a fallback plan",
        "Free hosting tiers sleep when idle, which affects first-load time"
      ],
      nextSteps: []
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
    link: "https://carldev.vercel.app/",
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
      { src: "/projects/portfolio/desktop-projects.webp", alt: "Projects section with device previews", caption: "Projects with desktop and mobile previews", viewport: "desktop", ...desktop },
      { src: "/projects/portfolio/desktop-case-study.webp", alt: "Teech case study page", caption: "Case study page", viewport: "desktop", ...desktop },
      { src: "/projects/portfolio/desktop-skills.webp", alt: "Skills page", caption: "Skills grouped by area", viewport: "desktop", ...desktop },
      { src: "/projects/portfolio/desktop-certificates.webp", alt: "Certificates page", caption: "Certificates overview", viewport: "desktop", ...desktop },
      { src: "/projects/portfolio/mobile-home.webp", alt: "Portfolio hero on mobile", caption: "Hero on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/portfolio/mobile-projects.webp", alt: "Projects section on mobile", caption: "Projects on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/portfolio/mobile-case-study.webp", alt: "Case study page on mobile", caption: "Case study on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/portfolio/mobile-skills.webp", alt: "Skills page on mobile", caption: "Skills on a phone", viewport: "mobile", ...mobile },
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
  },
  {
    slug: "professional-portfolio",
    title: "Professional Portfolio",
    category: "Portfolio Website",
    year: "2026",
    role: "Designer & Developer",
    type: "Website",
    status: "Live",
    summary:
      "A second, recruiter-focused version of my portfolio with a minimal monochrome bento layout that shows my projects, experience, tech stack and certificates at a glance.",
    highlights: [
      "Minimal bento-card layout built for quick scanning",
      "Experience timeline and tech stack with official brand logos",
      "Case study pages with desktop and mobile previews"
    ],
    link: "https://carltaberna.vercel.app/",
    repo: "https://github.com/Aelowww/Professional-Portfolio",
    techStack: [
      { name: "Next.js", purpose: "App Router pages, generated case studies and the chatbot API route" },
      { name: "React", purpose: "Interactive pieces like the chatbot, theme toggle and screenshot viewer" },
      { name: "CSS", purpose: "Hand-written monochrome styles with light and dark tokens" },
      { name: "Simple Icons", purpose: "Official brand logos for the tech stack" },
      { name: "Gemini API", purpose: "Powers the \"Ask Carl anything\" chatbot" },
      { name: "Vercel", purpose: "Hosting and analytics" }
    ],
    cover: {
      desktop: { src: "/projects/professional-portfolio/desktop-home.webp", alt: "Professional portfolio home page on desktop", ...desktop },
      mobile: { src: "/projects/professional-portfolio/mobile-home.webp", alt: "Professional portfolio home page on mobile", ...mobile }
    },
    gallery: [
      { src: "/projects/professional-portfolio/desktop-home.webp", alt: "Profile header, quick stats, about and experience cards", caption: "Profile header with quick stats and experience timeline", viewport: "desktop", ...desktop },
      { src: "/projects/professional-portfolio/desktop-skills.webp", alt: "Tech stack, certificates, education and social links cards", caption: "Tech stack with official brand logos, plus education and certificates", viewport: "desktop", ...desktop },
      { src: "/projects/professional-portfolio/desktop-projects.webp", alt: "Projects page with desktop and phone previews", caption: "Projects page with case study, live site and source code links", viewport: "desktop", ...desktop },
      { src: "/projects/professional-portfolio/desktop-case-study.webp", alt: "Teech case study page with a phone preview", caption: "Case study page with a device preview", viewport: "desktop", ...desktop },
      { src: "/projects/professional-portfolio/desktop-certificates.webp", alt: "Certificates page", caption: "Certificates overview", viewport: "desktop", ...desktop },
      { src: "/projects/professional-portfolio/mobile-home.webp", alt: "Profile header on mobile", caption: "Home on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/professional-portfolio/mobile-skills.webp", alt: "Tech stack on mobile", caption: "Tech stack on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/professional-portfolio/mobile-projects.webp", alt: "Project cards on mobile", caption: "Projects on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/professional-portfolio/mobile-case-study.webp", alt: "Case study page on mobile", caption: "Case study on a phone", viewport: "mobile", ...mobile },
      { src: "/projects/professional-portfolio/mobile-certificates.webp", alt: "Certificates page on mobile", caption: "Certificates on a phone", viewport: "mobile", ...mobile }
    ],
    caseStudy: {
      overview:
        "The professional portfolio is a cleaner companion to this site. A profile header with quick stats and internship status sits above bento cards for About, Experience, Tech Stack, Projects, Certificates and Social Links, and every project has its own case study page.",
      problem:
        "Recruiters spend very little time on each portfolio. My main site has a lot of personality, but I also wanted a version that shows the essentials (who I am, what I've built, and my experience) in a few seconds.",
      goals: [
        "Show the most important information above the fold",
        "Keep the design minimal and consistent in light and dark mode",
        "Reuse the same project and case study content as my main portfolio"
      ],
      approach:
        "I kept the data-driven structure from my main portfolio, so profile details, the experience timeline, skills and projects each live in a data file and the cards and /projects/<slug> pages are generated from them. The visual design switched to a monochrome bento grid with Geist and Geist Mono type.",
      features: [
        { title: "Profile header", detail: "Photo, location, role, quick stats and an \"Open to internship\" call to action." },
        { title: "Bento cards", detail: "About, Experience, Tech Stack, Projects, Certificates and Social Links in one grid." },
        { title: "Experience timeline", detail: "Roles and dates, from technical support work to leading development on Teech." },
        { title: "Project case studies", detail: "Desktop and mobile previews, a screenshot viewer and a write-up for every project." },
        { title: "Ask Carl anything", detail: "A chatbot that answers quick questions about my work." },
        { title: "Light and dark themes", detail: "A toggle in the header switches between the two." }
      ],
      challenges: [
        {
          title: "Saying more with less",
          problem: "A minimal layout leaves little room, but recruiters still need to see projects, experience and skills.",
          solution: "Each card holds one kind of information, and the profile header carries the key numbers and the internship status so the most important facts are visible first."
        }
      ],
      outcomes: [
        "Live at carltaberna.vercel.app with Vercel Analytics.",
        "Shares its project content structure with my main portfolio, so both stay easy to update."
      ],
      learnings: [
        "Designing for a specific audience instead of for myself",
        "Building a consistent monochrome design system that works in both themes"
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
