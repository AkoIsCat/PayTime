import { useFormStore } from '@/store/form';
import { DetailWorkingTime, FormType } from '@/types';

export default function useSelectValue(
  componentType: 'simple' | 'detail',
  dataType: keyof FormType,
  id?: string
):
  | string
  | number
  | boolean
  | DetailWorkingTime[]
  | { id: string; day: string; time: string } {
  const formStore = useFormStore();
  if (componentType === 'simple') {
    return formStore[dataType];
  }
  return formStore.detailForm.find((item) => item.id === id)!;
}
