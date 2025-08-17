import { Spinner } from '@/components/ui';

export default function loading() {
  return (
    <div className="bg-white/50 dark:bg-gray-800 p-5 rounded shadow min-h-28 relative">
      <Spinner />
    </div>
  );
}
