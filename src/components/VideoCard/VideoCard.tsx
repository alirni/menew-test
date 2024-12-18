const VideoCard = () => {
  return (
    <div className="w-full max-w-md flex justify-center items-center bg-gray-100">
      <div className="w-full rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="relative">
          <video
            className="w-full h-48 sm:h-64 md:h-72 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="absolute bottom-4 left-4">
              <h2 className="text-white font-bold text-xl sm:text-2xl">
                Card Title
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
