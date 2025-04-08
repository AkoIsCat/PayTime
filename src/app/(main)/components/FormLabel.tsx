import { RiErrorWarningLine } from 'react-icons/ri';
import { MergeChildrenFor } from '@/types';

export default function FormLabel({
  children,
  htmlFor,
  itemType,
}: MergeChildrenFor) {
  return (
    <label
      className="text-black m-0 text-sm flex items-center"
      htmlFor={htmlFor}
    >
      <div className="mr-1">{children}</div>
      {(itemType === 'tax' || itemType === 'time') && <RiErrorWarningLine />}
    </label>
  );
}
