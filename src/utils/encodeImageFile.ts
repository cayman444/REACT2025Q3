export const encodeImageFile = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result as string;
      resolve(base64);
    };

    reader.readAsDataURL(file);
  });
};
