/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const createStars = (stars, texture, amount) => {
  let nextStar = 0;
  for (let i = 0; i < amount; i += 1) {
    const y = Phaser.Math.RND.between(0, 600);

    stars.create(nextStar, y, texture);
    nextStar += 400;
  }
};