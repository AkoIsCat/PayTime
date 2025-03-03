import Image from 'next/image';

import Logo from '@/asset/PayTimeLogo.png';

export default function Header() {
  return (
    <header className="w-contentsWidth h-header bg-white flex justify-center items-center">
      <div>
        <Image
          src={Logo}
          alt="페이타임 헤더 로고"
          width={60}
          height={60}
          priority
        />
      </div>
    </header>
  );
}
