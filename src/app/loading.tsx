import React from 'react'
import SkeletonLoading from '@/components/Skeleton/Skeleton'
import HeroSkeleton from '@/components/Skeleton/HeroSkeleton';


const loading = () => {
  return (
    <div>
      <HeroSkeleton />
      <SkeletonLoading count={11} />
    </div>
  );
}

export default loading