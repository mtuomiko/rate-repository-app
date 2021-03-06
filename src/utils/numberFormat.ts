const numberFormat = (num: number): string => {
  return num >= 1000
    ? `${(num / 1000).toFixed(1)}k`
    : num.toFixed(0);
};

export default numberFormat;