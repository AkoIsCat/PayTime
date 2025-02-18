import { Children } from '@/types';

export default function Contents({ children }: Children) {
  return (
    <div className="bg-blue-500 w-contentsWidth min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
