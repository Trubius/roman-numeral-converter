export const convertArabicToRomanNumeral = (arabic: number): string => {
  // if found more than 3 of the same character in sequence, then 
  // only take the first of them and append a V

  let roman = 'I'.repeat(arabic)

  if (hasConsectutiveOccurence(roman, 'I', 5)) {
    roman = 'V'
  }

  if (hasConsectutiveOccurence(roman, 'I', 3)) {
    // get the last char of $roman => 'I'
    // append 'V'
    
    const lastChar = Array.from(roman).pop() // => I
    roman = lastChar + 'V'
  }
  
  return roman
}

function hasConsectutiveOccurence(roman: string, char: string, consecutiveOccurenceCount: number) {
  const matcher = new RegExp(char.repeat(consecutiveOccurenceCount))
  return matcher.test(roman)  
}