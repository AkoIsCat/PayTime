'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import Image from 'next/image';
import { Fredoka } from 'next/font/google';

import Logo from '@/asset/paytime_image_cropped.png';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

const fredoka = Fredoka({ subsets: ['latin'], weight: '500' });

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
      <div>test</div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={transitionEffect}
        className="w-full sm:w-[595px] max-w-contentsWidth"
      >
        <Contents splash={1}>
          <Image src={Logo} width={250} height={250} alt="페이타임 로고" />
          <div
            className={`text-3.5rem mt-5 text-logoText ${fredoka.className}`}
          >
            PayTime
          </div>
        </Contents>
      </motion.div>
    </Background>
  );
}
