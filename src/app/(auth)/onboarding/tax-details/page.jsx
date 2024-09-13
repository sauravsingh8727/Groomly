import { AuthLayout, OnboardingProgress } from '@/app/(auth)/components';
import { Button, Input } from '@/components/core';

export default function Onboarding_TaxDetails_Page() {
  return (
    <AuthLayout title="Tax Details">
      <OnboardingProgress
        step={1}
        description="To get you started enter you business details"
      />

      {/* business address */}
      <h3>Business Address</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="Legal Business Name" className="col-span-2" />
        <Input placeholder="EIN / TAX ID Number" className="col-span-2" />
        <Input
          placeholder="Business owner's legal name"
          className="col-span-2"
        />
        <Input
          placeholder="Business owner's date of birth"
          className="col-span-2"
        />
        <Input placeholder="Address Line 1" className="col-span-2" />
        <Input placeholder="Address Line 2" className="col-span-2" />
        <Input placeholder="City" />
        <Input placeholder="State" />
        <Input placeholder="Country" />
        <Input placeholder="Zip Code" />
      </div>

      {/* Bank Details */}
      <h3>Bank Details</h3>
      <p>
        This is the bank information where you will get paid, we will not deduct
        or charhe this accont anutime
      </p>
      <div className="grid gap-4">
        <Input placeholder="Routing Number" />
        <Input placeholder="Account Number" />
        <Input placeholder="Reneter Account Number" />
      </div>

      <Button>Next</Button>
    </AuthLayout>
  );
}
