import React from "react";

function VideoCard() {
  return (
    <div className="rounded-lg max-w-sm mt-3 mb-3">
      <img
        src="https://create.microsoft.com/_next/image?url=https%3A%2F%2Fdsgrcdnblobprod5u3.azureedge.net%2Fcmsassets%2FyoutubeBanner-Thumbnail.png&w=1920&q=90"
        alt="thumbnail"
        width={300}
        className="rounded-lg mb-4"
      />
      <div className="flex items-center space-x-4">
        <img
          src="https://d.newsweek.com/en/full/2456023/mrbeast.jpg?w=1600&h=1600&q=88&f=e4d43bea5c43858794bf8fe9db21e045"
          alt="creator_logo"
          width="40"
          className="rounded-full"
        />
        <div>
          <h1 className="text-white font-semibold">How to make thumbnail?</h1>
          <h2 className="text-gray-400">YouTube Guide</h2>
          <h2 className="text-gray-400">1.6M views • 1 year ago</h2>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
