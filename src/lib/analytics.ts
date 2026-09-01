export function pushDataLayer(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
}

export function trackPageView(path: string, title: string) {
  pushDataLayer("page_view", { page_path: path, page_title: title });
}

export function trackAddToCart(product: {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}) {
  pushDataLayer("add_to_cart", {
    product_slug: product.slug,
    product_name: product.name,
    price: product.price,
    quantity: product.quantity,
  });
}

export function trackViewItem(product: {
  slug: string;
  name: string;
  price: number;
}) {
  pushDataLayer("view_item", {
    product_slug: product.slug,
    product_name: product.name,
    price: product.price,
  });
}
