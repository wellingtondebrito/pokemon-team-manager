import { create } from "zustand";
import { persist } from "zustand/middleware";

interface USer {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: USer | null;
    isAuthenticated: boolean;
    login: (userData: USer) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({ 
            user: null,
            isAuthenticated: false,
            login: (userData) => set({ user: userData, isAuthenticated: true }),
            logout: () => set({ user: null, isAuthenticated: false })
        }),
        {
            name: "auth-storage"
        }
    )
);
