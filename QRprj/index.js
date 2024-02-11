import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import Jimp from 'jimp';

async function embedQRCodeIntoPDF(pdfTemplatePath, qrCodeImagePath, outputPDFPath) {
    try {
        const pdfBytes = fs.readFileSync(pdfTemplatePath);
        const pdfDoc = await PDFDocument.load(pdfBytes);

        const qrImage = await Jimp.read(qrCodeImagePath);
        const qrImageBuffer = await qrImage.getBufferAsync(Jimp.MIME_PNG);

        const embeddedImage = await pdfDoc.embedPng(qrImageBuffer);
        const page = pdfDoc.getPages()[1];

        const qrX = 100; //Image position on an X axis
        const qrY = 56; //Image position on an Y axis
        const qrWidth = 52; //Image height
        const qrHeight = 52;//Image width

        page.drawImage(embeddedImage, {
            x: qrX,
            y: qrY,
            width: qrWidth,
            height: qrHeight,
        });

        const modifiedPdfBytes = await pdfDoc.save();
        fs.writeFileSync(outputPDFPath, modifiedPdfBytes);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

async function processDirectory(pdfTemplatePath, qrCodeDirectory, outputDirectory) {
    const qrCodeFiles = fs.readdirSync(qrCodeDirectory);

    for (const file of qrCodeFiles) {
        const filePath = path.join(qrCodeDirectory, file);
        const outputFilePath = path.join(outputDirectory, `output-${file}.pdf`);

        if (['.png', '.jpg', '.jpeg'].includes(path.extname(file).toLowerCase())) {
            await embedQRCodeIntoPDF(pdfTemplatePath, filePath, outputFilePath);
            console.log(`Processed QR code from file: ${file}`);
        }
    }
}

const pdfTemplatePath = '';//PDF template path
const qrCodeDirectory = '';//QR code directory
const outputDirectory = '';//Final result directory

processDirectory(pdfTemplatePath, qrCodeDirectory, outputDirectory);
