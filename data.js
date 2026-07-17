// Central content store — edit this file to update site copy.
// Used by both index.html (main sections) and case-study.html (project detail).

const SITE_DATA = {
  projects: [
{
  slug: 'universe-campus-platform',
  title: 'UniVerse',
  tagline: 'An all-in-one smart campus management platform',
  description:
    'A unified platform that brings every aspect of campus life into one place, enabling students, faculty, and administrators to manage academics, events, resources, navigation, and campus services through a single seamless experience.',
  problem:
    'Campus services are often spread across multiple disconnected platforms, forcing students and staff to switch between different apps, websites, and offline processes for schedules, events, canteen services, resource booking, and navigation.',
  solution:
    'I designed a centralized smart campus ecosystem that integrates personalized timetables, canteen pre-ordering, event management, resource booking, campus navigation, and an analytics-driven admin dashboard into one intuitive platform, making the campus experience more efficient and connected.',
  tech: ['Figma', 'UI/UX Design', 'HTML', 'CSS', 'JavaScript'],
  year: '',
  role: 'UI/UX Designer & Full-Stack Developer',
  github: '',
  demo: '',
  video: 'UniVerse.mp4',
},
{
  slug: 'eduguard-ai',
  title: 'EduGuard AI',
  tagline: 'An AI-powered student dropout prediction and intervention platform',
  description:
    'An intelligent education platform that uses machine learning to identify students at risk of dropping out and enables institutions to provide timely counseling, personalized interventions, and progress tracking through a centralized dashboard.',
  problem:
    'Educational institutions often identify struggling students only after their academic performance has significantly declined, resulting in missed opportunities for early intervention and higher dropout rates.',
  solution:
    'I developed an AI-driven platform that analyzes academic, attendance, engagement, financial, and counseling data to generate student risk scores, helping educators take proactive actions through real-time dashboards, alerts, and personalized intervention plans.',
  tech: ['React', 'Tailwind CSS', 'PostgreSQL', 'Python', 'Scikit-learn', 'Machine Learning'],
  year: '',
  role: 'Full-Stack Developer & AI Developer',
  github: '',
  demo: '',
  video: 'EduGuard.mp4',
    },
{
  slug: 'scholar-sight',
  title: 'Scholar Sight',
  tagline: 'An AI-powered student performance analytics platform',
  description:
    'An intelligent academic analytics platform that predicts student performance, identifies at-risk learners, and provides personalized recommendations through interactive dashboards and explainable AI.',
  problem:
    'Educational institutions often rely on manual performance tracking, making it difficult to identify struggling students early and provide timely academic support before their performance declines.',
  solution:
    'I built an AI-driven dashboard that analyzes attendance, internal assessments, and academic history to predict student performance, explain risk factors, and deliver actionable insights through real-time visualizations and personalized recommendations.',
  tech: ['Python', 'Flask', 'Decision Tree', 'HTML', 'Tailwind CSS', 'JavaScript', 'Google Sheets API', 'Vercel'],
  year: '',
  role: 'AI & Full-Stack Developer',
  github: '',
  demo: 'https://scholar-sight.vercel.app',
 video: 'scholar-sight.mp4',
},
{
  slug: 'insurance-fraud-detection',
  title: 'Insurance Fraud Detection & Identity Validation System',
  tagline: 'An AI-assisted platform for detecting insurance fraud and verifying identities',
  description:
    'A centralized insurance verification platform that detects fraudulent claims by validating identity documents, analyzing cross-record inconsistencies, and generating risk scores to support faster and more reliable claim processing.',
  problem:
    'Insurance companies often rely on isolated verification processes, making it difficult to identify forged identities, duplicate claims, and fraudulent documents across multiple insurers, resulting in financial losses and delayed settlements for genuine policyholders.',
  solution:
    'I developed a centralized fraud detection system that verifies Aadhaar, PAN, and death certificate records through integrated validation services, detects suspicious identity patterns, and generates intelligent risk scores to help insurers and regulators identify fraudulent claims before approval.',
  tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Python', 'Flask', 'SQLite', 'REST APIs'],
  year: '',
  role: 'Full-Stack Developer',
  github: '',
  demo: '',
      video: 'in-fr.mp4',
    },
{
  slug: 'student-management-dashboard',
  title: 'Student Management Dashboard',
  tagline: 'A unified smart dashboard for modern campus life',
  description:
    'A centralized student portal that streamlines academics and campus services by combining attendance tracking, class schedules, navigation, food ordering, and AI-powered academic insights into one intuitive platform.',
  problem:
    'Students often rely on multiple disconnected systems to manage academics, campus facilities, and daily activities, resulting in inefficiencies, missed updates, and a fragmented campus experience.',
  solution:
    'I developed a role-based smart dashboard that integrates attendance, class schedules, campus navigation, food ordering, and AI-driven performance insights into a single platform, enabling students to manage their academic journey while helping institutions deliver a more connected digital campus.',
  tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind CSS'],
  year: '',
  role: 'Full-Stack Developer',
  github: '',
  demo: '',
    video: 'stu-mag.mp4',
    },
{
  slug: 'medisync-ai',
  title: 'MediSync AI',
  tagline: 'An AI-powered hospital resource and patient flow management platform',
  description:
    'An intelligent healthcare management platform that predicts patient inflow, optimizes hospital bed allocation, and streamlines OPD queue management using machine learning and real-time operational data.',
  problem:
    'Hospitals often struggle with overcrowded OPDs, inefficient bed allocation, and unpredictable patient inflow, resulting in long waiting times, resource bottlenecks, and delayed patient care.',
  solution:
    'I developed an AI-powered platform that analyzes historical patient data to predict hospital demand, monitor bed availability, and optimize queue management through a centralized real-time dashboard, enabling healthcare staff to make faster and more informed operational decisions.',
  tech: ['Python', 'Machine Learning', 'MongoDB', 'Data Analytics', 'Dashboard Design'],
  year: '',
  role: 'AI & Full-Stack Developer',
  github: '',
  demo: '',
      video: 'medisync.mp4',
    },
{
  slug: 'fire-fighting-robot',
  title: 'Fire Fighting Robot',
  tagline: 'An autonomous IoT-based fire detection and suppression robot',
  description:
    'An Arduino-powered autonomous robot that detects fire using multiple flame sensors, navigates toward the source, and automatically activates a servo-controlled water spraying mechanism to suppress small fires.',
  problem:
    'Manual firefighting in confined or hazardous environments can expose responders to unnecessary risk, while early-stage fires often require rapid detection and immediate action to prevent escalation.',
  solution:
    'I developed an autonomous robotic prototype that combines flame detection, intelligent navigation, obstacle handling, and automated water spraying to identify and extinguish small fires with minimal human intervention.',
  tech: [
    'Arduino Uno',
    'Embedded C',
    'Flame Sensors',
    'Line Tracking Sensors',
    'Servo Motor',
    'Water Pump',
    'L298N Motor Driver'
  ],
  year: '',
  role: 'Embedded Systems Developer',
  github: '',
  demo: '',
      video: 'fire-robo.mp4',
    },
{
  slug: 'academic-insight-ai',
  title: 'Academic Insight AI',
  tagline: 'An AI-powered student performance prediction platform',
  description:
    'A smart academic analytics platform that predicts student performance using attendance, assessment scores, and assignment data while providing personalized learning recommendations through role-based dashboards.',
  problem:
    'Traditional student management systems primarily record academic data but lack intelligent insights that help educators identify at-risk students early or guide learners toward improving their performance.',
  solution:
    'I developed an AI-powered platform that predicts academic outcomes, identifies performance risks, and delivers personalized study recommendations through dedicated dashboards for students, teachers, and administrators, enabling proactive academic support.',
  tech: ['Python', 'Machine Learning', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Chart.js'],
  year: '',
  role: 'AI & Full-Stack Developer',
  github: '',
  demo: '',
      video: 'ac-in.mp4',
    },
  ],

  experience: [
    {
      type: 'Education',
      title: 'MSc Information Technology',
      org: 'Vidyalankar School of Information Technology',
      period: '2026 — Present',
      description:
        'Graduate coursework focused on distributed systems, applied machine learning, and human-centered software design.',
    },
        {
      type: 'Education',
      title: 'BSc Information Technology',
      org: 'Vidyalankar School of Information Technology',
      period: '2023 — 2026',
      description:
        'Bacholers degree in Information Technology.',
    },
    {
      type: 'Internship',
      title: 'Data Science Intern',
      org: 'Imarticus',
      period: 'Sep 2025',
      description:
        'got to work on real life Data Science Projects and learn how companies use this data and visualization is done.',
    },
    {
  type: 'Internship',
  title: 'Web Development Intern',
  org: 'CodSoft',
  period: 'Jul 2023 – Aug 2023',
  description:
    'Developed responsive web applications using HTML, CSS, and JavaScript while gaining practical experience in front-end development, UI design, and project-based software development.',
},
    {
  type: 'Internship',
  title: 'Web Development Intern',
  org: 'Prodigy InfoTech',
  period: 'Aug 2023 – Sep 2023',
  description:
    'Built responsive web applications and interactive user interfaces using HTML, CSS, and JavaScript while strengthening front-end development, problem-solving, and project implementation skills.',
},
    {
  type: 'Volunteer',
  title: 'Polling Station Volunteer',
  org: 'Election Commission of India',
  period: 'Sep 2024',
  description:
    'Assisted in election operations by supporting polling station activities, coordinating voter assistance, and ensuring a smooth and organized voting process while adhering to official election procedures.',
},
    {
  type: 'Research',
  title: 'Research Paper Author & Presenter',
  org: 'Pradnya International Journal of Multidisciplinary Research',
  period: '2023 – 2024',
  description:
    'Authored and presented a research paper on House Price Prediction using Machine Learning, exploring predictive analytics techniques and real-world applications of data-driven decision making.',
},
  ],

  achievements: [
    {
      category: 'Hackathon',
      title: 'Won 10+ Hackathon',
      org: 'Across India 2023 - 2026',
      description: 'Won over 10 hackathon all over India and have participated in many local, national and international hackthone .',
    },
    {
      category: 'Research Paper',
      title: 'Published Paper',
      org: 'International Journal Pradneya, 2023 - 2026',
      description: 'Published 3+ papers in internation journals.',
    },
    {
      category: 'Internship',
      title: 'Software Engineering Intern',
      org: 'Codesoft, Prodigy, 2023 - 2026',
      description: 'UI/UX software development intern.',
    },
  ],

  skills: [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis'] },
    { category: 'AI / ML', items: ['LangChain', 'scikit-learn', 'TensorFlow', 'OpenAI API', 'Pandas'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'AWS', 'Vercel'] },
  ],

  stats: [
    { label: 'Projects Built', value: 8 },
    { label: 'Hackathons', value: 5 },
    { label: 'Research Papers', value: 1 },
    { label: 'Certificates', value: 4 },
    { label: 'Technologies', value: 20 },
  ],

  links: {
    email: 'payalmahapatro07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/payal-mahapatro/',
    github: 'https://github.com/payalmahapatro',
    resume: '/resume.pdf',
  },
}
