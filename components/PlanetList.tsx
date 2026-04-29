'use client'

import { useLocale } from 'next-intl'

const planetsEn = [
  { sym: '☉︎', name: 'Sun',   sign: 'Aries · 1st House' },
  { sym: '☽︎', name: 'Moon',  sign: 'Pisces · 6th House' },
  { sym: '♀︎', name: 'Venus', sign: 'Taurus · 8th House' },
  { sym: '♂︎', name: 'Mars',  sign: 'Scorpio · 2nd House' },
]

const planetsZh = [
  { sym: '☉︎', name: '太陽', sign: '牡羊座 · 第一宮' },
  { sym: '☽︎', name: '月亮', sign: '雙魚座 · 第六宮' },
  { sym: '♀︎', name: '金星', sign: '金牛座 · 第八宮' },
  { sym: '♂︎', name: '火星', sign: '天蠍座 · 第二宮' },
]

export default function PlanetList() {
  const locale = useLocale()
  const planets = locale === 'zh' ? planetsZh : planetsEn
  return (
    <div className="planet-list">
      {planets.map((p, i) => (
        <div
          key={i}
          className="planet-row prow-click"
          id={`prow-${i}`}
          onClick={() => {
            if (typeof window !== 'undefined' && window.chartSelectPlanet) {
              window.chartSelectPlanet(i)
            }
          }}
        >
          <div className="pl-sym">{p.sym}</div>
          <div className="pl-name">{p.name}</div>
          <div className="pl-sign">{p.sign}</div>
          <div className="pl-bar-bg">
            <div className="pl-bar" style={{ width: `${[85, 60, 72, 78][i]}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
