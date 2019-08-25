export function shallowCompare(objA, objB) {
    const keysA = Object.keys(objA); 
    const keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) return false;
    
    const sortedKeysA = keysA.sort();
    const sortedKeysB = keysA.sort();

    if(sortedKeysA !== sortedKeysB) return false;

    const keys = keysA;
    return keys.every(key => objA[key] === objB[key]);
}