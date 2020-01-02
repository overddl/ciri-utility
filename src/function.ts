/**
 * A empty function.
 * @export
 */
export function noop(): void {};

/**
 * Funtion debounce.
 * @export
 * @param {Function} fn
 * @param {number} [delay=100]
 * @param {Object} [context]
 * @returns {Function}
 */
export function debounce(fn: Function, delay: number = 800, context?: Object): Function {
  let timer: any;
  return function (): void {
    const self = context || null;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(self, args);
    }, delay)
  }
}

/**
 * Function throttle.
 * @export
 * @param {Function} fn
 * @param {number} [interval=300]
 * @param {Object} [context]
 * @returns {Function}
 */
export function throttle (fn: Function, interval: number = 300, context?: Object): Function {
  let timer: any, canRun: boolean = true;
  return function (): void {
    if (!canRun) return
    canRun = false
    const self = context || null
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(self, args)
      canRun = true
    }, interval)
  }
}