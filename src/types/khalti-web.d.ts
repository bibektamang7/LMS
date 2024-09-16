declare module 'khalti-web' {
    interface KhaltiCheckoutConfig {
      publicKey: string;
      productIdentity: string;
      productName: string;
      productUrl?: string;
      eventHandler: {
        onSuccess: (payload: any) => void;
        onError: (error: any) => void;
        onClose: () => void;
      };
      paymentPreference?: string[];
    }
  
    class KhaltiCheckout {
      constructor(config: KhaltiCheckoutConfig);
      show(options: { amount: number; mobile?: string }): void;
    }
  
    export default KhaltiCheckout;
  }
  