export const ease = {
  "out-expo": [0.16, 1, 0.3, 1] as const,
  "in-out-quart": [0.76, 0, 0.24, 1] as const,
  "out-quart": [0.25, 1, 0.5, 1] as const,
};

export const spring = {
  gentle: { damping: 30, stiffness: 200 },
  snappy: { damping: 25, stiffness: 300 },
  soft: { damping: 20, stiffness: 150 },
};

export const duration = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
  glacial: 1.2,
};

export const viewport = {
  once: true,
  margin: "-10%",
};

export const stagger = {
  fast: 0.08,
  normal: 0.1,
  slow: 0.12,
  glacial: 0.15,
};
