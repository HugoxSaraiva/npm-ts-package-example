import { divide } from '@Utils/divide'

test('divides 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2)
})

test('divides -4 / 2 to equal -2', () => {
    expect(divide(-4, 2)).toBe(-2)
})

test('divides 4 / -2 to equal -2', () => {
    expect(divide(4, -2)).toBe(-2)
})

test('divides -4 / -2 to equal 2', () => {
    expect(divide(-4, -2)).toBe(2)
})

test('divides 4 / 0 to equal Infinity', () => {
    expect(divide(4, 0)).toBe(Infinity)
})

test('divides 0 / 0 to equal NaN', () => {
    expect(divide(0, 0)).toBe(NaN)
})
