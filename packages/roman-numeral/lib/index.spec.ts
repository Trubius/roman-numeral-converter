import { convertArabicToRomanNumeral } from './index'

describe('Roman numeral converter', () => {
  describe('convertArabicToRomanNumeral', () => {
    it('should convert 1', () => {
      expect(convertArabicToRomanNumeral(1)).toBe('I')
    })
  })
})