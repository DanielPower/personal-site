export const formatBytes = (byte: number, count: number = 1): string => {
  return byte
    .toString(16)
    .padStart(2 * count, "0")
    .toUpperCase();
};
