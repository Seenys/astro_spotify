import { allPlaylists, songs as allSongs } from "@/lib/data.ts";

export async function GET({ params, request }) {
  // get the id from the url search params
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");

  // get the playlist by id
  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const songs = allSongs.filter((song) => song.albumId === playlist.albumId);

  // return the playlist and songs
  return new Response(JSON.stringify({ playlist, songs }));
}
