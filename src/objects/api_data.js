/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable guard-for-in */
import 'regenerator-runtime';

const fetch = require('node-fetch');

const key = '1C4G19zPgx5MVBx9aKCm';
const URI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
const ApiModule = (() => {
  const api = URI;
  const writeScore = async (user, score) => {
    const body = JSON.stringify({ user, score });
    const data = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    };
    const resp = await fetch(api, data);
    const res = await resp.json();
    return res;
  };

  const readScore = async () => {
    const data = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const resp = await fetch(api, data);
    const scores = await resp.json();
    return scores.result;
  };

  return {
    writeScore,
    readScore,
  };
})();

export default ApiModule;