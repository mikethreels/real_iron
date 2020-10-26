export const createStars = (stars, texture, amount) => {
  let nextStar = 0;
  for (let i = 0; i < amount; i++) {
    
		let x = Phaser.Math.RND.between(0, 800);
		let y = Phaser.Math.RND.between(0, 600);

    stars.create(nextStar, y, texture);
    nextStar += 400
	}
};