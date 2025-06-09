import React from 'react'
import SkeletonLoading from '@/components/Skeleton/Skeleton'

const loading = () => {
  return (
    <div>
      <SkeletonLoading count={11} />
    </div>
  )
}

export default loading