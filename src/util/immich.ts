import {
  AssetMediaSize,
  init,
  viewAsset,
  type AlbumResponseDto,
} from "@immich/sdk";

export const dataUrlForAsset = async (id: string, size?: AssetMediaSize) => {
  const blob = await viewAsset({ id, size });
  const arrayBuffer = await blob.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  return `data:${blob.type};base64,${base64}`;
};

export const transformPublicAlbums = (
  albums: AlbumResponseDto[],
): AlbumResponseDto[] =>
  albums
    .filter((album) => album.albumName.includes("[PUBLIC]"))
    .map((album) => ({
      ...album,
      albumName: album.albumName.replace("[PUBLIC]", "").trim(),
    }));

let immichInitialized = false;
export const ensureImmich = () => {
  if (!immichInitialized) {
    init({
      baseUrl: "https://photos.danielpower.ca/api",
      apiKey: import.meta.env.IMMICH_API_KEY,
    });
    immichInitialized = true;
  }
};
