import { Pause, Play } from "./Player";

const CardPlayButton = ({ id }: { id: string }) => (
  <div className="card-play-button rounded-full bg-green-500 p-4">
    <Play />
  </div>
);

export default CardPlayButton;
