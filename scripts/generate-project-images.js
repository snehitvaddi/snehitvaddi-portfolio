/**
 * Project Thumbnail Generator using Fal.ai
 *
 * Usage:
 * 1. Run: node scripts/generate-project-images.js
 *
 * Images will be saved to public/projects/
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Fal.ai API key
const FAL_API_KEY = 'c45f946a-935f-486c-9bb1-a2c753408abf:5c8095668f46a9620d916091d46bb3c1';

// Projects that need images (Recent + key projects)
const projectsToGenerate = [
  {
    id: 'finetune-resume',
    prompt: 'A clean modern UI screenshot of a resume optimization web app, showing a resume being analyzed with AI suggestions highlighted in blue, professional gradient background, minimalist SaaS design, no text'
  },
  {
    id: 'resume2portfolio',
    prompt: 'A sleek portfolio website builder interface showing transformation from document to beautiful website, split screen design, purple and indigo gradient, modern web application mockup, no text'
  },
  {
    id: 'h1b-wage-finder',
    prompt: 'A data visualization dashboard with US map showing salary data points, colorful bar charts and graphs, teal and green color scheme, clean analytics interface, data science tool, no text'
  },
  {
    id: 'whatsapp-r2park',
    prompt: 'A WhatsApp style mobile chat interface with parking notifications, green messaging theme, bot conversation with icons, mobile app UI design, no text'
  },
  {
    id: 'ai-influencer-bot',
    prompt: 'An AI social media automation dashboard with scheduled posts feed, analytics graphs, purple and violet gradient, futuristic AI robot assistant theme, SaaS interface, no text'
  },
  {
    id: 'claude-code-agent',
    prompt: 'A code editor IDE with AI assistant panel, code being generated with syntax highlighting, dark theme with orange accents, terminal output panel, developer tools, no text'
  },
  {
    id: 'mcp-research-agent',
    prompt: 'A research paper analysis interface with document viewer, AI highlighted sections, citation network graph visualization, academic green and white theme, scholarly design, no text'
  },
  {
    id: 'medhalt',
    prompt: 'A medical AI dashboard showing clinical document analysis, health metrics with green checkmarks, professional healthcare blue theme, medical software interface, no text'
  },
  {
    id: 'eat-or-nahh',
    prompt: 'A food recommendation mobile app showing restaurant menu items with AI suggestions, warm orange colors, appetizing food photography style, iOS app design, no text'
  },
  {
    id: 'intruder-detection',
    prompt: 'A security camera monitoring interface with face detection bounding boxes, alert notification panel, dark surveillance theme with red warning indicators, security dashboard, no text'
  }
];

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'projects');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate image using Fal.ai
async function generateImage(project) {
  console.log(`\n🎨 Generating image for: ${project.id}`);

  const requestBody = JSON.stringify({
    prompt: `${project.prompt}, high quality, 16:9 aspect ratio, professional product screenshot style`,
    image_size: 'landscape_16_9',
    num_images: 1,
    enable_safety_checker: true
  });

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'fal.run',
      path: '/fal-ai/flux/schnell',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`,
        'Content-Length': Buffer.byteLength(requestBody)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.detail || response.error) {
            reject(new Error(response.detail || response.error));
          } else if (response.images && response.images.length > 0) {
            resolve(response.images[0].url);
          } else {
            reject(new Error('No image in response'));
          }
        } catch (e) {
          reject(new Error(`Parse error: ${e.message} - Response: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

// Download image from URL
async function downloadImage(url, filename) {
  const filepath = path.join(OUTPUT_DIR, filename);

  return new Promise((resolve, reject) => {
    // Handle both http and https
    const protocol = url.startsWith('https') ? https : require('http');

    const download = (downloadUrl) => {
      protocol.get(downloadUrl, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          download(response.headers.location);
          return;
        }

        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`   ✅ Saved: ${filename}`);
          resolve(filepath);
        });
      }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    };

    download(url);
  });
}

// Main function
async function main() {
  console.log('🚀 Project Thumbnail Generator (Fal.ai)');
  console.log('========================================');
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Projects to generate: ${projectsToGenerate.length}\n`);

  const results = [];

  for (const project of projectsToGenerate) {
    try {
      const imageUrl = await generateImage(project);
      console.log(`   📥 Downloading from: ${imageUrl.substring(0, 50)}...`);
      const filename = `${project.id}.png`;
      await downloadImage(imageUrl, filename);
      results.push({ id: project.id, success: true, path: `/projects/${filename}` });

      // Rate limiting - wait 2 seconds between requests
      await new Promise(r => setTimeout(r, 2000));
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}`);
      results.push({ id: project.id, success: false, error: error.message });
    }
  }

  // Print summary
  console.log('\n========================================');
  console.log('📊 Summary:');
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  console.log(`   ✅ Success: ${successful.length}`);
  console.log(`   ❌ Failed: ${failed.length}`);

  if (successful.length > 0) {
    console.log('\n📝 Update your projects.ts with these image paths:');
    console.log('------------------------------------------------');
    successful.forEach(r => {
      console.log(`  '${r.id}': '${r.path}',`);
    });

    // Generate code to update projects.ts
    const updateCode = `
// Add these to your projects.ts file:
// Replace the placeholder images with these local paths:

${successful.map(r => `// ${r.id}: image: '${r.path}'`).join('\n')}
`;

    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'UPDATE_PROJECTS.txt'),
      updateCode
    );
    console.log('\n💡 Also saved to: public/projects/UPDATE_PROJECTS.txt');
  }
}

main().catch(console.error);
