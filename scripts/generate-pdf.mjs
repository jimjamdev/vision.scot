import { mdToPdf } from 'md-to-pdf';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

async function generatePdf() {
  console.log('Generating PDF from policy.md...');

  const inputPath = join(rootDir, 'content', 'policy.md');
  const outputPath = join(rootDir, 'public', 'vision-scotland-policy.pdf');
  const stylesheetPath = join(__dirname, 'pdf-styles.css');

  // Read the markdown and prepend the domain branding
  const markdown = readFileSync(inputPath, 'utf8');
  const contentWithBranding = `**vision.scot**\n\n${markdown}`;

  try {
    await mdToPdf(
      { content: contentWithBranding },
      {
        dest: outputPath,
        pdf_options: {
          format: 'A4',
          margin: {
            top: '25mm',
            bottom: '25mm',
            left: '20mm',
            right: '20mm'
          },
          printBackground: true,
        },
        stylesheet: stylesheetPath,
        launch_options: {
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
      }
    );

    console.log(`PDF generated successfully: ${outputPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
}

generatePdf();
