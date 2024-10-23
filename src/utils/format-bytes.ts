export const formatBytes = (bytes: number, decimals = 2): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']

  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < units.length) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(decimals)} ${units[unitIndex]}`
}
