declare module 'js-cookie' {
  interface Cookies {
    get(name: string): string | undefined;
    set(name: string, value: string, options?: { expires?: number }): void;
    remove(name: string): void;
  }

  const Cookies: Cookies;
  export default Cookies;
}
