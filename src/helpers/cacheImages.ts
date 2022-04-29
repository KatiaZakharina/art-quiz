export const cacheImages = async (srcArray: string[], setIsLoading: (state: boolean) => void) => {
  const promise = srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  await Promise.all(promise);
  console.log(false);

  setIsLoading(false);
};
