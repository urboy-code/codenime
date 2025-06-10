const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchApi = async (resource: string, query?: any) => {
  const params = new URLSearchParams(query).toString();
  const url = `${baseUrl}/${resource}?${params}`;

  console.log(`Fetching from: ${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Gagal Fetch Data Dari ${url}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchApi;
