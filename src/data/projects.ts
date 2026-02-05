export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  stars: number
  date: string
  featured: boolean
  category: 'genai' | 'deeplearning' | 'computervision' | 'data' | 'web' | 'mobile' | 'research' | 'agentic' | 'tools'
  status?: 'live' | 'building' | 'coming-soon'
}

export const projects: Project[] = [
  // ============================================
  // 🤖 AGENTIC AI (New & Coming Soon)
  // ============================================
  {
    id: 'ai-influencer-bot',
    title: 'AI Influencer Bot',
    description: 'AI-powered social media bot that auto-posts AI news from HackerNews. Autonomous content curation and posting.',
    image: '/projects/ai-influencer-bot.png',
    tags: ['Python', 'LLM', 'Automation', 'Social Media'],
    github: 'https://github.com/snehitvaddi/ai-influencer-bot',
    stars: 0,
    date: '2026',
    featured: true,
    category: 'agentic',
    status: 'live'
  },
  {
    id: 'mcp-research-agent',
    title: 'MCP Research Agent',
    description: 'Building an MCP server for autonomous research - fetches papers, summarizes, and writes literature reviews.',
    image: '/projects/mcp-research-agent.png',
    tags: ['MCP', 'Claude', 'Research', 'Agentic'],
    stars: 0,
    date: '2026',
    featured: true,
    category: 'agentic',
    status: 'coming-soon'
  },
  {
    id: 'crew-ai-startup-analyst',
    title: 'CrewAI Startup Analyst',
    description: 'Multi-agent system using CrewAI to analyze startups - market research, competitor analysis, and investment memos.',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=CrewAI+Analyst',
    tags: ['CrewAI', 'Multi-Agent', 'LangGraph', 'Analysis'],
    stars: 0,
    date: '2026',
    featured: true,
    category: 'agentic',
    status: 'coming-soon'
  },

  // ============================================
  // 🧠 GENERATIVE AI & LLMs
  // ============================================
  {
    id: 'interview-gpt',
    title: 'InterviewGPT',
    description: 'Real-time interview answering app. Listens to your system audio and generates answers on the fly. Your secret weapon.',
    image: 'https://github.com/snehitvaddi/InterviewGPT/blob/main/ApplicationDemo.gif?raw=true',
    tags: ['Python', 'ChatGPT', 'Audio', 'Real-time'],
    github: 'https://github.com/snehitvaddi/InterviewGPT',
    stars: 17,
    date: '2023',
    featured: true,
    category: 'genai',
    status: 'live'
  },
  {
    id: 'rag-anything',
    title: 'RAG-Anything',
    description: 'Ask any question to your documents, PDFs, or SQL databases. One RAG to rule them all.',
    image: 'https://github.com/snehitvaddi/RAG-Anything/blob/main/RAG-Anything.jpg?raw=true',
    tags: ['Python', 'LangChain', 'RAG', 'GenAI'],
    github: 'https://github.com/snehitvaddi/RAG-Anything',
    stars: 4,
    date: '2024',
    featured: true,
    category: 'genai',
    status: 'live'
  },
  {
    id: 'webrag-mini',
    title: 'WebRAG-mini',
    description: 'Local RAG application that answers queries from files, web pages, and SQL tables. Your data, your rules.',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=WebRAG',
    tags: ['Python', 'LangChain', 'RAG', 'Streamlit'],
    github: 'https://github.com/snehitvaddi/WebRAG-mini',
    stars: 0,
    date: '2024',
    featured: false,
    category: 'genai',
    status: 'live'
  },
  {
    id: 'llama-idioms',
    title: 'LLaMA2 Idioms Fine-tuning',
    description: 'Fine-tuned LLaMA2 7B to suggest contextually relevant idioms using PEFT and 4-bit quantization.',
    image: 'https://placehold.co/600x400/f97316/ffffff?text=LLaMA+Idioms',
    tags: ['Python', 'LLaMA2', 'PEFT', 'Quantization'],
    github: 'https://github.com/snehitvaddi/Llama2_Idioms_4Bit',
    stars: 0,
    date: '2024',
    featured: false,
    category: 'genai',
    status: 'live'
  },
  {
    id: 'youtube-answerer',
    title: 'YoutubeAnswererAI',
    description: 'LangChain model to answer any question specific to a given YouTube video. Perfect for research.',
    image: 'https://placehold.co/600x400/ef4444/ffffff?text=YouTube+AI',
    tags: ['Python', 'LangChain', 'YouTube', 'QA'],
    github: 'https://github.com/snehitvaddi/YoutubeAnswererAI',
    stars: 0,
    date: '2023',
    featured: false,
    category: 'genai',
    status: 'live'
  },
  {
    id: 'vision-ai-checkup',
    title: 'Vision AI Checkup',
    description: 'Take your LLM to the optometrist. Evaluating vision capabilities of multimodal models.',
    image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Vision+Checkup',
    tags: ['Python', 'GPT-4V', 'Evaluation', 'Multimodal'],
    github: 'https://github.com/snehitvaddi/vision-ai-checkup',
    stars: 0,
    date: '2025',
    featured: false,
    category: 'genai',
    status: 'live'
  },
  {
    id: 'medhalt',
    title: 'MEDHALT',
    description: 'Framework for evaluating AI-generated medical SOAP notes. Detects hallucinations and validates clinical accuracy.',
    image: '/projects/medhalt.png',
    tags: ['Python', 'NER', 'LLM', 'Healthcare AI'],
    github: 'https://github.com/snehitvaddi/MEDHALT',
    stars: 1,
    date: '2025',
    featured: true,
    category: 'genai',
    status: 'live'
  },
  {
    id: 'portfolio-gen',
    title: 'PortfolioGen',
    description: 'Create a fire portfolio in 3 mins! Connect LinkedIn, GitHub, or resume & let AI magic happen.',
    image: 'https://placehold.co/600x400/a855f7/ffffff?text=PortfolioGen',
    tags: ['Python', 'GenAI', 'Automation', 'Jupyter'],
    github: 'https://github.com/snehitvaddi/PortfolioGen',
    stars: 1,
    date: '2025',
    featured: false,
    category: 'genai',
    status: 'live'
  },

  // ============================================
  // 👁️ COMPUTER VISION & DEEP LEARNING
  // ============================================
  {
    id: 'deepfake-wave2lip',
    title: 'Deepfake Wave2Lip',
    description: 'A deep learning model to lip-sync any video with any audio using GAN architecture. Over 123 stars!',
    image: 'https://github.com/snehitvaddi/Deepfake-using-Wave2Lip/raw/main/Audio%20and%20Video/0-video.gif',
    tags: ['Python', 'GAN', 'Deep Learning', 'Computer Vision'],
    github: 'https://github.com/snehitvaddi/Deepfake-using-Wave2Lip',
    stars: 123,
    date: '2021',
    featured: true,
    category: 'deeplearning',
    status: 'live'
  },
  {
    id: 'self-driving-car',
    title: 'Self-Driving Car Deep Learning',
    description: 'Predicting steering angles for autonomous driving using CNNs. Inspired by NVIDIA\'s End-to-End Learning paper.',
    image: 'https://github.com/snehitvaddi/SelfDriving-Car_Deep-Learning/blob/master/Selfdriving-output.gif?raw=true',
    tags: ['Python', 'CNN', 'TensorFlow', 'Autonomous'],
    github: 'https://github.com/snehitvaddi/SelfDriving-Car_Deep-Learning',
    stars: 99,
    date: '2021',
    featured: true,
    category: 'deeplearning',
    status: 'live'
  },
  {
    id: 'deepfake-first-order',
    title: 'Deep Fake First Order Model',
    description: 'Implementation of First Order Motion Model for making realistic deepfakes. Featured by Two Minute Papers!',
    image: 'https://github.com/snehitvaddi/Deep-Fake_First_Order_Model/raw/main/sup-mat/vox-teaser.gif',
    tags: ['Python', 'Computer Vision', 'Motion Transfer', 'GAN'],
    github: 'https://github.com/snehitvaddi/Deep-Fake_First_Order_Model',
    stars: 65,
    date: '2020',
    featured: true,
    category: 'computervision',
    status: 'live'
  },
  {
    id: 'face-mask-detection',
    title: 'Face Mask Detection',
    description: 'Real-time face mask detection using deep learning. Works with images, videos, and live camera feeds.',
    image: 'https://github.com/snehitvaddi/FaceMask-Detection-using-Deeplearning/raw/master/outputs/Capture.PNG',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'Real-time'],
    github: 'https://github.com/snehitvaddi/FaceMask-Detection-using-Deeplearning',
    stars: 64,
    date: '2020',
    featured: true,
    category: 'computervision',
    status: 'live'
  },
  {
    id: 'yolov3-fire-detection',
    title: 'YOLOv3 Fire Detection',
    description: 'Cloud-based wildfire detection system using custom-trained YOLOv3. Real-time fire detection in video streams.',
    image: 'https://github.com/snehitvaddi/YOLOv3-Cloud-Based-Fire-Detection/blob/master/UI.PNG?raw=true',
    tags: ['Python', 'YOLOv3', 'Object Detection', 'Cloud'],
    github: 'https://github.com/snehitvaddi/YOLOv3-Cloud-Based-Fire-Detection',
    stars: 52,
    date: '2021',
    featured: true,
    category: 'computervision',
    status: 'live'
  },
  {
    id: 'intruder-detection',
    title: 'Intruder Detection System',
    description: 'Automatically detects unknown faces and sends email alerts. Perfect for home security applications.',
    image: '/projects/intruder-detection.png',
    tags: ['Python', 'OpenCV', 'Face Recognition', 'Email API'],
    github: 'https://github.com/snehitvaddi/Intruder-Detection-and-Automatic-Email-Alerting-system',
    stars: 48,
    date: '2020',
    featured: false,
    category: 'computervision',
    status: 'live'
  },
  {
    id: 'yolov3-object-tracking',
    title: 'YOLOv3 Object Tracking',
    description: 'Real-time object tracking combining YOLOv3 with Deep SORT algorithm.',
    image: 'https://github.com/snehitvaddi/YOLOv3-Object-Tracking/raw/master/data/video/traffic-result-gif.gif',
    tags: ['Python', 'YOLOv3', 'Deep SORT', 'TensorFlow'],
    github: 'https://github.com/snehitvaddi/YOLOv3-Object-Tracking',
    stars: 35,
    date: '2021',
    featured: false,
    category: 'computervision',
    status: 'live'
  },
  {
    id: 'sudoku-solver',
    title: 'Real-Time Sudoku Solver',
    description: 'Point your camera at a Sudoku puzzle and watch it solve instantly. OpenCV + Keras magic.',
    image: 'https://placehold.co/600x400/14b8a6/ffffff?text=Sudoku+Solver',
    tags: ['Python', 'OpenCV', 'Keras', 'Real-time'],
    github: 'https://github.com/snehitvaddi/Real-Time-Sudoku-Solver-OpenCV-and-Keras',
    stars: 7,
    date: '2021',
    featured: false,
    category: 'computervision',
    status: 'live'
  },
  {
    id: 'license-plate',
    title: 'License Plate Detection',
    description: 'AI-powered desktop app for detecting vehicle number plates and extracting text.',
    image: 'https://placehold.co/600x400/6366f1/ffffff?text=License+Plate',
    tags: ['Python', 'OCR', 'Object Detection', 'Desktop'],
    github: 'https://github.com/snehitvaddi/License_plate_Detection_and_Text_Extraction',
    stars: 1,
    date: '2021',
    featured: false,
    category: 'computervision',
    status: 'live'
  },
  {
    id: 'thin-plate-spline',
    title: 'Thin Plate Spline Motion Model',
    description: 'CVPR 2022 implementation for image animation using thin-plate spline motion model.',
    image: 'https://placehold.co/600x400/a855f7/ffffff?text=TPS+Motion',
    tags: ['Python', 'CVPR', 'Animation', 'Deep Learning'],
    github: 'https://github.com/snehitvaddi/Thin-Plate-Spline-Motion-Model',
    stars: 0,
    date: '2022',
    featured: false,
    category: 'computervision',
    status: 'live'
  },

  // ============================================
  // 🏥 MEDICAL AI / HEALTHCARE
  // ============================================
  {
    id: 'skin-disease-detection',
    title: 'Skin Disease Detection',
    description: 'CNN-based detection of 5 types of skin diseases from images. Healthcare AI that matters.',
    image: 'https://github.com/snehitvaddi/Skin-Disease-Detection-through-Image-Analysis/raw/main/p-1.PNG',
    tags: ['Python', 'CNN', 'Medical AI', 'Healthcare'],
    github: 'https://github.com/snehitvaddi/Skin-Disease-Detection-through-Image-Analysis',
    stars: 18,
    date: '2021',
    featured: false,
    category: 'deeplearning',
    status: 'live'
  },
  {
    id: 'corona-prediction',
    title: 'COVID-19 X-Ray Prediction',
    description: 'Predicting COVID, Pneumonia, and Healthy cases from X-ray scans using ResNet50 and VGG16.',
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=COVID+X-Ray',
    tags: ['Python', 'ResNet50', 'VGG16', 'Medical'],
    github: 'https://github.com/snehitvaddi/NovelCorona-Pneumonia-Prediction_V2',
    stars: 8,
    date: '2020',
    featured: false,
    category: 'deeplearning',
    status: 'live'
  },
  {
    id: 'lung-cancer-detection',
    title: 'Lung Cancer Detection',
    description: 'Detecting lung cancer from radiology images using CNN. Early detection saves lives.',
    image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Lung+Cancer',
    tags: ['Python', 'CNN', 'Medical AI', 'Radiology'],
    github: 'https://github.com/snehitvaddi/Lung-Cancer-detection-from-Radiology-Images-CNN',
    stars: 11,
    date: '2021',
    featured: false,
    category: 'deeplearning',
    status: 'live'
  },
  {
    id: 'brain-tumor',
    title: 'Brain Tumor Classification',
    description: 'Multi-class brain tumor classification (meningioma, glioma, pituitary) with 90% accuracy.',
    image: 'https://placehold.co/600x400/a855f7/ffffff?text=Brain+Tumor',
    tags: ['Python', 'Deep Learning', 'Medical AI', 'Classification'],
    github: 'https://github.com/snehitvaddi/BrainTumorClassification',
    stars: 0,
    date: '2022',
    featured: false,
    category: 'deeplearning',
    status: 'live'
  },
  {
    id: 'citrus-ecoli',
    title: 'Citrus E.coli FluoroNet',
    description: 'Deep learning + fluorescence imaging to detect E.coli on citrus. Published at SPIE 2024!',
    image: 'https://placehold.co/600x400/22c55e/ffffff?text=FluoroNet',
    tags: ['Python', 'YOLOv8', 'XAI', 'Research'],
    github: 'https://github.com/snehitvaddi/Citrus-Ecoli-FluoroNet',
    stars: 0,
    date: '2024',
    featured: true,
    category: 'research',
    status: 'live'
  },

  // ============================================
  // 📊 DATA ENGINEERING
  // ============================================
  {
    id: 'unitrends',
    title: 'UniTrends',
    description: 'Analyzed VISA group chats using Kafka & AWS to refine YouTube content. Result: 10K subscribers!',
    image: 'https://github.com/snehitvaddi/UniTrends/raw/main/Project%20Flow.png',
    tags: ['Python', 'Kafka', 'AWS', 'Data Engineering'],
    github: 'https://github.com/snehitvaddi/UniTrends',
    stars: 0,
    date: '2023',
    featured: true,
    category: 'data',
    status: 'live'
  },
  {
    id: 'daily-job-analysis',
    title: 'Daily Job Market Analysis',
    description: 'Automated pipeline analyzing daily job market trends. Stay ahead of the hiring game.',
    image: 'https://placehold.co/600x400/6366f1/ffffff?text=Job+Analysis',
    tags: ['Python', 'ETL', 'Analysis', 'Automation'],
    github: 'https://github.com/snehitvaddi/Daily-Job-Market-Analysis-Pipeline',
    stars: 1,
    date: '2024',
    featured: false,
    category: 'data',
    status: 'live'
  },
  {
    id: 'azure-olympics',
    title: 'Azure Olympics Analysis',
    description: 'End-to-end data engineering project analyzing Olympics data on Azure.',
    image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Azure+Olympics',
    tags: ['Azure', 'Data Factory', 'Databricks', 'Analytics'],
    github: 'https://github.com/snehitvaddi/AzureOlympicsAnalysis',
    stars: 0,
    date: '2023',
    featured: false,
    category: 'data',
    status: 'live'
  },
  {
    id: 'linkedin-jobhunt',
    title: 'LinkedIn Job Hunter',
    description: 'Python webscraper for LinkedIn jobs. Simplifies the hunt for ML/Data Engineering roles.',
    image: 'https://placehold.co/600x400/0077b5/ffffff?text=LinkedIn+Jobs',
    tags: ['Python', 'Web Scraping', 'Automation', 'Jobs'],
    github: 'https://github.com/snehitvaddi/linkedin-jobhunt-ML-DataEngg',
    stars: 0,
    date: '2024',
    featured: false,
    category: 'data',
    status: 'live'
  },
  {
    id: 'img2table',
    title: 'Img2Table Pipeline',
    description: 'Extract tables from images and convert to structured data. Document processing made easy.',
    image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Img2Table',
    tags: ['Python', 'OCR', 'Table Extraction', 'Pipeline'],
    github: 'https://github.com/snehitvaddi/Img2Table-Pipeline',
    stars: 0,
    date: '2023',
    featured: false,
    category: 'data',
    status: 'live'
  },

  // ============================================
  // 🌐 WEB & MOBILE APPS
  // ============================================
  {
    id: 'finetune-resume',
    title: 'FineTune Resume',
    description: 'AI-powered resume optimizer that tailors your resume to job descriptions. Used by thousands of job seekers.',
    image: '/projects/finetune-resume.png',
    tags: ['Next.js', 'AI', 'LLM', 'Resume'],
    demo: 'https://finetuneresume.app/',
    stars: 0,
    date: '2025',
    featured: true,
    category: 'web',
    status: 'live'
  },
  {
    id: 'resume2portfolio',
    title: 'Resume2Portfolio',
    description: 'Transform your resume into a beautiful portfolio website in minutes. No coding required.',
    image: '/projects/resume2portfolio.png',
    tags: ['Next.js', 'AI', 'Automation', 'Portfolio'],
    demo: 'https://www.resume2portfolio.com/',
    stars: 0,
    date: '2025',
    featured: true,
    category: 'web',
    status: 'live'
  },
  {
    id: 'whatsapp-r2park',
    title: 'WhatsApp R2Park',
    description: 'WhatsApp bot for parking management. Automated notifications and reminders for your parking spot.',
    image: '/projects/whatsapp-r2park.png',
    tags: ['Node.js', 'WhatsApp API', 'Automation', 'Bot'],
    github: 'https://github.com/snehitvaddi/whatsapp-r2park',
    stars: 0,
    date: '2026',
    featured: true,
    category: 'web',
    status: 'live'
  },
  {
    id: 'eat-or-nahh',
    title: 'EatOrNahh',
    description: 'iOS app that helps indecisive diners choose what to eat using AI menu analysis. No more "I don\'t know"!',
    image: '/projects/eat-or-nahh.png',
    tags: ['Swift', 'iOS', 'AI', 'LLM'],
    github: 'https://github.com/snehitvaddi/EatOrNahh',
    stars: 0,
    date: '2026',
    featured: true,
    category: 'mobile',
    status: 'live'
  },
  {
    id: 'hackswipe',
    title: 'HackSwipe',
    description: 'Tinder-style app for discovering winning hackathon projects. Swipe through 220+ projects with YouTube demos.',
    image: 'https://github.com/snehitvaddi/hackswipe/raw/main/HackSwipe%20UI.png',
    tags: ['JavaScript', 'Web App', 'Devpost', 'UI/UX'],
    github: 'https://github.com/snehitvaddi/hackswipe',
    stars: 0,
    date: '2026',
    featured: true,
    category: 'web',
    status: 'live'
  },
  {
    id: 'h1b-wage-finder',
    title: 'H1B Wage Finder',
    description: 'Find lowest H1B prevailing wages for your occupation across US metros. Better wages = better approval!',
    image: '/projects/h1b-wage-finder.png',
    tags: ['Python', 'Data Analysis', 'Immigration', 'Streamlit'],
    github: 'https://github.com/snehitvaddi/h1b-wage-finder',
    stars: 1,
    date: '2026',
    featured: true,
    category: 'web',
    status: 'live'
  },
  {
    id: 'pothole-reporter',
    title: 'The Pothole Reporter',
    description: 'Flutter app to capture potholes and alert authorities. Uses TensorFlow Lite for on-device detection.',
    image: 'https://placehold.co/600x400/ef4444/ffffff?text=Pothole+App',
    tags: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase'],
    github: 'https://github.com/snehitvaddi/ThePotholeReporter-Flutter-App',
    stars: 0,
    date: '2022',
    featured: false,
    category: 'mobile',
    status: 'live'
  },
  {
    id: 'buy-ml-project',
    title: 'BuyMLProject.com',
    description: 'Marketplace for ML projects and tutorials. Helping students learn by doing.',
    image: 'https://placehold.co/600x400/6366f1/ffffff?text=BuyMLProject',
    tags: ['TypeScript', 'Next.js', 'E-commerce', 'ML'],
    github: 'https://github.com/snehitvaddi/BuyMLProject.com',
    demo: 'https://buymlproject.com',
    stars: 0,
    date: '2025',
    featured: false,
    category: 'web',
    status: 'live'
  },
  {
    id: 'reactive-resume',
    title: 'Reactive Resume',
    description: 'Privacy-first, open-source resume builder. Completely secure, customizable, and free forever.',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Resume+Builder',
    tags: ['TypeScript', 'React', 'Open Source', 'Privacy'],
    github: 'https://github.com/snehitvaddi/Reactive-Resume',
    stars: 0,
    date: '2026',
    featured: false,
    category: 'web',
    status: 'live'
  },
  {
    id: 'whatsapp-r2park',
    title: 'WhatsApp R2Park Bot',
    description: 'WhatsApp bot integration for parking management. Automated notifications and reminders.',
    image: 'https://placehold.co/600x400/25D366/ffffff?text=WhatsApp+Bot',
    tags: ['JavaScript', 'WhatsApp API', 'Automation', 'Bot'],
    github: 'https://github.com/snehitvaddi/whatsapp-r2park',
    stars: 0,
    date: '2026',
    featured: false,
    category: 'web',
    status: 'live'
  },
  {
    id: 'headlands-pitch',
    title: 'HeadLands Pitch App',
    description: 'Application for the HeadLands accelerator program. Startup pitch deck and demo.',
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=HeadLands',
    tags: ['TypeScript', 'React', 'Startup', 'Pitch'],
    github: 'https://github.com/snehitvaddi/My-HeadLands-pitch-Application',
    stars: 0,
    date: '2024',
    featured: false,
    category: 'web',
    status: 'live'
  },
  {
    id: 'loanlens-ai',
    title: 'LoanLens AI',
    description: 'AI-powered loan analysis and recommendation system. Smart financial decisions.',
    image: 'https://placehold.co/600x400/f59e0b/ffffff?text=LoanLens',
    tags: ['Python', 'ML', 'Finance', 'Analysis'],
    github: 'https://github.com/snehitvaddi/loanlens_ai',
    stars: 0,
    date: '2025',
    featured: false,
    category: 'web',
    status: 'live'
  },

  // ============================================
  // 🛠️ TOOLS & UTILITIES
  // ============================================
  {
    id: 'colab-keep-alive',
    title: 'Google Colab Keep Alive',
    description: 'Browser extension to prevent Colab sessions from timing out. Saved countless training runs!',
    image: 'https://placehold.co/600x400/f9ab00/ffffff?text=Colab+Alive',
    tags: ['JavaScript', 'Chrome Extension', 'Automation'],
    github: 'https://github.com/snehitvaddi/Google-Colab-Keep-Alive',
    stars: 1,
    date: '2023',
    featured: false,
    category: 'tools',
    status: 'live'
  },
  {
    id: 'finetune-resume',
    title: 'Finetune Resume',
    description: 'AI-powered resume optimization tool. Tailors your resume for specific job descriptions.',
    image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Resume+AI',
    tags: ['TypeScript', 'AI', 'Resume', 'Optimization'],
    github: 'https://github.com/snehitvaddi/finetune-resume',
    stars: 0,
    date: '2026',
    featured: false,
    category: 'tools',
    status: 'live'
  },
  {
    id: 'import-module',
    title: 'Import Module',
    description: 'Utility for dynamic Python module imports. Clean dependency management.',
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Import+Module',
    tags: ['Python', 'Utility', 'Imports', 'Tooling'],
    github: 'https://github.com/snehitvaddi/import-module',
    stars: 0,
    date: '2025',
    featured: false,
    category: 'tools',
    status: 'live'
  },
]

// Category labels and colors
export const categoryConfig = {
  agentic: { label: '🤖 Agentic AI', color: 'from-purple-500 to-pink-500' },
  genai: { label: '🧠 GenAI & LLMs', color: 'from-blue-500 to-cyan-500' },
  deeplearning: { label: '🔥 Deep Learning', color: 'from-orange-500 to-red-500' },
  computervision: { label: '👁️ Computer Vision', color: 'from-green-500 to-teal-500' },
  data: { label: '📊 Data Engineering', color: 'from-yellow-500 to-orange-500' },
  web: { label: '🌐 Web Apps', color: 'from-indigo-500 to-purple-500' },
  mobile: { label: '📱 Mobile', color: 'from-pink-500 to-rose-500' },
  research: { label: '📝 Research', color: 'from-emerald-500 to-green-500' },
  tools: { label: '🛠️ Tools', color: 'from-gray-500 to-slate-500' },
}

export const featuredProjects = projects.filter(p => p.featured)
export const allProjects = projects

// Get projects by category
export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter(p => p.category === category)

// Get total stars
export const totalStars = projects.reduce((acc, p) => acc + p.stars, 0)
