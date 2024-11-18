import { describe, it, expect } from 'vitest';
import { validateSchema } from '../src/utils/schemaValidator';

describe('schemaValidator', () => {
  it('should validate a correct schema', () => {
    const correctSchema = `{
      "formTitle": "Test Form",
      "formDescription": "This is a test form",
      "fields": [
        {
          "id": "name",
          "type": "text",
          "label": "Name",
          "required": true
        }
      ]
    }`;

    const result = validateSchema(correctSchema);
    expect(result).not.toBeNull();
    expect(result?.formTitle).toBe('Test Form');
  });

  it('should return null for an incorrect schema', () => {
    const incorrectSchema = `{
      "formTitle": "Test Form",
      "formDescription": "This is a test form",
      "fields": [
        {
          "id": "name",
          "type": "invalid_type",
          "label": "Name",
          "required": true
        }
      ]
    }`;

    const result = validateSchema(incorrectSchema);
    expect(result).toBeNull();
  });
});