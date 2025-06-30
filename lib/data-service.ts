
export interface ReturnWithDetails {
  id: string
  status: string
  shopify_order_id: string
  customer_email: string
  reason: string
  total_amount: number
  return_items: Array<{
    product_name: string
    quantity: number
  }>
  ai_suggestions: Array<{
    suggested_product_name: string
    confidence_score: number
    accepted?: boolean
  }>
}

export interface DashboardMetrics {
  totalReturns: number
  totalReturnsChange: number
  exchangeRate: number
  exchangeRateChange: number
  aiAcceptanceRate: number
  aiAcceptanceRateChange: number
  revenueSaved: number
  revenueSavedChange: number
}

export interface Merchant {
  id: string
  shop_domain: string
  name: string
  access_token: string
  webhook_verified: boolean
  created_at: string
  updated_at: string
}

export const dataService = {
  async getDashboardMetrics(merchantId: string): Promise<DashboardMetrics> {
    return {
      totalReturns: 125,
      totalReturnsChange: 12,
      exchangeRate: 65,
      exchangeRateChange: 8,
      aiAcceptanceRate: 78,
      aiAcceptanceRateChange: 15,
      revenueSaved: 2850,
      revenueSavedChange: 22
    }
  },

  async getReturns(merchantId: string, filters?: any): Promise<{ returns: ReturnWithDetails[] }> {
    return { returns: [] }
  },

  async getReturnTrends(merchantId: string, days: number): Promise<any[]> {
    return []
  },

  async getReturnReasons(merchantId: string): Promise<any[]> {
    return []
  },

  async updateReturnStatus(returnId: string, status: string, merchantId: string): Promise<boolean> {
    return true
  },

  async getMerchant(merchantId: string): Promise<Merchant | null> {
    // Mock data for demo
    return {
      id: merchantId,
      shop_domain: "demo-store.myshopify.com",
      name: "Demo Store",
      access_token: "demo_token",
      webhook_verified: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },

  async getMerchantByDomain(domain: string): Promise<Merchant | null> {
    // Mock data for demo
    if (domain === "demo-store") {
      return {
        id: "550e8400-e29b-41d4-a716-446655440000",
        shop_domain: "demo-store.myshopify.com",
        name: "Demo Store",
        access_token: "demo_token",
        webhook_verified: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    }
    return null
  }
}
