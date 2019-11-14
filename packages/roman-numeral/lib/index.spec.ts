import { convertArabicToRomanNumeral } from './index'

describe('Roman numeral converter', () => {
  describe('convertArabicToRomanNumeral', () => {
    it('should work', () => {
      const roman = convertArabicToRomanNumeral(123)
      expect(roman).toBe('CXXIII')
    })
  })
})