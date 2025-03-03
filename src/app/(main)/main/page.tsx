import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';

import { MergeChildrenSplash } from '@/types';

export default function Main({ splash, children }: MergeChildrenSplash) {
  return (
    <Background>
      <Contents splash={0}>
        <div>메인 페이지</div>
      </Contents>
    </Background>
  );
}
