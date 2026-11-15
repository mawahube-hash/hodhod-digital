export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      affiliate_enrollments: {
        Row: {
          affiliate_id: string
          created_at: string
          id: string
          product_id: string
          status: string
        }
        Insert: {
          affiliate_id: string
          created_at?: string
          id?: string
          product_id: string
          status?: string
        }
        Update: {
          affiliate_id?: string
          created_at?: string
          id?: string
          product_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_enrollments_affiliate_id_fkey"
            columns: ["affiliate_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_enrollments_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_links: {
        Row: {
          clicks_count: number | null
          created_at: string
          custom_slug: string
          external_affiliate_url: string | null
          id: string
          product_id: string
          user_id: string
        }
        Insert: {
          clicks_count?: number | null
          created_at?: string
          custom_slug: string
          external_affiliate_url?: string | null
          id?: string
          product_id: string
          user_id: string
        }
        Update: {
          clicks_count?: number | null
          created_at?: string
          custom_slug?: string
          external_affiliate_url?: string | null
          id?: string
          product_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_links_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_links_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      clicks: {
        Row: {
          affiliate_code: string
          created_at: string
          id: string
          product_slug: string
        }
        Insert: {
          affiliate_code: string
          created_at?: string
          id?: string
          product_slug: string
        }
        Update: {
          affiliate_code?: string
          created_at?: string
          id?: string
          product_slug?: string
        }
        Relationships: []
      }
      commissions: {
        Row: {
          affiliate_id: string
          amount: number
          created_at: string
          id: string
          order_reference: string | null
          product_id: string | null
          status: string | null
        }
        Insert: {
          affiliate_id: string
          amount: number
          created_at?: string
          id?: string
          order_reference?: string | null
          product_id?: string | null
          status?: string | null
        }
        Update: {
          affiliate_id?: string
          amount?: number
          created_at?: string
          id?: string
          order_reference?: string | null
          product_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commissions_affiliate_id_fkey"
            columns: ["affiliate_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commissions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      conversions: {
        Row: {
          affiliate_id: string | null
          amount: number
          approved_at: string | null
          commission_amount: number
          created_at: string
          currency: string
          id: string
          paid_at: string | null
          product_id: string | null
          status: string
          whop_payment_id: string
        }
        Insert: {
          affiliate_id?: string | null
          amount?: number
          approved_at?: string | null
          commission_amount?: number
          created_at?: string
          currency?: string
          id?: string
          paid_at?: string | null
          product_id?: string | null
          status?: string
          whop_payment_id: string
        }
        Update: {
          affiliate_id?: string | null
          amount?: number
          approved_at?: string | null
          commission_amount?: number
          created_at?: string
          currency?: string
          id?: string
          paid_at?: string | null
          product_id?: string | null
          status?: string
          whop_payment_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversions_affiliate_id_fkey"
            columns: ["affiliate_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          add_to_cart_enabled: boolean | null
          affiliate_base_url: string | null
          affiliate_enabled: boolean | null
          affiliate_provider: string | null
          article: string | null
          category_id: string | null
          commission_type: string | null
          commission_value: number | null
          compare_price: number | null
          cookie_days: number
          created_at: string
          currency: string | null
          description: string | null
          featured: boolean | null
          gallery: string[] | null
          id: string
          image_url: string | null
          name: string
          price: number | null
          product_type: string | null
          purchase_url: string | null
          rating: number | null
          rating_count: number | null
          sales_count: number | null
          short_description: string | null
          slug: string
          status: string | null
          video_url: string | null
          website_url: string | null
          whop_plan_id: string | null
          whop_product_id: string | null
        }
        Insert: {
          add_to_cart_enabled?: boolean | null
          affiliate_base_url?: string | null
          affiliate_enabled?: boolean | null
          affiliate_provider?: string | null
          article?: string | null
          category_id?: string | null
          commission_type?: string | null
          commission_value?: number | null
          compare_price?: number | null
          cookie_days?: number
          created_at?: string
          currency?: string | null
          description?: string | null
          featured?: boolean | null
          gallery?: string[] | null
          id?: string
          image_url?: string | null
          name: string
          price?: number | null
          product_type?: string | null
          purchase_url?: string | null
          rating?: number | null
          rating_count?: number | null
          sales_count?: number | null
          short_description?: string | null
          slug: string
          status?: string | null
          video_url?: string | null
          website_url?: string | null
          whop_plan_id?: string | null
          whop_product_id?: string | null
        }
        Update: {
          add_to_cart_enabled?: boolean | null
          affiliate_base_url?: string | null
          affiliate_enabled?: boolean | null
          affiliate_provider?: string | null
          article?: string | null
          category_id?: string | null
          commission_type?: string | null
          commission_value?: number | null
          compare_price?: number | null
          cookie_days?: number
          created_at?: string
          currency?: string | null
          description?: string | null
          featured?: boolean | null
          gallery?: string[] | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number | null
          product_type?: string | null
          purchase_url?: string | null
          rating?: number | null
          rating_count?: number | null
          sales_count?: number | null
          short_description?: string | null
          slug?: string
          status?: string | null
          video_url?: string | null
          website_url?: string | null
          whop_plan_id?: string | null
          whop_product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          affiliate_code: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          role: string | null
          whop_username: string | null
        }
        Insert: {
          affiliate_code?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          role?: string | null
          whop_username?: string | null
        }
        Update: {
          affiliate_code?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          whop_username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

export type Product = Tables<'products'>
export type Category = Tables<'categories'>
