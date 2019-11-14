export const convertArabicToRomanNumeral = (arabic: number): string => {
  // if found more than 3 of the same character in sequence, then 
  // only take the first of them and append a V

  let roman = 'I'.repeat(arabic)

  if (foundMoreThanThreeOf(roman, 'I')) {
    // get the last char of $roman => 'I'
    // append 'V'
    
    const lastChar = Array.from(roman).pop() // => I
    roman = lastChar + 'V'
  }
  
  return roman
}

function foundMoreThanThreeOf(string: string, char: string) {
  const matcher = new RegExp(`${char}${char}${char}`)
  return matcher.test(string)
}