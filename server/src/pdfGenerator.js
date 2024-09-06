import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF(formDetails, filePath, formType) {
  try {
    console.log('Received formType:', formType);
    console.log('Form Details:', formDetails);

    let templateFileName;
    switch (formType) {
      case 'formSubmission':
        templateFileName = 'lop-template.pdf';
        break;
      case 'lor':
        templateFileName = 'lor-template.pdf';
        break;
      case 'offer-letter':
        templateFileName = 'offer-letter-template.pdf';
        break;
      default:
        throw new Error('Invalid form type');
    }

    const templatePath = path.join(__dirname, 'templates', templateFileName);
    console.log('Template Path:', templatePath);

    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template file not found: ${templatePath}`);
    }

    const existingPdfBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const page = pdfDoc.getPages()[0];

    console.log('Template loaded successfully.');

    // Define the coordinates for placeholders
    const placeholderCoordinates = {
      '<<date>>': { x: 50, y: 700 },
      '<<employee id>>': { x: 50, y: 680 },
      '<<document no.>>': { x: 50, y: 660 },
      '<<name>>': { x: 50, y: 640 },
      '<<college>>': { x: 50, y: 620 },
      '<<old designation>>': { x: 50, y: 600 },
      '<<new designation>>': { x: 50, y: 580 },
      '<<effective date>>': { x: 50, y: 560 }
    };

    console.log('Starting text replacement.');

    // Extract the details
    const { 
      todaysDate, 
      employeeId, 
      documentNo, 
      fullName: name, 
      collegeName: college, 
      previousJobRole: oldDesignation, 
      positionPromotedTo: newDesignation, 
      joiningDate: effectiveDate 
    } = formDetails;

    // Replacement logic
    const replacements = [
      { placeholder: '<<date>>', value: todaysDate.toISOString().split('T')[0] },
      { placeholder: '<<employee id>>', value: employeeId },
      { placeholder: '<<document no.>>', value: documentNo },
      { placeholder: '<<name>>', value: name },
      { placeholder: '<<college>>', value: college },
      { placeholder: '<<old designation>>', value: oldDesignation },
      { placeholder: '<<new designation>>', value: newDesignation },
      { placeholder: '<<effective date>>', value: effectiveDate.toISOString().split('T')[0] }
    ];

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Draw replacement text on the PDF
    for (const { placeholder, value } of replacements) {
      const { x, y } = placeholderCoordinates[placeholder] || {};
      if (x !== undefined && y !== undefined) {
        console.log(`Replacing ${placeholder} with ${value} at (${x}, ${y})`);
        page.drawText(value || '', {
          x,
          y,
          size: 12,
          color: rgb(0, 0, 0),
          font: helveticaFont
        });
      } else {
        console.warn(`No coordinates found for placeholder: ${placeholder}`);
      }
    }

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(filePath, pdfBytes);
    console.log(`PDF generated at ${filePath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

export default generatePDF;
