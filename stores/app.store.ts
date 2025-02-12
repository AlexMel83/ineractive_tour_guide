import { defineStore } from 'pinia';
import { useNuxtApp } from 'nuxt/app';
import type { AuthApi } from '../api/auth';

interface User {
  id: number;
  email: string;
  facabook_id: string;
  google_id: string;
  name: string;
  surname: string;
  phone: string;
  picture: string;
  role: string;
  social_login: boolean;
  isactivated: boolean;
  created_at: string;
  updated_at: string;
}

interface AuthResponse {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken?: string;
    expAcToken?: string;
    expRfToken?: string;
  };
}

export const useAppStore = defineStore('auth', {
  state: () => ({
    isMenuOpen: false,
    isLoading: false,
    menuOpen: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: null as AuthResponse | null,
    isAuthed: false,
  }),
  actions: {
    saveUserData(data: Partial<AuthResponse>) {
      if (!this.userData) {
        this.userData = {
          user: {
            id: 0,
            email: '',
            name: '',
            surname: '',
            phone: '',
            role: '',
            activationlink: '',
            isactivated: false,
            social_login: false,
            facebook_id: null,
            google_id: '',
            picture: '',
            created_at: '',
            updated_at: '',
          },
          tokens: {
            accessToken: '',
            refreshToken: undefined,
            expAcToken: undefined,
          },
        };
      }
      if (data.user) {
        this.userData.user = { ...this.userData.user, ...data.user };
      }
      if (data.tokens) {
        this.userData.tokens = { ...this.userData.tokens, ...data.tokens };
      }
      this.isAuthed = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(this.userData));
      }
    },
    loadUserData() {
      if (typeof window !== 'undefined') {
        const data = localStorage.getItem('userData');
        if (data) {
          this.userData = JSON.parse(data);
          this.isAuthed = !!this.userData.tokens?.accessToken;
          return this.userData;
        }
      }
      return null;
    },
    async logOut() {
      const nuxtApp = useNuxtApp();
      const $api = nuxtApp.$api as { auth: AuthApi };
      try {
        await $api.auth.logout();
        this.$reset(); // очищення Pinia-стану
        if (typeof window !== 'undefined') {
          localStorage.clear();
        }
      } catch (error) {
        console.error('Error during logOut:', error);
      }
    },
  },
});

export const useIsLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: true,
  }),
  actions: {
    set(data: boolean) {
      this.$patch({ isLoading: data });
    },
  },
});
