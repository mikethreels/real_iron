import 'regenerator-runtime';

const saveScore = async (name, score) => {
  const key = '1C4G19zPgx5MVBx9aKCm';
  const URI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
  const api = URI;
  
  const jsonObj = {
    name,
    score,
  };
  try {
    const resp = await fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObj),
    });
    if (resp.ok) {
      await resp.json();
      return '200';
    }
    throw new Error('Request Failed');
  } catch (error) {
    return 'Error found';
  }
};

export default saveScore;