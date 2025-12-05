import Box from '../atoms/Box';

const FooterSkeleton = () => {
  return (
    <footer className="bg-[#FBFBFB]">
      <Box className="container mx-auto px-4 xl:px-0 py-16 flex flex-col gap-10 xl:max-w-[1200px] animate-pulse">
        <Box className="flex xl:flex-row flex-col items-start xl:items-center gap-4">
          <Box className="flex flex-col gap-2 justify-start xl:flex-3">
            <Box className="h-10 w-48 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer">
              <span className="invisible">Loading</span>
            </Box>

            <Box
              className="h-4 w-64 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded mt-2 animate-shimmer"
              style={{ animationDelay: '0.1s' }}>
              <span className="invisible">Loading</span>
            </Box>
            <Box
              className="h-4 w-48 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
              style={{ animationDelay: '0.2s' }}>
              <span className="invisible">Loading</span>
            </Box>

            <Box
              className="h-4 w-32 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded mt-4 animate-shimmer"
              style={{ animationDelay: '0.3s' }}>
              <span className="invisible">Loading</span>
            </Box>
            <Box
              className="h-4 w-40 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
              style={{ animationDelay: '0.4s' }}>
              <span className="invisible">Loading</span>
            </Box>
          </Box>

          <Box className="grid grid-cols-2 xl:flex xl:flex-wrap gap-4 items-center xl:flex-7">
            {[...Array(4)].map((_, index) => (
              <Box
                key={index}
                className="bg-white rounded-xl p-4 space-y-2 min-w-[160px]"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <Box className="h-10 w-10 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-shimmer">
                  <span className="invisible">Loading</span>
                </Box>
                <Box
                  className="h-4 w-32 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                  style={{ animationDelay: '0.1s' }}>
                  <span className="invisible">Loading</span>
                </Box>
                <Box
                  className="h-3 w-16 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                  style={{ animationDelay: '0.2s' }}>
                  <span className="invisible">Loading</span>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="flex flex-col xl:flex-row items-start xl:items-center gap-8 xl:gap-4">
          <Box className="grid grid-cols-2 xl:flex xl:flex-row items-start xl:items-center gap-8 xl:gap-4 xl:flex-3">
            <Box className="flex flex-col gap-2 justify-start">
              <Box className="h-4 w-16 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer">
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-24 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded mt-2 animate-shimmer"
                style={{ animationDelay: '0.1s' }}>
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-40 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                style={{ animationDelay: '0.2s' }}>
                <span className="invisible">Loading</span>
              </Box>
            </Box>

            <Box className="flex flex-col gap-2 justify-start">
              <Box
                className="h-4 w-16 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                style={{ animationDelay: '0.3s' }}>
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-20 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded mt-2 animate-shimmer"
                style={{ animationDelay: '0.4s' }}>
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-24 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                style={{ animationDelay: '0.5s' }}>
                <span className="invisible">Loading</span>
              </Box>
            </Box>
          </Box>

          <Box className="flex flex-col xl:flex-row gap-8 xl:gap-8 items-start xl:items-center xl:flex-7">
            <Box className="flex flex-col gap-2 justify-start">
              <Box
                className="h-4 w-32 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                style={{ animationDelay: '0.6s' }}>
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-28 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded mt-2 animate-shimmer"
                style={{ animationDelay: '0.7s' }}>
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-36 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                style={{ animationDelay: '0.8s' }}>
                <span className="invisible">Loading</span>
              </Box>
            </Box>

            <Box className="flex flex-col gap-2 justify-start">
              <Box
                className="h-4 w-24 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                style={{ animationDelay: '0.9s' }}>
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-64 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded mt-2 animate-shimmer"
                style={{ animationDelay: '1s' }}>
                <span className="invisible">Loading</span>
              </Box>
              <Box
                className="h-4 w-72 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                style={{ animationDelay: '1.1s' }}>
                <span className="invisible">Loading</span>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="h-4 w-32 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
          style={{ animationDelay: '1.2s' }}>
          <span className="invisible">Loading</span>
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
    </footer>
  );
};

export default FooterSkeleton;
