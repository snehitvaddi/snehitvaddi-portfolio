export interface Experience {
  id: string
  title: string
  company: string
  companyUrl?: string
  location: string
  type: 'full-time' | 'internship' | 'contract' | 'research'
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 'modmed',
    title: 'AI Engineer',
    company: 'ModMed',
    companyUrl: 'https://modmed.com',
    location: 'USA',
    type: 'full-time',
    startDate: 'Feb 2025',
    endDate: 'Present',
    description: [
      'Shipped clinical ambient AI Scribe for 5,000+ providers, automating 70% of documentation, reducing note-taking from 45 to 3 minutes',
      'Building AI Fax leveraging VLMs (Qwen2-VL) & OCR, cutting fax extraction costs from $400K to $20K/month',
      'Developed and opensourced MEDHALT, a hallucination detection suite with DeBERTa NER achieving 92% accuracy vs GPT-4',
      'Architected multi-agent RAG with LoRA finetuned SLMs, reducing onboarding from 3 weeks to 5 days',
    ],
    technologies: ['Python', 'VLMs', 'RAG', 'DeBERTa', 'Whisper', 'LangChain'],
  },
  {
    id: 'uf-gra',
    title: 'Graduate Research Assistant',
    company: 'University of Florida',
    companyUrl: 'https://ufl.edu',
    location: 'Gainesville, FL',
    type: 'research',
    startDate: 'Feb 2023',
    endDate: 'Dec 2024',
    description: [
      'Built explainable AI models for agricultural applications using YOLOv8 and fluorescence imaging',
      'Published research on E.coli detection in citrus at SPIE Conference 2024',
      'Developed computer vision models for food safety and quality assessment',
      'Collaborated with cross-functional teams on NIH-funded research projects',
    ],
    technologies: ['Python', 'YOLOv8', 'TensorFlow', 'XAI', 'Computer Vision'],
  },
  {
    id: 'geospider',
    title: 'AI Software Developer Intern',
    company: 'GeoSpider',
    location: 'Remote',
    type: 'internship',
    startDate: 'May 2024',
    endDate: 'July 2024',
    description: [
      'Developed GenAI-powered features using LangChain and RAG architectures',
      'Built document processing pipelines for geospatial data extraction',
      'Implemented LLM-based solutions for automated report generation',
      'Optimized API performance and reduced latency by 40%',
    ],
    technologies: ['Python', 'LangChain', 'RAG', 'AWS', 'FastAPI'],
  },
  {
    id: 'att',
    title: 'Software Data Engineer',
    company: 'AT&T',
    companyUrl: 'https://att.com',
    location: 'Bangalore, India',
    type: 'full-time',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Engineered BERT+XGBoost intent classifier (88% F1) predicting technician requirements, reducing dispatches by 12k/year',
      'Implemented real-time anomaly detection with Elasticsearch and Word2Vec embeddings',
      'Optimized PySpark/Delta Lake pipelines processing 1M+ logs/day 30% faster, saving $2M annually',
      'Designed Azure Synapse star-schema data warehouse, cutting query latency for 20+ analyst teams',
    ],
    technologies: ['Python', 'PySpark', 'BERT', 'Azure', 'Delta Lake', 'Elasticsearch'],
  },
]

export const education = [
  {
    id: 'uf',
    degree: 'Master of Science in Computer Science',
    school: 'University of Florida',
    location: 'Gainesville, FL',
    year: '2023 - 2025',
    gpa: '3.8/4.0',
    focus: 'Machine Learning, Computer Vision, Data Engineering',
  },
  {
    id: 'gitam',
    degree: 'Bachelor of Technology in Computer Science',
    school: 'GITAM University',
    location: 'Visakhapatnam, India',
    year: '2017 - 2021',
    focus: 'Software Engineering, Data Science',
  },
]
