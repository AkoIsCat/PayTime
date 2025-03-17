import { Children } from '@/types';

export default function DetailHoursToggle({ children }: Children) {
  return <button className="text-detailToggle text-xs m-1">{children}</button>;
}
