import FormLabel from './FormLabel';
import DetailHoursToggle from './DetailHoursToggle';
import SelectWorkHours from './SelectWorkHours';

import { FormFieldType } from '@/types';
import AddDetailIButton from './AddDetailIButton';

export default function FormField({
  label,
  hasToggle,
  itemType,
  onClick,
  detailToggle,
}: FormFieldType) {
  return (
    <div className="my-4">
      <FormLabel htmlFor="dayWorkTime">{label}</FormLabel>
      {hasToggle && !detailToggle && (
        <DetailHoursToggle onClick={onClick ?? (() => {})}>
          상세하게 입력
        </DetailHoursToggle>
      )}
      {hasToggle && detailToggle && (
        <DetailHoursToggle onClick={onClick ?? (() => {})}>
          간단하게 입력
        </DetailHoursToggle>
      )}
      {!detailToggle && <SelectWorkHours itemType={itemType} />}
      {detailToggle && <AddDetailIButton onClick={() => console.log('Add')} />}
    </div>
  );
}
