'use client'

const planets = [
  { sym: '☉︎', name: 'Sun', sign: 'Aries · 1st House' },
  { sym: '☽︎', name: 'Moon', sign: 'Pisces · 6th House' },
  { sym: '♀︎', name: 'Venus', sign: 'Taurus · 8th House' },
  { sym: '♂︎', name: 'Mars', sign: 'Scorpio · 2nd House' },
]

export default function PlanetList() {
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
