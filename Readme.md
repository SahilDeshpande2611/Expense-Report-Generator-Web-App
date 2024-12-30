# Expense Report Generator

A simple, user-friendly web application that enables users to create, manage, and download expense reports as PDF files. It provides an intuitive interface for entering personal and expense details and generates a professionally formatted PDF report.

---

## Table of Contents

- [How to Use the App](#how-to-use-the-app)
- [PDF Download Instructions](#pdf-download-instructions)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Running the Application](#running-the-application)
- [Notes](#notes)
- [Future Enhancements](#future-enhancements)

---

## How to Use the App

1. **Open the Application**:
   - Launch the `index.html` file in a modern web browser (e.g., Chrome, Firefox).

2. **Enter Personal Information**:
   - Fill in fields such as name, department, phone number, and email.
   - Specify the bill number, report date, report title, purpose, and submitter name.

3. **Add Expense Entries**:
   - Click the "Add Expense Row" button to add new entries to the expense table.
   - For each entry, input the date, category (e.g., travel, food), description, and amount.

4. **Review Total Amount**:
   - The application automatically calculates and displays the total expense amount.

5. **Download the Report as PDF**:
   - Click the "Download as PDF" button to generate and save the expense report in PDF format.

---

## PDF Download Instructions

The application uses two libraries to create PDFs:

- **html2canvas**: Captures the HTML content and converts it into an image.
- **jsPDF**: Generates a PDF from the captured image.

### Steps:

1. Complete the expense report form.
2. Click the "Download as PDF" button.
3. A save dialog will appear; choose a location on your computer and save the PDF.

---

## Libraries and Tools Used

- **html2canvas**:
  - Converts HTML content to a canvas element.
  - [Documentation](https://html2canvas.hertzen.com/)

- **jsPDF**:
  - Creates PDF documents from images or canvas data.
  - [Documentation](https://github.com/parallax/jsPDF)

- **CSS** (`styles.css`):
  - Provides a clean, responsive layout.

- **JavaScript** (`script.js`):
  - Handles form interactions, dynamic table rows, and PDF generation.

---

## Running the Application

1. **Download or Clone the Repository**:
   - Clone the repository using Git:
     ```bash
     git clone https://github.com/yourusername/expense-report-generator.git
     ```
   - Or download the ZIP file from the repository.

2. **Open the Application**:
   - Navigate to the project directory.
   - Open the `index.html` file in a web browser.

---

## Notes

- An active internet connection is required for loading the `html2canvas` and `jsPDF` libraries.
- For optimal performance, use the latest version of modern browsers. Older versions may not fully support all features.
- Ensure images uploaded for the logo are in supported formats (e.g., JPG, PNG).

---

## Future Enhancements

Here are some potential improvements for the application:

1. **Category-wise total summary**:
   - Add a category-wise total summary below the expense table (e.g., Total Travel Expenses, Total Food Expenses).

2. **Notes section**:
   - Include a notes section for additional comments or justifications for the expenses.

3. **Print Functionality**:
   - Enable direct printing of the expense report from the browser.

4. **User Authentication**:
   - Implement login systems for saving and managing multiple reports per user.

---

Feel free to contribute to the project or suggest additional features! PRs are always welcome.
