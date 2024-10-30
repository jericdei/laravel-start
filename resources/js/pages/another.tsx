import { Link } from '@inertiajs/react';

export default function Another() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="text-center">
        <p>This is the Another page.</p>
        <Link href="/">Go to home</Link>
      </div>
    </div>
  );
}
