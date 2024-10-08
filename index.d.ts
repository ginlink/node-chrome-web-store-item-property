declare module '@ginlink/chrome-web-store-item-property' {
  interface InteractionCount {
    UserDownloads: number;
  }

  interface ChromeWebStoreItem {
    type: string;
    name: string;
    description: string;
    image: string;
    url: string;
    version: string;
    id: string;

    price?: string;
    priceCurrency?: string;
    interactionCount?: InteractionCount;
    operatingSystem?: string;
    ratingValue?: number;
    ratingCount?: number;
  }

  function run(
    identifier: string,
    options?: {
      headers?: Record<string, any>;
      qs?: {
        hl?: string;
        gl?: string;
      };
      newConvert?: boolean;
    }
  ): Promise<ChromeWebStoreItem>;

  export { run };
}
