g = (e) => {
  return document.querySelector(e);
};
[b, a, v] = [g(".ytp-ad-skip-button"), g(".ytp-ad-text"), g("video")];
i = setInterval(() => {
  (() => {
    b.click();
    return b ? 1 : 0;
  })
    ? clearInterval(i)
    : () => {
        setInterval(() => {
          b.click();
        }, 500);
        v.playbackRate = a ? 16 : 1;
      };
}, 500);
