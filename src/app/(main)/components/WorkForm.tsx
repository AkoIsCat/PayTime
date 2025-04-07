import SalarySelectForm from './SalarySelectForm';
import HourlyWageForm from './HourlyWageForm';
import FormField from './FormField';
import FormLabel from './FormLabel';
import WeeklyAllowanceToggle from './WeeklyAllowanceToggle';
import CustomButton from './Button';
import { BsArrowRight } from 'react-icons/bs';
import { useFormStore } from '@/store/form';
import { FormEvent, useState } from 'react';
import DetailInputForm from './DetailInputForm';

export default function WorkForm() {
  const [detailToggle, setDetailToggle] = useState<boolean>(false);
  const [selectDays, setSelectedDays] = useState<{ [id: string]: string }>({});

  const salarySelected = useFormStore((state) => state.salarySelected);
  const detailForm = useFormStore((state) => state.detailForm);
  const resetForm = useFormStore((action) => action.resetForm);
  const setIsCalculated = useFormStore((action) => action.setIsCalculated);
  const changeSalaryType = useFormStore((action) => action.changeSalaryType);
  const clearDetailForm = useFormStore((action) => action.clearDetailForm);
  const dailyWorkingHours = useFormStore((state) => state.dailyWorkingHours);
  const weeklyWorkDays = useFormStore((state) => state.weeklyWorkDays);
  const hourlyWage = useFormStore((state) => state.hourlyWage);
  const nightWorkingHours = useFormStore((state) => state.nightWorkingHours);
  const holidayWorkingHours = useFormStore(
    (state) => state.holidayWorkingHours
  );

  const dynamicLabelValue =
    salarySelected === 'day' ? '일' : salarySelected === 'week' ? '주' : '월';

  const resetToggle = () => {
    setDetailToggle(false);
  };

  const onClickCalculate = (e: FormEvent) => {
    e.preventDefault();
    // 간단 입력 폼
    if (!hourlyWage) {
      alert('시급을 입력해주세요.');
      return;
    }
    if (
      dailyWorkingHours == 0 &&
      detailForm.length === 0 &&
      nightWorkingHours == 0 &&
      holidayWorkingHours == 0
    ) {
      alert('일일 근무시간을 입력해주세요.');
      return;
    }
    // dailyWorkingHours가 빈배열일 시 true로 판단하기 때문에 따로 처리
    if (Array.isArray(dailyWorkingHours) && dailyWorkingHours.length === 0) {
      alert('일일 근무시간을 입력해주세요.');
      return;
    }

    // 상세 입력 모드일 때
    if (detailForm.length > 0) {
      if (detailForm.length === 0) {
        alert('일일 근무시간을 입력해주세요.');
        return;
      }
      const isInvalidDetail = detailForm.some(
        (item) => !item.day || !item.time || item.time === '0'
      );

      if (isInvalidDetail) {
        alert('상세 근무시간에 요일 또는 시간을 모두 입력해주세요.');
        return;
      }
    }

    // 근무 시간 검증이 끝난 후 마지막에 검증(상세 입력 모드가 아닐때에 작동)
    if (
      detailForm.length === 0 &&
      weeklyWorkDays === '0' &&
      salarySelected !== 'day'
    ) {
      alert('일주 근무일수를 입력해주세요.');
      return;
    }
    return setIsCalculated();
  };

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
          changeSalaryType();
          clearDetailForm();
          setSelectedDays({});
        }}
      />
      {salarySelected == 'day' ||
        (!detailToggle && (
          <FormField label="일주 근무일수" hasToggle={false} itemType="day" />
        ))}
      {detailToggle &&
        detailForm.map((item) => (
          <DetailInputForm
            key={item.id}
            id={item.id.toString()}
            selectDays={selectDays}
            setSelectedDays={setSelectedDays}
          />
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
          onClick={(e: FormEvent) => onClickCalculate(e)}
        />
        <CustomButton btnType="reset" onClick={() => resetForm()} />
      </div>
    </form>
  );
}
