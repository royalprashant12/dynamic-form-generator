import { FormSchema } from '../types/schema'
import DynamicForm from './DynamicForm'

interface FormPreviewProps {
  schema: FormSchema | null
}

export default function FormPreview({ schema }: FormPreviewProps) {
  if (!schema) {
    return (
      <div className="text-center text-gray-500 py-8">
        Enter a valid JSON schema to preview the form.
      </div>
    )
  }

  return <DynamicForm schema={schema} />
}