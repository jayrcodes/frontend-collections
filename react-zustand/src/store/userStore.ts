import { create } from 'zustand';

export type User = {
  email: string;
  created_at: string;
};

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  userJSON: () => string;
}

const useUserStore = create<UserState>()((set, get) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  userJSON: () => JSON.stringify(get().user)
}));

export default useUserStore;
