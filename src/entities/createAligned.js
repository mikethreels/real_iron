export const createAligned = (scene, count, texture, scrollFactor, scale) => {

  let next = 0;
  for (let i = 0; i < count; i += 1) {
      const s = scene.add.image(next, 350, texture)
          .setScale(scale)
          .setOrigin(0, 0.5)
          .setScrollFactor(scrollFactor); 

      next += s.width * scale

  }
};
