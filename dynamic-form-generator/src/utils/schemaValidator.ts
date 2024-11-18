import { z } from 'zod'
import { FormSchema } from '../types/schema'

const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
})

const fieldSchema = z.object({
  id: z.string(),
  type: z.enum(['text', 'email', 'select', 'radio', 'textarea']),
  label: z.string(),
  required: z.boolean(),
  placeholder: z.string().optional(),
  options: z.array(optionSchema).optional(),
  validation: z
    .object({
      pattern: z.string(),
      message: z.string(),
    })
    .optional(),
})

export const formSchemaValidator = z.object({
  formTitle: z.string(),
  formDescription: z.string(),
  fields: z.array(fieldSchema),
})

export function validateSchema(jsonString: string): FormSchema | null {
  try {
    const parsedJson = JSON.parse(jsonString)
    return formSchemaValidator.parse(parsedJson)
  } catch (error) {
    console.error('Schema validation error:', error)
    return null
  }
}