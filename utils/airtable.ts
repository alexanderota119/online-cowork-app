import Airtable from 'airtable'

// Initialize a base
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID as string)

// Reference a table
export const taskAirtable = base(process.env.AIRTABLE_TABLE_NAME as string)
export const profileAirtable = base(process.env.AIRTABLE_PROFILES_TABLE_NAME as string)

// To get minified records array
export const minifyItems = (records: any[], unnecessaryFields: string[]) => records.map(record => getMinifiedItem(record, unnecessaryFields))

// to make record meaningful.
export const getMinifiedItem = (record: any, unnecessaryFields: string[]) => {
  unnecessaryFields.map((field: string) => {
    if (!record.fields[field]) {
      record.fields[field] = false
    }
  })
  return {
    id: record.id,
    fields: record.fields,
  }
}
