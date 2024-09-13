import { twMerge } from 'tailwind-merge';
import { isFunction, isObject } from '@/lib/assertions';

/**
 * Creates a formatted className from given arguments
 *
 * @param {...any} args - String, array, or object
 * @returns {string} Sanitized class-names
 */
export function cn(...args) {
  if (!args.length) throw new Error('No argument is used');
  let names = [];
  args.forEach((arg) => {
    if (!arg) return;
    const argType = arg?.constructor;
    if (argType === String || argType === Number) {
      names.push(arg.toString());
    } else if (argType === Array) {
      let inner = cn.apply(null, arg);
      if (inner) names.push(inner);
    } else if (argType === Object) {
      let entries = Object.entries(arg);
      entries.map(([key, value]) => Boolean(value) && names.push(key));
    }
    return;
  });
  return twMerge(names);
}

/**
 * Converts a boolean value into a boolean attribute type\
 * If the condition is true it returns "" (empty string)\
 * Else it return undefined - which removes the attributes
 *
 * @param {boolean} condition
 */
export function booleanAttr(condition) {
  return condition ? '' : undefined;
}

/**
 * Use multiple refs on a single element
 *
 * @template Element
 * @param {(React.ForwardedRef<Element> | undefined)[]} refs
 */
export function referrals(...refs) {
  if (!refs.length) return;
  return (/** @type {Element} */ el) => {
    for (const ref of refs) {
      if (!ref) continue;
      else if (isFunction(ref)) ref(el);
      else if (isObject(ref)) ref.current = el;
    }
  };
}
