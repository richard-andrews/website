export const profile = {
  name: 'Richard Andrews',
  title: 'Cloud Engineer II',
  company: 'Hewlett Packard Enterprise',
  location: 'Bristol, UK',
  email: 'richardxndrews@gmail.com',
  tagline: `I'm a Bristol-based cloud engineer, building and owning the connectivity backbone linking
thousands of enterprise storage devices to the cloud. I care about secure-by-design systems and
pragmatic architecture - decisions that keep things reliable long after they ship. Outside of my day
job, I lead an intern programme and a Pride employee network.`,
  links: [
    { label: 'GitHub', href: 'https://github.com/richard-andrews' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/richard-andrews' },
    { label: 'richard-andrews.co.uk', href: 'https://richard-andrews.co.uk' },
  ],
}

export const stats = [
  { value: '1st', label: 'Class Hons. BSc. Computer Science' },
  { value: '5', label: 'Years of Experience' },
]

export const experience = {
  company: 'Hewlett Packard Enterprise',
  role: 'Cloud Engineer II',
  location: 'Bristol, UK',
  start: 'Jul 2021',
  end: 'Present',
  summary: `I joined HPE as a placement intern during my degree and came back full-time as a graduate
engineer after finishing at Bath. Since then I've grown into a Cloud Engineer II role, owning a
production Go microservice that connects tens of thousands of customer devices to HPE's GreenLake
cloud platform.`,
  highlights: [
    "Sole engineering owner of the cloud tunnel microservice connecting ~30,000 customer storage devices to HPE GreenLake across four AWS production clusters - full lifecycle from features to security compliance and production support.",
    "Architected the service's communication layer: mTLS-secured REST at the cluster boundary, gRPC and Kafka/NATS internally, all secured intra-cluster via Istio mutual TLS.",
    "Led migration of the service's CI/CD pipeline from self-hosted Jenkins to GitHub Actions, coordinating across teams to handle its reach into customer environments.",
    'Redesigned the public key publishing mechanism, moving storage from Redis to PostgreSQL for better cost efficiency and scalability.',
    "Led FIPS compliance work across a server, a 200-service client library, and an embedded device library - replacing non-compliant cryptography while preserving backwards compatibility.",
  ],
}

export const leadership = [
  {
    role: 'Intern Lead',
    period: 'Jul 2024 - Present',
    description:
      'Pastoral lead and primary point of contact for HPE Bristol\'s cohort of ~10 industrial placement students a year - owning recruitment, wellbeing, and a full programme of events on a voluntary basis alongside a full-time engineering role.',
  },
  {
    role: 'Pride ERG Site Ambassador',
    period: 'Jul 2023 - Jul 2026',
    description:
      'Led HPE Bristol\'s Pride employee resource group for three years, organising LGBTQ+ awareness events and leading the site\'s first-ever attendance at Bristol Pride.',
  },
  {
    role: 'Site Charity Lead',
    period: 'Nov 2023 - Oct 2024',
    description:
      'Led HPE Bristol\'s partnership with Off The Record Bristol, a youth mental health charity. Raising over £26,000 through a self-organised programme of volunteering opportunities, and fundraising events.',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['GoLang', 'Python'],
  },
  {
    category: 'Cloud & Infra',
    items: ['AWS', 'Kubernetes', 'Helm', 'Skaffold', 'Docker', 'Istio'],
  },
  {
    category: 'Data Systems',
    items: ['PostgreSQL', 'Redis', 'Kafka', 'NATS', 'Apache Spark', 'Trino'],
  },
  {
    category: 'APIs & Architecture',
    items: ['REST', 'gRPC', 'GraphQL', 'Microservices', 'Clean Architecture'],
  },
  {
    category: 'DevOps & Observability',
    items: ['GitHub Actions', 'Jenkins', 'Grafana', 'Humio', 'Trivy'],
  },
  {
    category: 'Security',
    items: ['mTLS', 'FIPS Compliance', 'CVE Remediation'],
  },
]

// Add another entry to this array for further education, further
// qualifications, etc. - the section renders one card per entry.
export const education = [
  {
    institution: 'University of Bath',
    award: '1st Class Honours BSc Computer Science with Industrial Placement',
    location: 'Bath, UK',
    start: 'Sep 2019',
    end: 'Jul 2023',
  },
  {
    institution: 'Colchester Royal Grammar School',
    award: 'A*AA in A Levels (Physics, Maths, Computing). 11 A*-B in GCSEs.',
    location: 'Colchester, UK',
    start: 'Sep 2012',
    end: 'Jul 2019',
  },
]

export const hobbies = [
  { label: 'Running', image: '/hobbies/running.jpg', icon: 'running' },
  { label: 'Hiking', image: '/hobbies/hiking.jpg', icon: 'hiking' },
  { label: 'Photography', image: '/hobbies/photography.jpg', icon: 'photography' },
  { label: 'Video Games', image: '/hobbies/video-games.jpg', icon: 'video-games' },
  { label: 'Board Games', image: '/hobbies/board-games.jpg', icon: 'board-games' },
]
