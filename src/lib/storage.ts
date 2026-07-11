export const storage = {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);

      if (!item) {
        return null;
      }

      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  },


  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch {
      console.error(
        `Unable to save ${key} to storage`
      );
    }
  },


  remove(key: string): void {
    localStorage.removeItem(key);
  },


  clear(): void {
    localStorage.clear();
  },


  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
};


export const STORAGE_KEYS = {
  CART: "shopverse_cart",
  WISHLIST: "shopverse_wishlist",
  USER: "shopverse_user",
  TOKEN: "shopverse_token"
} as const;
