import { convertArabicToRomanNumeral } from '.'

type ObjectOfStrings = { [number: number]: string }
const expectedResults: ObjectOfStrings = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X'
}

describe('Roman numeral converter', () => {
  describe('convertArabicToRomanNumeral', () => {
    it('should convert 1..10', () => {
      for (let i = 1; i <= 10; i++) {
        expect(convertArabicToRomanNumeral(i)).toBe(expectedResults[i])
      }
    })

    it('should convert 1', () => {
      expect(convertArabicToRomanNumeral(1)).toBe('I')
    })

    it('should convert 2', () => {
      expect(convertArabicToRomanNumeral(2)).toBe('II')
    })

    it('should convert 4', () => {
      expect(convertArabicToRomanNumeral(4)).toBe('IV')
    })

    it('should convert 5', () => {
      expect(convertArabicToRomanNumeral(5)).toBe('V')
    })

    it('should convert 6', () => {
      expect(convertArabicToRomanNumeral(6)).toBe('VI')
    })
  })
})