export const fetchDogImage = async (setImageUrl, setBreedName, resetShowBreed) => {
    try {
      // Use a variável de ambiente para a URL da API
      const response = await fetch(process.env.NEXT_PUBLIC_DOG_API_URL);
      const data = await response.json();
      const imageUrl = data.message;
  
      setImageUrl(imageUrl);
  
      // Extrair o nome da raça da URL
      const breed = imageUrl.split('/')[4];
      setBreedName(breed);
  
      // Executa o callback para esconder o nome da raça, se fornecido
      if (resetShowBreed) resetShowBreed();
    } catch (error) {
      console.error('Erro ao buscar a imagem de cachorro:', error);
    }
  };