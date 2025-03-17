import { MergeChildrenFor } from '@/types';

export default function FormLabel({ children, htmlFor }: MergeChildrenFor) {
  return (
    <label className="text-black m-0 text-sm block" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
