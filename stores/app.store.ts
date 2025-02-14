import { defineStore } from 'pinia';
import { useNuxtApp } from 'nuxt/app';
import type { AuthApi } from '../api/auth';

interface User {
  id: number;
  email: string;
  facebook_id: string | null; // Fixed typo in facebook_id
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

// Removed duplicate store name 'auth'
export const useAppStore = defineStore('app', {
  state: () => ({
    isMenuOpen: false,
    isLoading: false,
    menuOpen: false,
    searchTerm: '',
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    // Added missing action from the bottom of the file
    setSearchTerm(term: string) {
      this.searchTerm = term;
    },
  },
});

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: null as AuthResponse | null,
    isAuthed: false,
  }),
  actions: {
    // Fixed Partial type parameter
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
        this.$reset();
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
