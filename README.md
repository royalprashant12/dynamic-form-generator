
# Dynamic Form Generator

A **Dynamic Form Generator** built with **React**, **TypeScript**, and **Tailwind CSS**. This application allows users to generate and interact with forms dynamically based on a customizable JSON schema. It features a real-time JSON editor and a form preview side by side.

---

## **Features**

- **JSON Editor**  
  - Real-time editing with syntax highlighting.  
  - Instant validation of JSON schema.

- **Dynamic Form Preview**  
  - Reflects changes in the JSON schema in real-time.  
  - Provides error states and field-level validations.

- **Responsive Design**  
  - Works seamlessly on desktop and mobile devices.

- **Custom Validations**  
  - Use validation patterns and error messages defined in the schema.

- **Form Submission**  
  - Outputs form data to the console upon submission.  
  - Shows a success message after successful submission.

---

## **Installation**

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/yourusername/dynamic-form-generator.git
cd dynamic-form-generator
```

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the application.

---

## **Usage**

### JSON Schema Format

The form generator accepts a JSON schema in the following format:

```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    }
  ]
}
```

### How to Use

1. Edit the JSON schema in the left panel.  
2. See the form preview update in real-time on the right panel.  
3. Submit the form to view the data in the console.  

---

## **Supported Field Types**

- **Text:** Single-line text input (`type: "text"`)  
- **Email:** Email input with custom validation (`type: "email"`)  
- **Select:** Dropdown menu with predefined options (`type: "select"`)  
- **Radio:** Radio button group (`type: "radio"`)  
- **Textarea:** Multi-line text input (`type: "textarea"`)  

---

## **Form Validation**

The form generator uses `React Hook Form` and `Yup` for validation. Each field supports:

- **Required or optional status**  
- **Custom validation patterns**  
- **Custom error messages**  

---

## **Technical Stack**

- **Frontend Framework:** React 18+ with Next.js 13+  
- **Styling:** Tailwind CSS  
- **Type Safety:** TypeScript  
- **Form Handling:** React Hook Form  
- **JSON Editing:** Monaco Editor  
- **Validation:** Yup  

---

## **Development**

To run the application locally:

1. Install the dependencies:  
   ```bash
   npm install
   ```

2. Start the development server:  
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## **Testing**

### Unit Tests

Run unit tests using Jest:

```bash
npm test
```

### End-to-End Tests

Run E2E tests using Playwright:

```bash
npm run test:e2e
```

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/amazing-feature
   ```  
3. Commit your changes:  
   ```bash
   git commit -m 'Add some amazing feature'
   ```  
4. Push to the branch:  
   ```bash
   git push origin feature/amazing-feature
   ```  
5. Open a Pull Request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- Built with ❤️ using React, TypeScript, and Tailwind CSS.  
- Inspired by dynamic and customizable UI design patterns.
