import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setCurrentMusic: (currentMusic: any) => set({ currentMusic }),
}));
