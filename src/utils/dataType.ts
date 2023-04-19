const DataTypeUtils = {
  // 判断是否为对象
  isObject: (obj: any) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
  },
  // 判断是否为数组
  isArray: (obj: any) => {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  //判断js对象是否为空、NULL、undefined等
  isNullOrEmpty: (obj: any) => {
    let result = false;
    try {
      const type = typeof obj;
      switch (type) {
        case 'string':
          if (obj === '' || obj === undefined || obj === null) {
            result = true;
          }
          break;
        case 'number':
          if (obj === undefined || obj === null) {
            result = true;
          }
          break;
        case 'object':
          if (Array.isArray(obj)) {
            //数组
            if (obj === undefined || obj === null || obj.length === 0) {
              result = true;
            }
          } else {
            //对象
            if (
              obj === undefined ||
              obj === null ||
              Object.keys(obj).length === 0
            ) {
              result = true;
            }
          }
          break;
        default:
          if (obj === undefined || obj === null) {
            result = true;
          }
          break;
      }
    } catch (e) {
      console.error(e);
      result = true;
    }
    return result;
  },
};

export default DataTypeUtils;
