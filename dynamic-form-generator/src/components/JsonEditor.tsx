import { Editor } from '@monaco-editor/react'

interface JsonEditorProps {
  value: string
  onChange: (value: string | undefined) => void
}

export default function JsonEditor({ value, onChange }: JsonEditorProps) {
  return (
    <Editor
      height="100%"
      defaultLanguage="json"
      defaultValue={value}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 14,
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden',
        },
      }}
      theme="vs-dark"
    />
  )
}