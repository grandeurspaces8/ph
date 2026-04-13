'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function useUTMCapture() {
  const searchParams = useSearchParams()
  useEffect(() => {
    const keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','fbclid','gad_source','gad_campaignid']
    const captured = {}
    keys.forEach(k => { const v = searchParams.get(k); if (v) captured[k] = v })
    if (Object.keys(captured).length > 0)
      sessionStorage.setItem('campaign_params', JSON.stringify(captured))
  }, [searchParams])
}

export function getCampaignParams() {
  if (typeof window === 'undefined') return {}
  try { return JSON.parse(sessionStorage.getItem('campaign_params') || '{}') } catch { return {} }
}
