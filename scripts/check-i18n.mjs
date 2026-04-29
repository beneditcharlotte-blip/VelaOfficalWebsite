#!/usr/bin/env node
// Checks that zh and en message files have identical key structures.
// Run: node scripts/check-i18n.mjs

import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

function getKeys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) => {
    const full = prefix ? `${prefix}.${k}` : k
    return typeof v === 'object' && v !== null && !Array.isArray(v)
      ? getKeys(v, full)
      : [full]
  })
}

const files = readdirSync(join(root, 'messages/zh'))
let hasError = false

for (const file of files) {
  const zhPath = join(root, 'messages/zh', file)
  const enPath = join(root, 'messages/en', file)

  let zh, en
  try {
    zh = JSON.parse(readFileSync(zhPath, 'utf8'))
  } catch {
    console.error(`✗ Cannot read messages/zh/${file}`)
    hasError = true
    continue
  }
  try {
    en = JSON.parse(readFileSync(enPath, 'utf8'))
  } catch {
    console.error(`✗ Missing or invalid messages/en/${file}`)
    hasError = true
    continue
  }

  const zhKeys = new Set(getKeys(zh))
  const enKeys = new Set(getKeys(en))

  const missingInEn = [...zhKeys].filter((k) => !enKeys.has(k))
  const missingInZh = [...enKeys].filter((k) => !zhKeys.has(k))

  if (missingInEn.length || missingInZh.length) {
    console.error(`\n✗ ${file}`)
    missingInEn.forEach((k) => console.error(`  missing in en: ${k}`))
    missingInZh.forEach((k) => console.error(`  missing in zh: ${k}`))
    hasError = true
  } else {
    console.log(`✓ ${file}`)
  }
}

if (hasError) {
  process.exit(1)
} else {
  console.log('\nAll message files are in sync.')
}
