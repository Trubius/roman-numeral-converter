import { convertArabicToRomanNumeral } from '.'

describe('Roman numeral converter', () => {
  describe('convertArabicToRomanNumeral', () => {
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
  })
})