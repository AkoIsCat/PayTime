'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main');
    }, 1200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Background>
      <Contents>
        <div className="text-red">splash</div>
      </Contents>
    </Background>
  );
}
