#!/usr/bin/env node
/** One-time / on-demand: convert DemoTech survey CSV to JSON for the app data layer. */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const csvPath = path.join(root, 'documents/demotech-survey/DemoTech-Survey-Responses-500.csv')
const outPath = path.join(root, 'lib/data/demotech/responses.json')

function parseCsvLine(line) {
  const fields = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      fields.push(cur)
      cur = ''
    } else {
      cur += ch
    }
  }
  fields.push(cur)
  return fields
}

const raw = fs.readFileSync(csvPath, 'utf-8')
const lines = raw.trim().split('\n')
const headers = parseCsvLine(lines[0]).map((h) => h.replace(/\r$/, ''))
const likertIds = headers.filter((h) => /^[A-K]\d+$/.test(h))

const rows = lines.slice(1).map((line) => {
  const vals = parseCsvLine(line)
  const row = {}
  headers.forEach((h, i) => {
    const v = vals[i] ?? ''
    if (likertIds.includes(h)) {
      row[h] = Number(v)
    } else if (h === 'tenure_months') {
      row[h] = Number(v)
    } else {
      row[h] = v
    }
  })
  return row
})

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(rows, null, 0))
console.log(`Wrote ${rows.length} responses → ${outPath}`)
