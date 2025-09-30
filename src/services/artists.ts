export type Artist = {
  id: number;
  name: string;
  genre?: string;
};

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: "Aurora Waves",
    genre: "Indie",
  },
  {
    id: 2,
    name: "Neon Drums",
    genre: "Electrónica",
  },
  {
    id: 3,
    name: "Ritmo Gitano",
    genre: "Fusión",
  },
];

export function getArtists(name = "", genre = ""): Artist[] {
  const nameQuery = name.toLowerCase().trim();
  const genreQuery = genre.toLowerCase().trim();

  if (!nameQuery && !genreQuery) {
    return ARTISTS;
  }
  debugger;

  return ARTISTS.filter((artist) => {
    return (
      artist.name.toLowerCase() === nameQuery ||
      artist.genre?.toLowerCase() === genreQuery
    );
  });
}

export function getArtistById(id: number): Artist | null {
  const artist = ARTISTS.find((artist) => artist.id === id);
  return artist ?? null;
}