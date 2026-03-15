
export default function orderByProps(obj, prop) {
  const result = [];
  for(const i of prop){
    if(Object.prototype.hasOwnProperty.call(obj, i)){
      result.push({key: i, value: obj[i]});
    }
  }
  const restKeys = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !prop.includes(key)) {
      restKeys.push(key);
    }
  }
  restKeys.sort();

  for (const key of restKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}
