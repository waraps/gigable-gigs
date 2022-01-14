export const APIGigs = {
  async get(page: number = 1, lat: number = 53.33306, lng: number = -6.24889) {
    const response = await fetch(
      `https://api.gigable.dev/helpers/gigs?page=${page}&rows=10&lat=${lat}&lng=${lng}`
    );
    return await response.json();
  },
  async getOne(id: number) {
    const response = await fetch(`https://api.gigable.dev/gigs/${id}`);
    return await response.json();
  },
};
