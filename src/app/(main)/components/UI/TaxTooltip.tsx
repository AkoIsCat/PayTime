export default function TaxTooltip() {
  return (
    <div className="flex flex-col relative w-max bg-white z-50">
      <div className="my-2 font-bold">4대보험 9.32% 공제: </div>
      <div className="my-2">
        근로자를 회사와 고용관계에 있다고 보고 4대보험에 가입하여 세금을
        적용하는 방법입니다.
      </div>
      <div className="my-2">사업주가 직원의 보험료를 일부 함께 부담합니다.</div>
      <div>월 60시간 미만 근로자는 가입 대상이 아니므로 세금 차감 없음</div>
      <div className="font-bold my-2">
        국민연금(9%) + 건강보험료(6.99%) + 장기요양보험(12.27%) + 고용보험(0.9%)
        + 산재보험(없음)
      </div>
      <div className="my-2 font-bold">소득세 3.3% 공제: </div>
      <div className="my-2">
        근로자를 회사와 고용관계가 없는 사업소득자(프리랜서)로 보고 원천
        징수하는 방법입니다.
      </div>
      <div className="my-2">
        이 경우 근로자는 5월 종합소득세 신고기간에 소득을 신고하여 신고액에 따라
        환급 가능합니다.
      </div>
      <div className="font-bold my-2">소득세 3% + 지방소득세(소득세의 10%)</div>
    </div>
  );
}
