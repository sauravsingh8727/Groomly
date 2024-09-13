import { AuthLayout, OnboardingProgress } from '@/app/(auth)/components';
import { Button, Input } from '@/components/core';

export default function Onboarding_BusinessDetails_Page() {
  return (
    <AuthLayout title="Business Details">
      <OnboardingProgress
        step={1}
        description="To get you started enter you business details"
      />

      {/* business Name */}
      <Input placeholder="Business Name" />

      {/* business address */}
      <h3>Business Address</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="Address Line 1" className="col-span-2" />
        <Input placeholder="Address Line 2" className="col-span-2" />
        <Input placeholder="City" />
        <Input placeholder="State" />
        <Input placeholder="Country" />
        <Input placeholder="Zip Code" />
      </div>

      {/* Business Representative */}
      <h3>Business Representative</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="position" className="col-span-2" />
      </div>

      <Button>Next</Button>
    </AuthLayout>
  );
}
