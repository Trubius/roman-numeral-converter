type RomanDigit = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

export const convertArabicToRomanNumeral = (arabic: number): string => {
  // if found more than 3 of the same character in sequence, then 
  // only take the first of them and append a V

  let roman = 'I'.repeat(arabic)

  if (hasConsectutiveOccurence(roman, 'I', 5)) {
    roman = 'V'
  }

  if (hasConsectutiveOccurence(roman, 'I', 3)) {
    const lastChar = Array.from(roman).pop() // => I
    roman = lastChar + 'V'
  }
  
  return roman
}

function hasConsectutiveOccurence(roman: string, char: RomanDigit, consecutiveOccurenceCount: number) {
  const matcher = new RegExp(char.repeat(consecutiveOccurenceCount))
  return matcher.test(roman)  
}