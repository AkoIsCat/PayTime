import { Id } from '@/types';
import { useFormStore } from '@/store/form';
import { IoMdRemove } from 'react-icons/io';

export default function RemoveDetailForm({ id }: Id) {
  const { removeForm } = useFormStore();

  return (
    <button
      type="button"
      id={id}
      onClick={() => removeForm(id)}
      className="text-2xl w-12 h-8 font-bold text-red-700 rounded-full my-2 mx-1 hover:bg-red-100 flex justify-center items-center"
    >
      <IoMdRemove />
    </button>
  );
}
