import { MergeChildrenSplash } from '@/types';

export default function Contents({ children, splash }: MergeChildrenSplash) {
  // 동적 클래스를 할당하기 위한 객체
  const backgroundGradient = {
    1: 'bg-gradient-to-t from-splashStart to-splashEnd',
    0: 'bg-white',
  };

  return (
    <div
      className={`${backgroundGradient[splash]} w-full sm:w-[595px] max-w-contentsWidth min-h-screen flex items-center justify-center flex-col mx-auto`}
    >
      {children}
    </div>
  );
}
