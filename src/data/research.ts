export interface Publication {
  id: string
  title: string
  venue: string
  year: number
  status: 'published' | 'under-review'
  firstAuthor?: boolean
  link?: string
  relatedCount?: number
  tags: string[]
}

export const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=2qTPJ8UAAAAJ&hl=en'

export const publications: Publication[] = [
  {
    id: 'small-models-legal',
    title: 'Can Small Models Reason About Legal Documents? A Comparative Study',
    venue: 'arXiv',
    year: 2026,
    status: 'under-review',
    link: 'https://arxiv.org/abs/2603.25944',
    tags: ['LLMs', 'Reasoning', 'Legal AI', 'Small Models'],
  },
  {
    id: 'hallucination-neurons',
    title: 'Do Hallucination Neurons Generalize? Evidence from Cross-Domain Transfer in LLMs',
    venue: 'arXiv',
    year: 2026,
    status: 'under-review',
    tags: ['LLMs', 'Hallucination', 'Interpretability'],
  },
  {
    id: 'ecoli-plants-leaf',
    title:
      'Detecting Escherichia coli Contamination on Plant Leaf Surfaces Using UV-C Fluorescence Imaging and Deep Learning',
    venue: 'Plants',
    year: 2025,
    status: 'published',
    firstAuthor: true,
    relatedCount: 5,
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2qTPJ8UAAAAJ&sortby=pubdate&citation_for_view=2qTPJ8UAAAAJ:IjCSPb-OGe4C',
    tags: ['Computer Vision', 'YOLOv11', 'Agriculture', 'Food Safety'],
  },
  {
    id: 'pothole-classification',
    title:
      'An Effective Model for Smartphone-Based Pothole Classification and Admin Alerting System',
    venue: 'IEEE ICCMST',
    year: 2023,
    status: 'published',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2qTPJ8UAAAAJ&sortby=pubdate&citation_for_view=2qTPJ8UAAAAJ:d1gkVwhDpl0C',
    tags: ['Computer Vision', 'Edge AI', 'Mobile'],
  },
  {
    id: 'ecg-heart-attack',
    title: 'ECG-Based Early Heart Attack Prediction Using Neural Networks',
    venue: 'IEEE',
    year: 2022,
    status: 'published',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2qTPJ8UAAAAJ&sortby=pubdate&citation_for_view=2qTPJ8UAAAAJ:u-x6o8ySG0sC',
    tags: ['Healthcare AI', 'Neural Networks', 'Time Series', 'Cardiology'],
  },
]
