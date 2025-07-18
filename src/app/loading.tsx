import React from 'react';
import SkeletonLoading from '@/components/ui/Skeleton';
import HeroSkeleton from '@/components/ui/HeroSkeleton';

const loading = () => {
  return (
    <div>
      <HeroSkeleton />
      <SkeletonLoading count={11} />
    </div>
  );
};

export default loading;
