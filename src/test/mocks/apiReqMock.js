/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';

const apiTestData = (() => {
  const key = '1C4G19zPgx5MVBx9aKCm';
  const URI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
  const api = URI;

  const getData = () => new Promise((resolve) => {
    fetch(api)
      .then(resp => resp.json()
        .then((json) => {
          resolve(json.result);
        }));
  });

  return {
    getData,
  };
})();

export default apiTestData;