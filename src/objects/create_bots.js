export const createBots = (object, texture, amount) => {
  let nextBot = 1700;
  for (let i = 0; i < amount; i++) {
    
    object.create(nextBot, -300, texture)
      .setBounceX(1)
      .setCollideWorldBounds(false)
      .setVelocity(-200, 200)
      .setScale(2.5);
    nextBot += 400
  }
};