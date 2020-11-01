
import getScores from './mocks/scoreMock';
import '@babel/polyfill';


test('Gets the names of the player', async () => {
  const scores = await getScores();
  expect(scores.user).toEqual('testUsername');
});

test('Gets an object', async () => {
  expect(typeof getScores()).toBe('object');
});

test('Gets score and checks if correct amount', async () => {
  const scores = await getScores();
  expect(scores.score).toEqual(1000);
});

test('Gets the data from the Leaderboard and checks if not undefined', async () => {
  expect(getScores()).not.toBe(undefined);
});