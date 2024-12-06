export const perfectShape = (width, height) => {
  return {
    width,
    height,
    minWidth: width,
    maxWidth: width,
    minHeight: height,
    maxHeight: height,
  };
};
