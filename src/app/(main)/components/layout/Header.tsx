import Image from 'next/image';

import Logo from '@/asset/PayTimeLogo_RemoveBg.png';

export default function Header() {
  return (
    <header className="w-full max-w-contentsWidth mx-auto h-header bg-white flex justify-center items-center">
      <div>
        <Image
          src={Logo}
          alt="페이타임 헤더 로고"
          width={100}
          height={100}
          priority
        />
      </div>
    </header>
  );
}
