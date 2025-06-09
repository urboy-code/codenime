import React from 'react';
import SkeletonLoading from '@/components/Skeleton/Skeleton';

const loading = () => {
  return (
    <SkeletonLoading count={20}/>
  );
};

export default loading;
