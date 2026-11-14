export type ProductStatus = "draft" | "active" | "archived";
export type AffiliateProvider = "whop" | "internal" | "other";
export type CommissionType = "percent" | "fixed";
export type UserRole = "user" | "affiliate" | "admin";

export interface Category {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  category_id: string | null;
  product_type: string | null;
  image_url: string | null;
  website_url: string | null;
  purchase_url: string | null;
  affiliate_enabled: boolean;
  affiliate_provider: AffiliateProvider | null;
  affiliate_base_url: string | null;
  commission_type: CommissionType | null;
  commission_value: number | null;
  price: number | null;
  currency: string;
  status: ProductStatus;
  created_at: string;
}

export interface Profile {
  id: string;
  full_name: string | null;
  role: UserRole;
  referral_code: string | null;
  created_at: string;
}

export interface AffiliateLink {
  id: string;
  affiliate_id: string;
  product_id: string;
  url: string;
  created_at: string;
}