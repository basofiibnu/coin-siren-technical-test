import Box from '../atoms/Box';

const HeaderSkeleton = () => {
  return (
    <header className="h-[60px] flex flex-col items-center justify-center">
      <Box className="flex w-full items-center justify-between animate-pulse">
        <Box className="h-10 w-32 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer">
          <span className="invisible">Loading</span>
        </Box>

        <Box className="items-center gap-8 hidden md:flex">
          <Box
            className="h-6 w-12 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
            style={{ animationDelay: '0.1s' }}>
            <span className="invisible">Loading</span>
          </Box>
          <Box
            className="h-6 w-40 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
            style={{ animationDelay: '0.2s' }}>
            <span className="invisible">Loading</span>
          </Box>
        </Box>

        <Box className="hidden md:block">
          <Box
            className="h-10 w-24 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-shimmer"
            style={{ animationDelay: '0.3s' }}>
            <span className="invisible">Loading</span>
          </Box>
        </Box>

        <Box className="md:hidden absolute top-2 right-5">
          <Box className="w-5 h-1.5 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer">
            <span className="invisible">Loading</span>
          </Box>
        </Box>
      </Box>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background-size: 1000px 100%;
        }
      `}</style>
    </header>
  );
};

export default HeaderSkeleton;
