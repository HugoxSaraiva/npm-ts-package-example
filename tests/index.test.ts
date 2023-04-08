import { helloWorld } from '@App'

test('Testing that console is called', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    helloWorld()
    expect(consoleSpy).toHaveBeenCalled()
})
