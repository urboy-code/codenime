import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  return (
    // Wrapper satu kartu
    <div>
      <Skeleton height={240} />
      <Skeleton height={20} className="mt-2" />
    </div>
  );
};

export default CardSkeleton