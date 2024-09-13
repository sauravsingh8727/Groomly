import { SITE_URL } from '@/constants/site';

/**
 * Converts FormData to object
 *
 * @template {Record<string, unknown>} [T={}] Default is `{}`
 * @param {FormData} formData
 * @returns {T}
 */
export function parseFormData(formData) {
  let entries = Array.from(formData.entries());
  // remove server action entries
  entries = entries.filter(([key]) => !key.startsWith('$ACTION_'));
  // @ts-expect-error
  return Object.fromEntries(entries);
}

/**
 * Returns the canonical url to given path and params
 *
 * @param {string} path - URL path
 * @param {Record<string, string>} [params] - Search params
 * @returns {string} Canonical url relative to the site root
 */
export function canonicalURL(path, params) {
  const url = new URL(SITE_URL);
  url.pathname = path;
  return url.toString();
}

/**
 * Convert a string to a dash-separated string
 *
 * @example
 *   slugify('Google This'); // 'google-this'
 *
 * @param {string} string
 * @link https://github.com/jonschlinkert/dashify
 */
export function slugify(string) {
  if (typeof string !== 'string') {
    throw new TypeError('expected a string');
  }
  return string
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, (m) => (/[À-ž]/.test(m) ? m : '-'))
    .replace(/^-+|-+$/g, '')
    .replace(/[_-]{2,}/g, '-')
    .toLowerCase();
}
