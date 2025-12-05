import MainTemplateSkeleton from './MainTemplateSkeleton';
import Box from '../atoms/Box';

const HomepageSkeleton = () => {
  return (
    <MainTemplateSkeleton>
      <Box className="mb-0 mt-10 xl:my-10 flex flex-col gap-8">
        <Box className="flex flex-col xl:flex-row items-center justify-start gap-0">
          <Box className="w-full animate-pulse">
            <Box className="flex flex-col gap-6">
              <Box className="space-y-3">
                <Box className="h-8 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4 animate-shimmer">
                  <span className="invisible">Loading</span>
                </Box>
                <Box
                  className="h-8 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-full animate-shimmer"
                  style={{ animationDelay: '0.1s' }}>
                  <span className="invisible">Loading</span>
                </Box>
                <Box
                  className="h-8 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-5/6 animate-shimmer"
                  style={{ animationDelay: '0.2s' }}>
                  <span className="invisible">Loading</span>
                </Box>
              </Box>

              <Box className="space-y-2 mt-4">
                <Box
                  className="h-4 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-full animate-shimmer"
                  style={{ animationDelay: '0.3s' }}>
                  <span className="invisible">Loading</span>
                </Box>
                <Box
                  className="h-4 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-4/5 animate-shimmer"
                  style={{ animationDelay: '0.4s' }}>
                  <span className="invisible">Loading</span>
                </Box>
              </Box>

              <Box className="mt-6">
                <Box
                  className="h-12 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-48 animate-shimmer"
                  style={{ animationDelay: '0.5s' }}>
                  <span className="invisible">Loading</span>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="w-full xl:max-w-[632px] mt-8 xl:mt-0">
            <Box className="animate-pulse">
              <Box className="flex items-center justify-center gap-2 w-full mb-8">
                <Box
                  className="h-10 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-32 animate-shimmer"
                  style={{ animationDelay: '0.6s' }}>
                  <span className="invisible">Loading</span>
                </Box>
              </Box>

              <Box className="relative flex items-center justify-center w-full overflow-hidden">
                <Box className="absolute left-0 z-50 p-4">
                  <Box
                    className="h-6 w-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                    style={{ animationDelay: '0.7s' }}>
                    <span className="invisible">Loading</span>
                  </Box>
                </Box>

                <Box
                  className="relative h-[420px] flex justify-center items-center"
                  style={{ width: '100%', maxWidth: '632px' }}>
                  <Box className="w-[292px] bg-white rounded-2xl shadow-lg p-6 space-y-4">
                    <Box className="h-48 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-shimmer">
                      <span className="invisible">Loading</span>
                    </Box>

                    <Box
                      className="h-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 animate-shimmer"
                      style={{ animationDelay: '0.1s' }}>
                      <span className="invisible">Loading</span>
                    </Box>

                    <Box
                      className="h-4 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2 animate-shimmer"
                      style={{ animationDelay: '0.2s' }}>
                      <span className="invisible">Loading</span>
                    </Box>

                    <Box className="flex gap-2 flex-wrap">
                      <Box
                        className="h-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-16 animate-shimmer"
                        style={{ animationDelay: '0.3s' }}>
                        <span className="invisible">Loading</span>
                      </Box>
                      <Box
                        className="h-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-20 animate-shimmer"
                        style={{ animationDelay: '0.4s' }}>
                        <span className="invisible">Loading</span>
                      </Box>
                      <Box
                        className="h-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-24 animate-shimmer"
                        style={{ animationDelay: '0.5s' }}>
                        <span className="invisible">Loading</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box className="absolute right-0 z-50 p-4">
                  <Box
                    className="h-6 w-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer"
                    style={{ animationDelay: '0.8s' }}>
                    <span className="invisible">Loading</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="mt-0 mb-16 xl:mt-8 xl:mb-0">
          <Box className="animate-pulse">
            <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <Box
                  key={index}
                  className="bg-white rounded-xl p-6 space-y-4"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <Box className="h-12 w-12 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-shimmer">
                    <span className="invisible">Loading</span>
                  </Box>

                  <Box
                    className="h-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 animate-shimmer"
                    style={{ animationDelay: '0.1s' }}>
                    <span className="invisible">Loading</span>
                  </Box>
                </Box>
              ))}
            </Box>
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
    </MainTemplateSkeleton>
  );
};

export default HomepageSkeleton;
