import { helloWorld } from '../src/index'

test('Testing that console is called', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    helloWorld()
    expect(consoleSpy).toHaveBeenCalled()
})
