const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyACuo3AA1mqR9SJ3qGj71dwy1MNx8S6_so';

const projectPrompts = [
  { id: 'deepfake-wave2lip', prompt: 'Minimalist tech illustration of lip syncing AI, audio waveform connecting to face silhouette, modern flat design, blue and white' },
  { id: 'self-driving-car', prompt: 'Minimalist illustration of autonomous car with neural network visualization, modern tech aesthetic, grayscale with blue' },
  { id: 'deepfake-first-order', prompt: 'Abstract illustration of motion transfer AI, two faces with flowing lines, modern minimalist, purple and white' },
  { id: 'face-mask-detection', prompt: 'Clean tech illustration of face detection with mask overlay, computer vision, green and white, minimalist' },
  { id: 'yolov3-fire-detection', prompt: 'Minimalist illustration of fire detection AI, camera with flame detection, orange and gray, modern' },
  { id: 'interview-gpt', prompt: 'Abstract illustration of AI interview assistant, microphone with chat bubbles, teal and white' },
  { id: 'rag-anything', prompt: 'Minimalist illustration of document AI, file icons connecting to AI brain, blue gradient' },
  { id: 'medhalt', prompt: 'Medical AI illustration, stethoscope with digital elements, healthcare, white and green' },
  { id: 'eat-or-nahh', prompt: 'Fun minimalist food decision app illustration, plate with AI sparkles, orange and cream' },
  { id: 'hackswipe', prompt: 'Minimalist app illustration, swipe cards with code icons, purple and white' },
  { id: 'h1b-wage-finder', prompt: 'Data visualization, US map with salary markers, blue and gold, minimalist' },
  { id: 'unitrends', prompt: 'Data pipeline illustration, streaming data flow with charts, orange and dark blue' },
  { id: 'ai-influencer-bot', prompt: 'Social media AI bot, robot with social icons, purple and pink gradient' },
  { id: 'citrus-ecoli', prompt: 'Scientific citrus with fluorescence imaging, bacteria detection, green and yellow' },
  { id: 'sudoku-solver', prompt: 'Minimalist sudoku puzzle with camera overlay, real-time solving, black white blue' },
  { id: 'intruder-detection', prompt: 'Home security AI illustration, camera with face recognition, red alert theme' },
  { id: 'yolov3-object-tracking', prompt: 'Object tracking visualization, bounding boxes following objects, blue tech style' },
  { id: 'skin-disease-detection', prompt: 'Medical skin analysis AI, dermatology concept, clean medical white' },
  { id: 'corona-prediction', prompt: 'Medical X-ray AI analysis, lung scan visualization, blue medical theme' },
  { id: 'daily-job-analysis', prompt: 'Job market data visualization, career analytics, professional blue' },
  { id: 'buy-ml-project', prompt: 'Marketplace illustration, code products on display, modern e-commerce' },
  { id: 'colab-keep-alive', prompt: 'Google Colab notebook with heartbeat/pulse, keep alive concept, yellow and white' },
  { id: 'license-plate', prompt: 'License plate detection, OCR text extraction, automotive tech' },
  { id: 'claude-code-agent', prompt: 'AI coding agent, robot writing code, orange and white, modern' },
  { id: 'mcp-research-agent', prompt: 'Research AI agent, papers and analysis, green and white academic' }
];

async function generateWithImagen4(prompt, projectId) {
  try {
    // Try Imagen 4.0 fast
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instances: [{
            prompt: `${prompt}. Style: modern minimalist portfolio thumbnail, professional, clean, 600x400 aspect ratio, no text or words.`
          }],
          parameters: {
            sampleCount: 1,
            aspectRatio: "16:9",
            safetyFilterLevel: "BLOCK_ONLY_HIGH"
          }
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      console.log(`API Error for ${projectId}:`, data.error.message.slice(0, 200));
      return false;
    }

    // Check for image data in predictions
    if (data.predictions?.[0]?.bytesBase64Encoded) {
      const buffer = Buffer.from(data.predictions[0].bytesBase64Encoded, 'base64');
      const outputPath = path.join(__dirname, '..', 'public', 'projects', `${projectId}.png`);

      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(outputPath, buffer);
      console.log(`✓ Generated: ${projectId}`);
      return true;
    }

    console.log(`✗ No image in response for ${projectId}:`, JSON.stringify(data).slice(0, 300));
    return false;
  } catch (error) {
    console.error(`Error for ${projectId}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Testing Imagen 4.0 Fast API...\n');

  // Test with first project
  const test = projectPrompts[0];
  console.log(`Testing: ${test.id}`);
  const success = await generateWithImagen4(test.prompt, test.id);

  if (success) {
    console.log('\n✓ Image generation works! Generating all images...\n');
    for (let i = 1; i < projectPrompts.length; i++) {
      const p = projectPrompts[i];
      await generateWithImagen4(p.prompt, p.id);
      await new Promise(r => setTimeout(r, 2000)); // Rate limit
    }
    console.log('\n✓ Done! Images saved to: portfolio-new/public/projects/');
  } else {
    console.log('\n✗ Image generation failed.');
    console.log('\nThe API key may have quota limits. You can:');
    console.log('1. Wait for quota to reset');
    console.log('2. Use a different API key');
    console.log('3. Generate images manually using the prompts above');
    console.log('\nPrompts for manual generation:');
    projectPrompts.forEach(p => console.log(`\n${p.id}:\n  "${p.prompt}"`));
  }
}

main();
