import { describe, expect, it } from 'vitest';
import { slugify } from './helpers';

describe('slugify', () => {
  it('should convert a string to a dash-separated string', () => {
    expect(slugify('Google This')).toBe('google-this');
  });

  it('should handle strings with mixed case letters', () => {
    expect(slugify('HelloWorld')).toBe('hello-world');
    expect(slugify('helloWorld')).toBe('hello-world');
  });

  it('should handle strings with special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
    expect(slugify('Café au lait')).toBe('café-au-lait');
  });

  it('should trim leading and trailing whitespace', () => {
    expect(slugify('  Google This  ')).toBe('google-this');
  });

  it('should handle non-alphanumeric characters gracefully', () => {
    expect(slugify('Hello@World')).toBe('hello-world');
    expect(slugify('Hello-World')).toBe('hello-world');
    expect(slugify('Hello--World')).toBe('hello-world');
    expect(slugify('Hello____World')).toBe('hello-world');
  });

  it('should convert accented characters properly', () => {
    expect(slugify('À la carte')).toBe('à-la-carte');
  });

  it('should throw an error if input is not a string', () => {
    expect(() => slugify(123)).toThrow(TypeError);
    expect(() => slugify({})).toThrow(TypeError);
    expect(() => slugify([])).toThrow(TypeError);
    expect(() => slugify(null)).toThrow(TypeError);
    expect(() => slugify(undefined)).toThrow(TypeError);
  });

  it('should handle empty strings', () => {
    expect(slugify('')).toBe('');
  });

  it('should remove leading and trailing dashes', () => {
    expect(slugify('-Hello-World-')).toBe('hello-world');
  });

  it('should handle strings with multiple spaces', () => {
    expect(slugify('Hello    World')).toBe('hello-world');
  });
});
