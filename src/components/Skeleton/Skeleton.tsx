import CardSkeleton from './CardSkeleton';
const SkeletonLoading = ({ count = 12 }) => {
  return (
    <main>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-12 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
        <CardSkeleton />
      </div>
    </main>
  );
};

export default SkeletonLoading;
