export interface Skill {
  name: string
  icon?: string
  level: 'expert' | 'advanced' | 'intermediate'
  color: string
}

export interface SkillCategory {
  name: string
  emoji: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Agent Tools & Evaluation',
    emoji: '🔧',
    skills: [
      { name: 'MCP', level: 'advanced', color: 'bg-blue-500' },
      { name: 'Cube', level: 'advanced', color: 'bg-purple-500' },
      { name: 'Langfuse', level: 'advanced', color: 'bg-orange-500' },
      { name: 'LLM-as-Judge', level: 'advanced', color: 'bg-green-500' },
      { name: 'Codex', level: 'advanced', color: 'bg-gray-700' },
      { name: 'OAuth2', level: 'advanced', color: 'bg-indigo-500' },
      { name: 'Prometheus', level: 'advanced', color: 'bg-red-500' },
      { name: 'PagerDuty', level: 'advanced', color: 'bg-emerald-500' },
    ],
  },
  {
    name: 'GenAI & LLMs',
    emoji: '🤖',
    skills: [
      { name: 'LangChain', level: 'expert', color: 'bg-green-500' },
      { name: 'OpenAI API', level: 'expert', color: 'bg-emerald-500' },
      { name: 'Claude', level: 'expert', color: 'bg-orange-500' },
      { name: 'RAG Systems', level: 'expert', color: 'bg-blue-500' },
      { name: 'Hugging Face', level: 'advanced', color: 'bg-yellow-500' },
      { name: 'Fine-tuning', level: 'advanced', color: 'bg-purple-500' },
      { name: 'Prompt Engineering', level: 'expert', color: 'bg-pink-500' },
      { name: 'Vector DBs', level: 'advanced', color: 'bg-indigo-500' },
    ],
  },
  {
    name: 'Machine Learning',
    emoji: '🧠',
    skills: [
      { name: 'TensorFlow', level: 'expert', color: 'bg-orange-500' },
      { name: 'PyTorch', level: 'advanced', color: 'bg-red-500' },
      { name: 'Keras', level: 'expert', color: 'bg-red-400' },
      { name: 'Scikit-learn', level: 'expert', color: 'bg-blue-500' },
      { name: 'Computer Vision', level: 'expert', color: 'bg-purple-500' },
      { name: 'NLP', level: 'advanced', color: 'bg-green-500' },
      { name: 'Deep Learning', level: 'expert', color: 'bg-indigo-500' },
      { name: 'MLOps', level: 'intermediate', color: 'bg-gray-500' },
    ],
  },
  {
    name: 'Data Engineering',
    emoji: '⚡',
    skills: [
      { name: 'Python', level: 'expert', color: 'bg-blue-500' },
      { name: 'SQL', level: 'expert', color: 'bg-orange-500' },
      { name: 'PySpark', level: 'expert', color: 'bg-orange-600' },
      { name: 'Kafka', level: 'advanced', color: 'bg-gray-700' },
      { name: 'Airflow', level: 'advanced', color: 'bg-teal-500' },
      { name: 'AWS (S3, Redshift)', level: 'advanced', color: 'bg-yellow-500' },
      { name: 'Snowflake', level: 'intermediate', color: 'bg-cyan-500' },
      { name: 'dbt', level: 'intermediate', color: 'bg-orange-400' },
    ],
  },
  {
    name: 'Development',
    emoji: '💻',
    skills: [
      { name: 'Python', level: 'expert', color: 'bg-blue-500' },
      { name: 'TypeScript', level: 'advanced', color: 'bg-blue-600' },
      { name: 'React/Next.js', level: 'advanced', color: 'bg-cyan-500' },
      { name: 'FastAPI', level: 'advanced', color: 'bg-green-600' },
      { name: 'Node.js', level: 'intermediate', color: 'bg-green-500' },
      { name: 'Swift (iOS)', level: 'intermediate', color: 'bg-orange-500' },
      { name: 'Git', level: 'expert', color: 'bg-red-500' },
      { name: 'Docker', level: 'advanced', color: 'bg-blue-400' },
    ],
  },
  {
    name: 'Cloud & Tools',
    emoji: '☁️',
    skills: [
      { name: 'AWS', level: 'advanced', color: 'bg-yellow-500' },
      { name: 'GCP', level: 'intermediate', color: 'bg-blue-500' },
      { name: 'Vercel', level: 'advanced', color: 'bg-gray-800' },
      { name: 'GitHub Actions', level: 'advanced', color: 'bg-gray-600' },
      { name: 'Jupyter', level: 'expert', color: 'bg-orange-500' },
      { name: 'VS Code', level: 'expert', color: 'bg-blue-600' },
      { name: 'Linux', level: 'advanced', color: 'bg-yellow-600' },
      { name: 'Streamlit', level: 'expert', color: 'bg-red-500' },
    ],
  },
]

export const stats = [
  { label: 'GitHub Stars', value: '600+', emoji: '⭐' },
  { label: 'Projects', value: '50+', emoji: '🚀' },
  { label: 'Years Experience', value: '5+', emoji: '💼' },
  { label: 'Research Papers', value: '5', emoji: '📝' },
]
