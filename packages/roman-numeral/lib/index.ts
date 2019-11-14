export const convertArabicToRomanNumeral = (arabic: number): string => {
  // if found more than 3 of the same character in sequence, then 
  // only take the first of them and append a V
  return 'I'.repeat(arabic)
}