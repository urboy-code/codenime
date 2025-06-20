import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeroSkeleton = () => {
  return (
    <div className="h-[50vh] w-full md:h-[80vh] bg-slate-800 animate-pulse hidden md:block">
      <div className="relative z-10 flex h-full flex-col justify-center items-start px-12">
        <Skeleton height={40} width={`60%`} baseColor="#334155" highlightColor="#475569" />
        <div className='mt-4 w-full max-w-2xl'>
          <Skeleton count={2} baseColor='#334155' highlightColor='#475569'/>
        </div>

        <div className='mt-6'>
          <Skeleton height={48} width={140} baseColor='#334155' highlightColor='#475569'/>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
