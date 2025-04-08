import FormLabel from './FormLabel';
import DetailHoursToggle from './DetailHoursToggle';
import SelectWorkHours from './SelectWorkHours';
import AddDetailIButton from './AddDetailIButton';

import { FormFieldType } from '@/types';
import { useFormStore } from '@/store/form';

export default function FormField({
  label,
  hasToggle,
  itemType,
  onClick,
  detailToggle,
}: FormFieldType) {
  const { salarySelected } = useFormStore();

  return (
    <div className="my-4">
      <FormLabel htmlFor="dayWorkTime" itemType={itemType}>{label}</FormLabel>
      {hasToggle && salarySelected !== 'day' && !detailToggle && (
        <DetailHoursToggle onClick={onClick ?? (() => {})}>
          상세하게 입력
        </DetailHoursToggle>
      )}
      {hasToggle && salarySelected !== 'day' && detailToggle && (
        <DetailHoursToggle onClick={onClick ?? (() => {})}>
          간단하게 입력
        </DetailHoursToggle>
      )}
      {!detailToggle && (
        <SelectWorkHours componentType="simple" itemType={itemType} />
      )}
      {detailToggle && <AddDetailIButton />}
    </div>
  );
}
