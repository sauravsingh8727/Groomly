import { z } from 'zod';

const email = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email');

export const loginSchema = z.object({
  email: email,
  pass: z.string().min(1, 'Password is required'),
});

export const signupSchema = z
  .object({
    business_name: z.string().min(1, 'Business name is required'),
    service_type: z.enum(['at-home', 'visit']),
    phone: z.string().min(1, 'Phone number is required'),
    email: email,
    pass: z.string().min(1, 'Password is required'),
    re_pass: z.string(),
  })
  .refine((data) => data.pass === data.re_pass, {
    message: "Passwords don't match",
    path: ['re_pass'],
  });

export const forgotPassSchema = z.object({
  email: email,
});

export const resetPassSchema = z
  .object({
    pass: z.string().min(1, 'Password is required'),
    re_pass: z.string(),
  })
  .refine((data) => data.pass === data.re_pass, {
    message: "Passwords don't match",
    path: ['re_pass'],
  });
