export const normalizeBranchId = (value) => {
  if (!value) return null
  if (typeof value === 'string') {
    const trimmed = value.trim()
    return trimmed || null
  }
  if (typeof value === 'number') {
    return String(value)
  }
  if (typeof value === 'object') {
    const candidates = []
    if (value._id) candidates.push(value._id)
    if (value.id) candidates.push(value.id)
    if (value.$oid) candidates.push(value.$oid)
    if (value.toString && typeof value.toString === 'function') {
      const str = value.toString()
      if (str && str !== '[object Object]') candidates.push(str)
    }
    for (const candidate of candidates) {
      if (candidate) {
        const normalized = String(candidate).trim()
        if (normalized) return normalized
      }
    }
  }
  return null
}
