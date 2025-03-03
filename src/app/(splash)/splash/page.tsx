'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import Image from 'next/image';

import Logo from '@/asset/PayTimeLogo_RemoveBg.png';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main');
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  const transitionEffect = {
    duration: 0.5,
    delay: 1,
  };

  return (
    <Background>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={transitionEffect}
      >
        <Contents splash={1}>
          <Image src={Logo} width={316} height={316} alt="페이타임 로고" />
          <div className="text-5xl mt-2">PayTime</div>
        </Contents>
      </motion.div>
    </Background>
  );
}
