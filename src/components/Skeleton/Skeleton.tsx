import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoading = () => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-12">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton height={240} />
          <Skeleton height={20} width={`80%`} />
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoading