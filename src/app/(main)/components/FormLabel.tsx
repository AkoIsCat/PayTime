import { MergeChildrenFor } from '@/types';

export default function FormLabel({ children, htmlFor }: MergeChildrenFor) {
  return (
    <label className="text-black mb-1 block" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
