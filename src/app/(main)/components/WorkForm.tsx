import SalarySelectForm from './SalarySelectForm';
import HourlyWageForm from './HourlyWageForm';
import FormField from './FormField';
import FormLabel from './FormLabel';
import WeeklyAllowanceToggle from './WeeklyAllowanceToggle';
import CustomButton from './Button';
import { BsArrowRight } from 'react-icons/bs';
import { useFormStore } from '@/store/form';
import { useState } from 'react';
import DetailInputForm from './DetailInputForm';

export default function WorkForm() {
  const [detailToggle, setDetailToggle] = useState<boolean>(false);

  const salarySelected = useFormStore((state) => state.salarySelected);
  const { detailForm, resetForm } = useFormStore();

  const resetToggle = () => {
    setDetailToggle(false);
  };

  const dynamicLabelValue =
    salarySelected === 'day' ? '일' : salarySelected === 'week' ? '주' : '월';

  return (
    <form className="w-full p-5">
      <div className="flex justify-around">
        <SalarySelectForm type="start" />
        <BsArrowRight size={26} />
        <SalarySelectForm type="end" resetToggle={resetToggle} />
      </div>
      <HourlyWageForm />
      <FormField
        label="일일 근무시간"
        hasToggle={true}
        itemType="time"
        detailToggle={detailToggle}
        onClick={() => {
          setDetailToggle(!detailToggle);
          resetForm();
        }}
      />
      {salarySelected == 'day' ||
        (!detailToggle && (
          <FormField label="일주 근무일수" hasToggle={false} itemType="day" />
        ))}
      {detailToggle &&
        detailForm.map((item) => (
          <DetailInputForm key={item.id} id={item.id.toString()} />
        ))}
      {salarySelected !== 'day' && (
        <div className="my-4">
          <FormLabel htmlFor="WH">주휴수당</FormLabel>
          <WeeklyAllowanceToggle />
        </div>
      )}
      <FormField
        label={`${dynamicLabelValue} 연장 근무시간`}
        hasToggle={false}
        itemType="overTime"
      />
      <FormField
        label={`${dynamicLabelValue} 야간 근무시간`}
        hasToggle={false}
        itemType="nightShift"
      />
      <FormField
        label={`${dynamicLabelValue} 휴일 근무시간`}
        hasToggle={false}
        itemType="holiday"
      />
      <FormField label="세금" hasToggle={false} itemType="tax" />
      <div className="flex justify-between">
        <CustomButton
          btnType="submit"
          onClick={() => console.log('계산하기')}
        />
        <CustomButton btnType="reset" onClick={() => console.log('초기화')} />
      </div>
    </form>
  );
}
