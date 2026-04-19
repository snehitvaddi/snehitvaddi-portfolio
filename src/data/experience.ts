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
    title: 'AI Engineer — GenAI Applications & LLM Systems',
    company: 'ModMed',
    companyUrl: 'https://modmed.com',
    location: 'Boca Raton, FL (Remote)',
    type: 'full-time',
    startDate: 'Feb 2025',
    endDate: 'Apr 2026',
    description: [
      'Shipped Clinical Ambient AI Scribe serving 15,000+ providers across 11 specialties (400K+ daily encounters), automating 70% of documentation via real-time transcription + LLM SOAP generation',
      'Built agentic document pipeline (OpenAI Agents SDK + fine-tuned Qwen2-VL VLM) routing 10M+ clinical pages/month, replacing a $400K/month vendor with a $20K in-house system (95% cost reduction)',
      'Built Text2SQL + clinical knowledge graph over ModMed’s EHR warehouse (200+ tables, pgvector embeddings), cutting analyst request volume by 60%',
      'Architected production multi-agent RAG with LoRA-finetuned SLMs, hybrid pgvector + BM25 retrieval, and cross-encoder reranking — 94% retrieval precision across 50K+ clinical documents',
      'Open-sourced MEDHALT — clinical hallucination detection (DeBERTa NER + LLM-as-judge) achieving 92% accuracy vs. GPT-4, with MLflow tracking and golden-set regression testing',
      'Shipped LangChain/LangGraph/Claude monitoring framework for Scribe quality, cutting incident response to under 5 minutes with PHI-safe pipelines and prompt-injection filtering',
    ],
    technologies: [
      'Python',
      'LangChain',
      'LangGraph',
      'VLMs',
      'RAG',
      'pgvector',
      'Databricks',
      'Kubernetes',
      'MLflow',
    ],
  },
  {
    id: 'geospider',
    title: 'AI Software Developer Intern',
    company: 'GeoSpider AI',
    location: 'USA (Remote)',
    type: 'internship',
    startDate: 'May 2024',
    endDate: 'Jul 2024',
    description: [
      'Built LangGraph multi-agent RAG that autonomously resolved 65% of customer tickets across a 50K-doc knowledge base, with dynamic routing and LLM-as-judge scoring',
      'Built LLM-as-judge routing layer with dynamic few-shot prompting, improving helpfulness from 43% → 76% and relevance by 30%',
      'Designed FAISS + keyword hybrid search with semantic reranking — 92% recall@10, serving 150+ concurrent users via vLLM with 40% p95 latency reduction',
      'Implemented Redis-backed multi-turn agent memory and FastAPI inference gateway with fallback logic and structured logging',
    ],
    technologies: ['LangGraph', 'FAISS', 'vLLM', 'Redis', 'FastAPI', 'LLM-as-Judge'],
  },
  {
    id: 'uf-gra',
    title: 'Graduate Researcher, AI/ML',
    company: 'University of Florida',
    companyUrl: 'https://ufl.edu',
    location: 'Gainesville, FL',
    type: 'research',
    startDate: 'Feb 2023',
    endDate: 'Dec 2024',
    description: [
      'Developed hybrid YOLOv8-ViT model improving small-object detection by 15% with Grad-CAM / EigenCAM explainability. Published at SPIE 2025 and IEEE 2023; presented at both',
      'Built React dashboard with Grad-CAM visualizations replacing static PDF reports (adoption 15% → 85%). Prototyped CLIP-based multi-modal retrieval between lab images and research reports',
      'Automated model retraining via MLflow + GitHub Actions CI/CD, cutting deployment from 4 hours to 15 minutes',
    ],
    technologies: ['Python', 'YOLOv8', 'ViT', 'CLIP', 'MLflow', 'Grad-CAM'],
  },
  {
    id: 'att',
    title: 'Software Data Engineer',
    company: 'AT&T (via Accenture)',
    companyUrl: 'https://att.com',
    location: 'Bangalore, India',
    type: 'full-time',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Engineered BERT + XGBoost intent classifier (88% F1) predicting technician dispatch necessity — eliminated 12K unnecessary dispatches/year, saving $2M annually',
      'Built Elasticsearch + Word2Vec anomaly detection for network telemetry, cutting diagnosis time by 40% and Tier-2 escalations by 25%',
      'Optimized PySpark / Delta Lake pipelines processing 1M+ logs/day (30% latency reduction); designed Azure Synapse warehouse with dbt',
      'Built NLP ticket-categorization pipeline with fine-tuned BERT — 91% accuracy, 500K+ monthly interactions',
    ],
    technologies: [
      'Python',
      'PySpark',
      'BERT',
      'Azure Synapse',
      'Delta Lake',
      'Elasticsearch',
    ],
  },
]

export const education = [
  {
    id: 'uf',
    degree: 'Master of Science in Computer & Information Science',
    school: 'University of Florida',
    location: 'Gainesville, FL',
    year: '2023 - 2024',
    focus: 'Machine Learning, Computer Vision, Data Engineering',
  },
  {
    id: 'gitam',
    degree: 'Bachelor of Technology in Computer Science',
    school: 'GITAM University',
    location: 'Visakhapatnam, India',
    year: '2017 - 2021',
    gpa: '3.9/4.0',
    focus: 'Software Engineering, Data Science',
  },
]
