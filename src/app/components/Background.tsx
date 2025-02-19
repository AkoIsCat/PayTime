import { Children } from '@/types';

export default function Background({ children }: Children) {
  return (
    <div className="w-full h-full bg-white flex justify-center">{children}</div>
  );
}
