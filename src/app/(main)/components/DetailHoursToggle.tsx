import { MergeChildrenDetailBtn } from '@/types';

export default function DetailHoursToggle({
  children,
  onClick,
}: MergeChildrenDetailBtn) {
  return (
    <button
      className="text-detailToggle text-xs m-0 "
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
