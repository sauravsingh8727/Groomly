'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '@/app/(auth)/components';
import { Anchor, Button, Form, Input } from '@/components/core';
import { resetPassSchema } from '@/constants/schemas/auth';

export default function ResetPassword_Page() {
  /** @type {import('zod').infer<resetPassSchema>} */
  const initialValues = { pass: '', re_pass: '' };
  const form = useForm({
    resolver: zodResolver(resetPassSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  return (
    <AuthLayout title="Reset Password">
      <Form ctx={form} className="flex w-full flex-col gap-6">
        <Form.Field
          name="pass"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <Input
                  type="password"
                  placeholder="New Password"
                  required
                  {...field}
                />
              </Form.Control>
              <Form.Message className="ml-4" />
            </Form.Item>
          )}
        />
        <Form.Field
          name="re_pass"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  {...field}
                />
              </Form.Control>
              <Form.Message className="ml-4" />
            </Form.Item>
          )}
        />
      </Form>

      <Button>Reset Password</Button>
      <p>
        <Anchor href="#" text="Back to login" />
      </p>
      <p>
        Don&apos;t have an account?{' '}
        <Anchor href="#" text="Sign up" className="link" />
      </p>
    </AuthLayout>
  );
}
