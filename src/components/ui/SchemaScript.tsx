interface SchemaScriptProps {
  schema: Record<string, unknown>
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      // This is static JSON-LD metadata generated from local data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
