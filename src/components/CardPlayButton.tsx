import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore.ts";

const CardPlayButton = ({ id }: { id: string }) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    //promise
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { playlist, songs } = data;
        setIsPlaying(true);
        setCurrentMusic({ playlist, songs, song: songs[0] });
      });

    //async await
    // const res = await fetch(`/api/get-info-playlist.json?id=${id}`);
    // const data = await res.json();
    // const { playlist, songs } = data;
    // setIsPlaying(true);
    // setCurrentMusic({ playlist, songs, song: songs[0] });
  };
  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
};

export default CardPlayButton;
