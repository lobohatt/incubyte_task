import Stringcal from '../components/atoms/func';  

describe('Stringcal', () => {
    let stringcal;

    beforeEach(() => {
        stringcal = new Stringcal();
    });

    test('should return 0 for an empty string', () => {
        expect(stringcal.add('')).toBe(0);
    });

    test('should return the number for a single number', () => {
        expect(stringcal.add('5')).toBe(5);
    });

    test('should return the sum of two numbers separated by a comma', () => {
        expect(stringcal.add('1,2')).toBe(3);
    });

    test('should handle multiple numbers', () => {
        expect(stringcal.add('1,2,3,4,5')).toBe(15);
    });

    test('should handle newlines as delimiters', () => {
        expect(stringcal.add('1\n2,3\n4,5')).toBe(15);
    });

    test('should handle custom delimiters', () => {
        expect(stringcal.add('//;\n1;2;3')).toBe(6);
    });

    test('should return an error message for negative numbers', () => {
        expect(stringcal.add('1,-2,3,-4')).toBe('negative numbers not allowed -2, -4');
    });

    test('should ignore non-numeric characters', () => {
        expect(stringcal.add('1,2\n3,hello,4')).toBe(10);
    });

    test('should handle delimiters with multiple characters', () => {
        expect(stringcal.add('//[***]\n1***2***3')).toBe(6);
    });
});