import gameMock from './mocks/gameMock';

test('Received a game object when called', () => {
  const { game } = gameMock;
  expect(typeof game).toBe('object');
});