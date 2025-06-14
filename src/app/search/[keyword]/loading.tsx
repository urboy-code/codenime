import React from 'react';
import SkeletonLoading from '@/src/components/Skeleton/Skeleton';
import HeroSkeleton from '@/src/components/Skeleton/HeroSkeleton';

const loading = () => {
  return (
    <div>
      <HeroSkeleton />
      <SkeletonLoading count={20} />
    </div>
  );
};

export default loading;
