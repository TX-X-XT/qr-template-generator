# PDF-QR Code Embedder

A Node.js tool designed for automating the embedding of QR codes into PDF documents. Utilizing `pdf-lib` for PDF manipulation and `Jimp` for image processing, it supports batch embedding with customizable QR code placement on PDFs. Ideal for streamlining document workflows.

## Features

- **Batch embed QR codes into PDFs:** Automate the embedding of QR codes into multiple PDF documents.
- **Customize QR code placement:** Specify the placement of QR codes on the PDF document.
- **Supports multiple image formats:** Works with `.png`, `.jpg`, `.jpeg` image formats.

## Usage

1. **Clone the repo and install dependencies:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    npm install
    ```

2. **Set your PDF template, QR code directory, and output directory in the script.**

3. **Run the script:**

    ```bash
    node <script-name.js>
    ```

## Dependencies

- `pdf-lib` for PDF manipulation.
- `Jimp` for image processing.
- `fs`, `path` for file system operations and path handling.


