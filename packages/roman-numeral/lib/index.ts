type RomanDigit = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

export const convertArabicToRomanNumeral = (arabic: number): string => {
  // if found more than 3 of the same character in sequence, then 
  // only take the first of them and append a V

  let roman = 'I'.repeat(arabic)

  if (hasConsectutiveOccurence(roman, 'I', 9)) {
    roman = 'IX'
  }

  if (hasConsectutiveOccurence(roman, 'I', 5)) {
    roman = roman.replace('I'.repeat(5), 'V')
  }

  if (hasConsectutiveOccurence(roman, 'I', 4)) {
    roman = roman.replace('I'.repeat(4), 'IV')
  }
  
  return roman
}

// at least 
function hasConsectutiveOccurence(
  romanNumeral: string,
  romanDigit: RomanDigit, 
  minimumConsecutiveOccurenceCount: number
) {
  const matcher = new RegExp(romanDigit.repeat(minimumConsecutiveOccurenceCount))
  return matcher.test(romanNumeral)  
}