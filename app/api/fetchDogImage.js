export const fetchDogImage = async () => {
  try {
    if (!process.env.NEXT_PUBLIC_DOG_API_URL || !process.env.NEXT_PUBLIC_ALL_BREEDS_URL) {
      throw new Error("URLs da API não estão definidas nas variáveis de ambiente.");
    }

    const response = await fetch(process.env.NEXT_PUBLIC_DOG_API_URL);
    if (!response.ok) throw new Error("Erro ao buscar imagem de cachorro");

    const data = await response.json();
    const imageUrl = data.message;

    const breed = imageUrl.split('/')[4];

    const breedsResponse = await fetch(process.env.NEXT_PUBLIC_ALL_BREEDS_URL);
    if (!breedsResponse.ok) throw new Error("Erro ao buscar raças aleatórias");

    const breedsData = await breedsResponse.json();
    const allBreeds = Object.keys(breedsData.message);

    const randomBreeds = allBreeds
      .filter((name) => name !== breed)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    return { imageUrl, breed, randomBreeds };
  } catch (error) {
    console.error('Erro ao buscar a imagem de cachorro:', error.message);
    return null; // Retorna null em caso de erro
  }
};
