

export const scrollFade = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scrollSlideUp = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export const scrollSlideLeft = {
  offscreen: { x: -80, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "circOut",
    },
  },
};

export const scrollScaleIn = {
  offscreen: { scale: 0.85, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: "backOut",
    },
  },
};

export const scrollRotate = {
  offscreen: { rotate: -8, opacity: 0 },
  onscreen: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "elastic.out(1, 0.5)",
    },
  },
};

export const scrollSkew = {
  offscreen: { skewX: 12, opacity: 0 },
  onscreen: {
    skewX: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.48, 0.15, 0.25, 1],
    },
  },
};

export const scrollParallax = {
  offscreen: { y: 100, opacity: 0.3 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "circOut",
    },
  },
};

export const scrollFlip = {
  offscreen: {
    rotateY: 90,
    opacity: 0,
    transformPerspective: 1000,
  },
  onscreen: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "backOut",
    },
  },
};

export const scrollStretch = {
  offscreen: { scaleY: 0.7, opacity: 0 },
  onscreen: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.12, 0, 0.39, 0],
    },
  },
};

export const scrollBounce = {
  offscreen: { y: 60, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.17, 0.67, 0.24, 1.11],
      bounce: 0.4,
    },
  },
};
