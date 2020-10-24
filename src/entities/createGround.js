export const createGround = (object, count, texture, counter, wall, wallImg) => {
    
  let next = 0;
  for (let i = 0; i < count; i += 1) {
      let dist = (next + Math.floor(Math.random() * 300))
      let height = Phaser.Math.Between(100, 500)
      const obj = object.create(dist , height, texture);
      wall.create(dist + 230, height + -10, wallImg).setVisible(false);
      wall.create(dist -230, height + -10, wallImg).setVisible(false);
      next += obj.width * 2
      counter++
      console.log(dist)

  }
};