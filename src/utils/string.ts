/**
 * Capitalize the first letter of a string.
 * @param text
 * @returns Text with the first letter capitalized
 */
export function capitalize(text: string): string {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Takes in an array and joins it with a separator.
 * @param textArray
 * @param separator @default ', '
 * @returns
 */
export function joinWithSeparator(textArray: string[], separator: string = ', '): string {
  return textArray.join(separator)
}
