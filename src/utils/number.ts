const NumberUtils = {
  /**
   * 主要用于解决js里面的四舍五入问题
   * @param {*} number 转化成小数的数值
   * @param {*} n 转化的精度
   */
  getFloat: (number: any, n?: number) => {
    if (!number) return 0;
    let value = parseFloat(number)
    if(Number.isNaN(value))return 0
    const precision = n ? Math.floor(n) : 0;
    if (precision <= 0) return Math.round(value);
    value =
      Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
    return value;
  },
  
};

export default NumberUtils;
