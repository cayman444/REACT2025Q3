export const encodeImageFile = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result as ArrayBuffer;
      resolve(base64);
    };

    reader.readAsDataURL(file);
  });
};
