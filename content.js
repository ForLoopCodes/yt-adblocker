let allAdsSkipped = false;

function clickSkipAdButton() {
  const skipButton = document.querySelector(".ytp-ad-skip-button");
  if (skipButton) {
    skipButton.click();
    return true; // Indicate that the ad was skipped
  }
  return false; // Indicate that there was no ad to skip
}

function checkForAd() {
  const adText = document.querySelector(".ytp-ad-text");
  const video = document.querySelector("video");

  if (adText) {
    video.playbackRate = 16.0;
    setInterval(() => {
      clickSkipAdButton();
    }, 100);
  } else {
    video.playbackRate = 1.0;
    allAdsSkipped = true;
  }
}

// Attempt to click the skip button every second
const intervalId = setInterval(() => {
  if (allAdsSkipped) {
    clearInterval(intervalId); // Stop checking once the ad is skipped
  } else {
    checkForAd(); // Adjust the playback speed if there's an ad
  }
}, 100);
