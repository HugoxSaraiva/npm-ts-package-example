import { multiply } from '../../src/utils/multiply'

test('multiplies 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4)
})

test('multiplies -1 * 2 to equal -2', () => {
    expect(multiply(-1, 2)).toBe(-2)
})
