'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '@/app/(auth)/components';
import { Anchor, Button, Form, Input } from '@/components/core';
import { buttonVariants } from '@/components/core/Button';
import { signupSchema } from '@/constants/schemas/auth';

export default function SignUp_Page() {
  /** @type {import('zod').infer<typeof signupSchema>} */
  const initialValues = {
    business_name: '',
    email: '',
    pass: '',
    phone: '',
    re_pass: '',
    service_type: 'at-home',
  };
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  return (
    <AuthLayout title="Sign Up">
      <Form ctx={form} className="flex w-full flex-col gap-4">
        <Form.Field
          name="business_name"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <Input placeholder="Business Name" required {...field} />
              </Form.Control>
              <Form.Message className="ml-4" />
            </Form.Item>
          )}
        />
        <h3>Service Type</h3>
        <div className="flex flex-row gap-4">
          <Form.Field
            name="service_type"
            control={form.control}
            render={({ field }) => (
              <Form.Item className="flex h-11 flex-1">
                <label className="relative flex flex-1 items-center justify-center gap-2 whitespace-nowrap text-gray has-[input:checked]:text-white">
                  <Form.Control>
                    <input
                      type="radio"
                      value="at-home"
                      defaultChecked={field.value === 'at-home'}
                      className="absolute inset-0 -z-1 appearance-none rounded-xl border border-charcoal font-medium ring-gray ring-offset-1 ring-offset-background checked:border-0 checked:bg-primary-red focus-visible:outline-none focus-visible:ring-2"
                      {...field}
                    />
                  </Form.Control>
                  At Home
                </label>
                <Form.Message className="ml-4" />
              </Form.Item>
            )}
          />
          <Form.Field
            name="service_type"
            control={form.control}
            render={({ field }) => (
              <Form.Item className="flex h-11 flex-1">
                <label className="relative flex flex-1 items-center justify-center gap-2 whitespace-nowrap text-gray has-[input:checked]:text-white">
                  <Form.Control>
                    <input
                      type="radio"
                      value="visit"
                      defaultChecked={field.value === 'visit'}
                      className="absolute inset-0 -z-1 appearance-none rounded-xl border border-charcoal font-medium ring-gray ring-offset-1 ring-offset-background checked:border-0 checked:bg-primary-red focus-visible:outline-none focus-visible:ring-2"
                      {...field}
                    />
                  </Form.Control>
                  Visit
                </label>
                <Form.Message className="ml-4" />
              </Form.Item>
            )}
          />
        </div>
        <Form.Field
          name="phone"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  {...field}
                />
              </Form.Control>
              <Form.Message className="ml-4" />
            </Form.Item>
          )}
        />
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
        <Form.Field
          name="re_pass"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <Input
                  type="password"
                  placeholder="Repeat Password"
                  required
                  {...field}
                />
              </Form.Control>
              <Form.Message className="ml-4" />
            </Form.Item>
          )}
        />
        <Button type="submit">SIGN UP</Button>
        <p className="text-center text-gray">
          Already have an account?{' '}
          <Anchor href="#" text="Sign up" className="link" />
        </p>
      </Form>
    </AuthLayout>
  );
}
