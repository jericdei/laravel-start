import { Link } from '@inertiajs/react';

export default function Index() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="text-center">
        <p>This is the Index page.</p>
        <Link href="/another">Go to another</Link>
      </div>
    </div>
  );
}
