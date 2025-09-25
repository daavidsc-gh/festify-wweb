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

export function getArtists(search = ""): Artist[] {
  const query = search.toLowerCase().trim();

  if (!query) {
    return ARTISTS;
  }

  return ARTISTS.filter((artist) => {
    const searchableFields = [artist.name, artist.genre ?? ""];

    return searchableFields.some((field) =>
      field.toLowerCase().includes(query)
    );
  });
}

export function getArtistById(id: number): Artist | null {
  const artist = ARTISTS.find((artist) => artist.id === id);
  return artist ?? null;
}