interface StorageItem {
  value: any,
  expiryTime: number
}

export const storage = {
  setStorage,
  getStorage,
  removeStorage,
  getSession,
  setSession
}

/**
 * Set storage' item.
 * @export
 * @param {string} key
 * @param {*} value
 * @param {number} [duration]
 * @returns {Object}
 */
function setStorage(key: string, value: any, duration?: number): void {
  const data: StorageItem = {
    value: value,
    expiryTime: !duration || isNaN(duration) ? 1200 : Date.now() + duration
  };
  localStorage[key] = JSON.stringify(data);
}

enum Dics {
  PENDING,
  RESOLVED,
  REJECTED
}

/**
 *
 * Get storage's item.
 * @export
 * @param {string} key
 * @returns {(Storage | null)}
 */
function getStorage(key: string): any {
  const data: string | null | undefined = localStorage[key];
  if (!data) { 
    return null;
  }
  
  let obj: StorageItem;

  try {
    obj = JSON.parse(data);
  } catch (err) {
    throw err;
  }

  const now = Date.now();
  if (obj.expiryTime === 0 || obj.expiryTime > now) {
    return obj.value;
  }
}

/**
 * Remove storage's item.
 * @export
 * @param {string} key
 */
function removeStorage(key: string): void{
  localStorage.removeItem(key);
  console.log(Dics[0])
}

/**
 * Get Session Storage item.
 * @export
 * @param {string} key
 * @returns {any}
 */
function getSession(key: string): any {
  const data: string | null | undefined = sessionStorage[key];
  if (!data) return null;

  let obj: StorageItem;
  try {
    obj = JSON.parse(data);
  } catch(err) {
    throw err
  }
  return obj.value;
}

/**
 * Set session stoage key.
 * @export
 * @param {string} key
 * @param {*} value
 * @returns {Object}
 */
function setSession(key: string, value: any): void {
  const data: StorageItem = { value: value, expiryTime: 0 };
  sessionStorage[key] = JSON.stringify(data);
}