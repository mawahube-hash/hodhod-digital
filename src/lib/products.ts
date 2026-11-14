import { supabase } from "./supabase";
import type { Product, Category } from "@/types/database";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*").eq("status", "active").order("created_at", { ascending: false });
  if (error) { console.error(error.message); return []; }
  return (data ?? []) as Product[];
}

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*").order("sort_order");
  if (error) { console.error(error.message); return []; }
  return (data ?? []) as Category[];
}
