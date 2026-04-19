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
    id: 'ecoli-food-processing',
    title:
      'Detecting Escherichia coli on Conventional Food Processing Surfaces Using UV-C Fluorescence Imaging and Deep Learning',
    venue: 'Applied Sciences',
    year: 2026,
    status: 'published',
    tags: ['Computer Vision', 'Food Safety', 'UV-C Imaging'],
  },
  {
    id: 'ecoli-plants-leaf',
    title:
      'Detecting Escherichia coli Contamination on Plant Leaf Surfaces Using UV-C Fluorescence Imaging and Deep Learning',
    venue: 'Plants',
    year: 2025,
    status: 'published',
    firstAuthor: true,
    relatedCount: 4,
    tags: ['Computer Vision', 'YOLOv11', 'Agriculture', 'Food Safety'],
  },
  {
    id: 'pothole-classification',
    title: 'An Effective Model for Pothole Classification and Admin Alerting System',
    venue: 'IEEE ICCMST',
    year: 2023,
    status: 'published',
    tags: ['Computer Vision', 'Classification', 'Edge AI'],
  },
]
