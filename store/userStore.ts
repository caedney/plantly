import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserStore = {
  onboarded: boolean;
  toggleOnboarded: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      onboarded: false,
      toggleOnboarded: () => {
        set((state) => {
          return {
            ...state,
            onboarded: !state.onboarded,
          };
        });
      },
    }),
    {
      name: 'plantly-user-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
