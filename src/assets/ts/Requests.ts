export const uploadImage = async (file: File[]) => {
  const data = new FormData();
  data.append("image", file[0]);

  return await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.warn("Erro:", error);
      return null;
    });
};
