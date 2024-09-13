'use client';

import { useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '@/app/(auth)/components';
import { Anchor, Button, Form, Input } from '@/components/core';
import { loginSchema } from '@/constants/schemas/auth';

export default function Login_Page() {
  /** @type {import('zod').infer<loginSchema>} */
  const initialValues = { email: '', pass: '' };
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  return (
    <AuthLayout title="Log In">
      <Form ctx={form} className="flex w-full flex-col gap-4">
        <Form.Field
          name="email"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <Input type="email" placeholder="Email" required {...field} />
              </Form.Control>
              <Form.Message className="ml-4" />
            </Form.Item>
          )}
        />
        <Form.Field
          name="pass"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  {...field}
                />
              </Form.Control>
              <Form.Message className="ml-4" />
            </Form.Item>
          )}
        />
        <Button type="submit">Login</Button>
        <Anchor href="#" text="Forgot Password?" />
        <p className="text-center">Or login in with</p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button type="button" variant="secondary" className="flex-1">
            Facebook
          </Button>
          <Button type="button" variant="secondary" className="flex-1">
            Google
          </Button>
        </div>
        <p className="text-center text-gray">
          Don&apos;t have an account?{' '}
          <Anchor href="#" text="Sign up" className="link" />
        </p>
      </Form>
    </AuthLayout>
  );
}
