import moment from 'moment';

/**
 * 对时间进行转换的工具函数
 * @param data 数据源数组
 * @param format 要转换的格式
 * @param key 要转换的键值
 * @returns {Array} 转换后的数组
 */
export function timeTransform(data = [], key = 'time', format = 'YYYY/MM/DD HH:mm:ss') {
  return data.map((v, i) => {
    return {...v, [key]: moment(v[key]).format(format)};
  });
}

/**
 * 转换单个时间
 * @param timeStamp 13位时间戳
 * @param format 转换的格式
 * @return 转换后的时间
 */
export default function (timeStamp, format = 'YYYY/MM/DD HH:mm:ss') {
  //要转换的时间的键名必须是time
  return  moment(timeStamp).format(format);
}


