import { useState } from 'react'
import JsonEditor from './components/JsonEditor'
import FormPreview from './components/FormPreview'
import { validateSchema } from './utils/schemaValidator'
import { FormSchema } from './types/schema'

const initialJson = `{
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
        "pattern": "^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "projectType",
      "type": "select",
      "label": "Project Type",
      "required": true,
      "options": [
        { "value": "web", "label": "Web Development" },
        { "value": "mobile", "label": "Mobile App" },
        { "value": "desktop", "label": "Desktop Application" }
      ]
    },
    {
      "id": "budget",
      "type": "radio",
      "label": "Budget Range",
      "required": true,
      "options": [
        { "value": "low", "label": "$1,000 - $5,000" },
        { "value": "medium", "label": "$5,000 - $15,000" },
        { "value": "high", "label": "$15,000+" }
      ]
    },
    {
      "id": "description",
      "type": "textarea",
      "label": "Project Description",
      "required": false,
      "placeholder": "Provide a brief description of your project..."
    }
  ]
}`

function App() {
  const [jsonValue, setJsonValue] = useState(initialJson)
  const [schema, setSchema] = useState<FormSchema | null>(() => validateSchema(initialJson))

  const handleJsonChange = (value: string | undefined) => {
    if (value) {
      setJsonValue(value)
      const validatedSchema = validateSchema(value)
      setSchema(validatedSchema)
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">JSON Editor</h2>
        <div className="bg-white rounded-lg shadow-md h-[calc(100vh-8rem)]">
          <JsonEditor value={jsonValue} onChange={handleJsonChange} />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Form Preview</h2>
        <div className="bg-white rounded-lg shadow-md p-6 overflow-auto h-[calc(100vh-8rem)]">
          <FormPreview schema={schema} />
        </div>
      </div>
    </div>
  )
}

export default App