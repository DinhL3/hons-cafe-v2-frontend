export interface MenuCategory {
  id: string;
  name: string;
  sortOrder: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  available: boolean;
  imageUrl: string;
  tags: string[];
}

export interface MenuResponse {
  categories: MenuCategory[];
  items: MenuItem[];
}
