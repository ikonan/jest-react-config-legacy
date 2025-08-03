import '@testing-library/jest-dom'

Object.defineProperty(globalThis.window, "matchMedia", {
  writable: true,
  configurable: true,
  value: jest.fn((query) => ({
    matches: query.includes("max-width"),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});
