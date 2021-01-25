export const isObject = (a) => !!a && a.constructor === Object;
export const isArray = (thing) => Array.isArray(thing);
export const isSameObject = (a, b) => JSON.stringify(a) === JSON.stringify(b);
