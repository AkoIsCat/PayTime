import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import Image from 'next/image';

import Logo from '@/asset/PayTimeLogo.png';

export default function Splash() {
  return (
    <Background>
      <Contents splash={1}>
        <Image src={Logo} width={316} height={316} alt="페이타임 로고" />
        <div className="text-5xl mt-2">PayTime</div>
      </Contents>
    </Background>
  );
}
