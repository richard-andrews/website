export const profile = {
  name: 'Richard Andrews',
  title: 'Cloud Engineer II',
  company: 'Hewlett Packard Enterprise',
  location: 'Bristol, UK',
  email: 'richardxndrews@gmail.com',
  tagline:
    'Cloud engineer in building and owning the connectivity backbone linking thousands of enterprise storage devices to the cloud.',
  links: [
    { label: 'GitHub', href: 'https://github.com/richard-andrews' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/richard-andrews' },
    { label: 'richard-andrews.co.uk', href: 'https://richard-andrews.co.uk' },
  ],
}

export const stats = [
  { value: '1st', label: 'Class Hons. Bsc. Computer Science' },
  { value: '5', label: 'Years of Experience' },
]

export const about = `Cloud Engineer II at Hewlett Packard Enterprise, where I've spent the last five
years as sole engineering owner of a GoLang microservice connecting roughly 30,000 customer storage
devices to HPE GreenLake cloud. I care about secure-by-design systems, pragmatic architecture
decisions, and building things that stay reliable long after they ship. Outside of engineering, I
lead HPE Bristol's intern programme and HPE Bristol's Pride employee resource group.`

export const experience = {
  company: 'Hewlett Packard Enterprise',
  role: 'Cloud Engineer II',
  location: 'Bristol, UK',
  start: 'Jul 2021',
  end: 'Present',
  projects: [
    {
      name: 'HPE GreenLake Cloud Microservices',
      highlights: [
        // 'Sole engineering owner of the cloud tunnel microservice connecting ~30,000 customer storage devices to HPE GreenLake across four AWS production clusters - full lifecycle from features to security compliance and production support.',
        // 'Architected the service\'s communication layer: mTLS-secured REST at the cluster boundary, gRPC and Kafka/NATS internally, all secured intra-cluster via Istio mutual TLS.',
        // 'Led migration of the service\'s CI/CD pipeline from self-hosted Jenkins to GitHub Actions, coordinating across teams to handle its reach into customer environments.',
        // 'Redesigned the public key publishing mechanism, moving storage from Redis to PostgreSQL for better cost efficiency and scalability.',
        // 'Led FIPS compliance work across a server, a 200-service client library, and an embedded device library - replacing non-compliant cryptography while preserving backwards compatibility.',
      ],
    },
    {
      name: 'AI Support Ticket Analysis Tool',
      highlights: [
        // 'Built the data pipeline for an internal AI tool analysing HPE support tickets, using PySpark and Trino-backed data lakes to structure raw ticket data.',
        // 'Independently designed and built a GraphQL server, following clean architecture principles, to expose processed data to the tool\'s LLM layer.',
      ],
    },
    {
      name: 'HPE StoreOnce Secondary Storage Array',
      highlights: [
        // 'Implemented the tunnel device library within StoreOnce, extending secure HPE GreenLake connectivity to the platform.',
        // 'Built storage capacity monitoring and overflow alerting, giving customers visibility before capacity thresholds are breached.',
      ],
    },
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
    role: 'Pride ERG Lead & Site Ambassador',
    period: 'Jul 2023 - Jul 2026',
    description:
      'Led HPE Bristol\'s Pride employee resource group for three years, organising LGBTQ+ awareness events and leading the site\'s first-ever attendance at Bristol Pride in its 12-year history.',
  },
  {
    role: 'Charity Lead, Off the Record Bristol',
    period: 'Nov 2023 - Oct 2024',
    description:
      'Led HPE Bristol\'s partnership with a youth mental health charity, raising over £26,000 through a self-organised programme of half marathons, office tournaments, and bake sales.',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['GoLang', 'Python', 'Java'],
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

export const education = {
  institution: 'University of Bath',
  award: '1st Class Honours BSc Computer Science with Industrial Placement',
  location: 'Bath, UK',
  start: 'Sep 2019',
  end: 'Jul 2023',
}
