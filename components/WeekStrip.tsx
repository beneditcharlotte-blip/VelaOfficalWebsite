'use client'

import { useEffect, useRef } from 'react'

export default function WeekStrip() {
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip || strip.children.length > 0) return

    const days = [
      { name: 'Mon', mood: 'Expansive', pct: 88, today: false },
      { name: 'Tue', mood: 'Flowing', pct: 76, today: false },
      { name: 'Wed', mood: 'Open', pct: 92, today: true },
      { name: 'Thu', mood: 'Steady', pct: 70, today: false },
      { name: 'Fri', mood: 'Introspective', pct: 42, today: false },
      { name: 'Sat', mood: 'Reflective', pct: 55, today: false },
      { name: 'Sun', mood: 'Renewing', pct: 80, today: false },
    ]

    const r = 20
    const cx = 26
    const cy = 26
    const circ = 2 * Math.PI * r

    days.forEach((d) => {
      const col = document.createElement('div')
      col.className = 'day-col' + (d.today ? ' day-today' : '')

      const arcColor = d.today ? '#5e4e5c' : 'rgba(160,136,152,0.5)'
      const bgColor = 'rgba(180,160,175,0.15)'
      const offset = circ - (circ * d.pct) / 100

      col.innerHTML =
        '<div class="day-name">' +
        d.name +
        '</div>' +
        '<div class="day-arc-wrap">' +
        '<svg viewBox="0 0 52 52" fill="none">' +
        '<circle cx="' +
        cx +
        '" cy="' +
        cy +
        '" r="' +
        r +
        '" stroke="' +
        bgColor +
        '" stroke-width="2.5"/>' +
        '<circle cx="' +
        cx +
        '" cy="' +
        cy +
        '" r="' +
        r +
        '" stroke="' +
        arcColor +
        '" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="' +
        circ.toFixed(2) +
        '" stroke-dashoffset="' +
        offset.toFixed(2) +
        '" transform="rotate(-90 ' +
        cx +
        ' ' +
        cy +
        ')"/>' +
        '<text x="' +
        cx +
        '" y="' +
        (cy + 4.5) +
        '" text-anchor="middle" font-family="Playfair Display,serif" font-size="13" fill="' +
        (d.today ? '#5e4e5c' : '#b0a0ae') +
        '">' +
        d.pct +
        '</text>' +
        '</svg>' +
        '</div>' +
        '<div class="day-mood">' +
        d.mood +
        '</div>'

      strip.appendChild(col)
    })
  }, [])

  return <div className="week-strip" id="weekStrip" ref={stripRef}></div>
}
