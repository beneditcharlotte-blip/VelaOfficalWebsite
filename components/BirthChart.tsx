'use client'

import { useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'

declare global {
  interface Window {
    chartSelectPlanet?: (idx: number) => void
  }
}

export default function BirthChart({ decorative = false }: { decorative?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const locale = useLocale()
  const isZh = locale === 'zh'

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const NS = 'http://www.w3.org/2000/svg'
    const W = 400,
      H = 400,
      CX = 200,
      CY = 200

    const Rz = 185
    const R3 = 170
    const Rh = 147
    const R2 = 126
    const Rp = 94
    const R1 = 76
    const RC = 60

    const zodiac = [
      { s: '\u2648', e: 'fire' },
      { s: '\u2649', e: 'earth' },
      { s: '\u264A', e: 'air' },
      { s: '\u264B', e: 'water' },
      { s: '\u264C', e: 'fire' },
      { s: '\u264D', e: 'earth' },
      { s: '\u264E', e: 'air' },
      { s: '\u264F', e: 'water' },
      { s: '\u2650', e: 'fire' },
      { s: '\u2651', e: 'earth' },
      { s: '\u2652', e: 'air' },
      { s: '\u2653', e: 'water' },
    ]

    const c = decorative ? {
      zodiac:       'rgba(94,78,92,.55)',
      ring:         'rgba(94,78,92,.18)',
      ringFaint:    'rgba(94,78,92,.08)',
      centerFill:   'rgba(94,78,92,.06)',
      divider:      'rgba(94,78,92,.1)',
      tick:         'rgba(94,78,92,.22)',
      houseNum:     'rgba(94,78,92,.4)',
      planet:       'rgba(46,38,48,.65)',
      planetActive: 'rgba(46,38,48,1)',
      cCircFill:    'rgba(94,78,92,.07)',
      cCircStroke:  'rgba(94,78,92,.22)',
      cSym:         'rgba(46,38,48,.8)',
      cName:        'rgba(46,38,48,.55)',
      cSub:         'rgba(94,78,92,.5)',
    } : {
      zodiac:       'rgba(245,237,248,.5)',
      ring:         'rgba(255,255,255,.12)',
      ringFaint:    'rgba(255,255,255,.05)',
      centerFill:   'rgba(0,0,0,.08)',
      divider:      'rgba(255,255,255,.07)',
      tick:         'rgba(255,255,255,.15)',
      houseNum:     'rgba(245,237,248,.38)',
      planet:       'rgba(245,237,248,.75)',
      planetActive: 'rgba(245,237,248,1)',
      cCircFill:    'rgba(255,255,255,.09)',
      cCircStroke:  'rgba(255,255,255,.16)',
      cSym:         'rgba(245,237,248,.85)',
      cName:        'rgba(245,237,248,.55)',
      cSub:         'rgba(245,237,248,.38)',
    }

    const elCol = {
      fire: c.zodiac, earth: c.zodiac, air: c.zodiac, water: c.zodiac,
    }

    const planets = isZh ? [
      { sym: '\u2609', name: '\u592a\u967d', pos: 18,  house: 1,  sign: '\u727d\u7f8a\u5ea7' },
      { sym: '\u263D', name: '\u6708\u4eae', pos: 54,  house: 2,  sign: '\u91d1\u725b\u5ea7' },
      { sym: '\u263F', name: '\u6c34\u661f', pos: 90,  house: 3,  sign: '\u96d9\u5b50\u5ea7' },
      { sym: '\u2640', name: '\u91d1\u661f', pos: 126, house: 4,  sign: '\u5de8\u87f9\u5ea7' },
      { sym: '\u2642', name: '\u706b\u661f', pos: 162, house: 5,  sign: '\u7345\u5b50\u5ea7' },
      { sym: '\u2643', name: '\u6728\u661f', pos: 198, house: 6,  sign: '\u8655\u5973\u5ea7' },
      { sym: '\u2644', name: '\u571f\u661f', pos: 234, house: 7,  sign: '\u5929\u79e4\u5ea7' },
      { sym: '\u2645', name: '\u5929\u738b\u661f', pos: 270, house: 8,  sign: '\u5929\u874e\u5ea7' },
      { sym: '\u2646', name: '\u6d77\u738b\u661f', pos: 306, house: 9,  sign: '\u5c04\u624b\u5ea7' },
      { sym: '\u2647', name: '\u51a5\u738b\u661f', pos: 342, house: 10, sign: '\u6469\u7faf\u5ea7' },
    ] : [
      { sym: '\u2609', name: 'Sun',     pos: 18,  house: 1,  sign: 'Aries' },
      { sym: '\u263D', name: 'Moon',    pos: 54,  house: 2,  sign: 'Taurus' },
      { sym: '\u263F', name: 'Mercury', pos: 90,  house: 3,  sign: 'Gemini' },
      { sym: '\u2640', name: 'Venus',   pos: 126, house: 4,  sign: 'Cancer' },
      { sym: '\u2642', name: 'Mars',    pos: 162, house: 5,  sign: 'Leo' },
      { sym: '\u2643', name: 'Jupiter', pos: 198, house: 6,  sign: 'Virgo' },
      { sym: '\u2644', name: 'Saturn',  pos: 234, house: 7,  sign: 'Libra' },
      { sym: '\u2645', name: 'Uranus',  pos: 270, house: 8,  sign: 'Scorpio' },
      { sym: '\u2646', name: 'Neptune', pos: 306, house: 9,  sign: 'Sagittarius' },
      { sym: '\u2647', name: 'Pluto',   pos: 342, house: 10, sign: 'Capricorn' },
    ]

    const hOrd = isZh
      ? ['', '第一宮', '第二宮', '第三宮', '第四宮', '第五宮', '第六宮', '第七宮', '第八宮', '第九宮', '第十宮', '第十一宮', '第十二宮']
      : ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th']

    function mk(tag: string, attr?: Record<string, string>) {
      const e = document.createElementNS(NS, tag)
      for (const k in attr || {}) {
        e.setAttribute(k, (attr || {})[k])
      }
      return e
    }

    function rad(d: number) {
      return (d * Math.PI) / 180
    }

    function pt(r: number, d: number) {
      return [CX + r * Math.sin(rad(d)), CY - r * Math.cos(rad(d))]
    }

    const svg = mk('svg', { viewBox: `0 0 ${W} ${H}` })
    svg.style.cssText = 'width:100%;height:100%;overflow:visible;'

    const staticG = mk('g')
    const outerG = mk('g')
    const middleG = mk('g')
    const innerG = mk('g')
    const centerG = mk('g')
    outerG.setAttribute('class', 'ring-outer')
    middleG.setAttribute('class', 'ring-middle')

    const outerTexts: SVGTextElement[] = []
    const middleTexts: SVGTextElement[] = []
    const planetEls: Array<{
      g: Element
      txt: SVGTextElement
      data: (typeof planets)[0]
    }> = []

    ;[R1, R2, R3].forEach((r) => {
      staticG.appendChild(
        mk('circle', {
          cx: CX.toString(),
          cy: CY.toString(),
          r: r.toString(),
          fill: 'none',
          stroke: c.ring,
          'stroke-width': '0.75',
        })
      )
    })

    staticG.appendChild(
      mk('circle', {
        cx: CX.toString(),
        cy: CY.toString(),
        r: (R3 + 18).toString(),
        fill: 'none',
        stroke: c.ringFaint,
        'stroke-width': '0.5',
      })
    )

    staticG.appendChild(
      mk('circle', {
        cx: CX.toString(),
        cy: CY.toString(),
        r: R1.toString(),
        fill: c.centerFill,
        stroke: 'none',
      })
    )

    for (let i = 0; i < 12; i++) {
      const p1 = pt(R2, i * 30) as number[]
      const p2 = pt(R3, i * 30) as number[]
      staticG.appendChild(
        mk('line', {
          x1: p1[0].toString(),
          y1: p1[1].toString(),
          x2: p2[0].toString(),
          y2: p2[1].toString(),
          stroke: c.divider,
          'stroke-width': '0.6',
        })
      )
    }

    for (let i = 0; i < 10; i++) {
      const p1 = pt(R1, i * 36) as number[]
      const p2 = pt(R2, i * 36) as number[]
      staticG.appendChild(
        mk('line', {
          x1: p1[0].toString(),
          y1: p1[1].toString(),
          x2: p2[0].toString(),
          y2: p2[1].toString(),
          stroke: c.divider,
          'stroke-width': '0.6',
        })
      )
    }

    for (let i = 0; i < 12; i++) {
      const ta = i * 30 + 15
      const p1 = pt(R3, ta) as number[]
      const p2 = pt(R3 + 12, ta) as number[]
      staticG.appendChild(
        mk('line', {
          x1: p1[0].toString(),
          y1: p1[1].toString(),
          x2: p2[0].toString(),
          y2: p2[1].toString(),
          stroke: c.tick,
          'stroke-width': '0.6',
        })
      )
    }

    zodiac.forEach((z, i) => {
      const pos = pt(Rz, i * 30 + 15) as number[]
      const t = mk('text', {
        x: pos[0].toString(),
        y: pos[1].toString(),
        'text-anchor': 'middle',
        'dominant-baseline': 'central',
        'font-size': '16',
        'font-family': 'Georgia,Times New Roman,serif',
        fill: elCol[z.e as keyof typeof elCol],
      })
      t.textContent = z.s + '\uFE0E'
      outerG.appendChild(t)
      outerTexts.push(t as SVGTextElement)
    })

    for (let i = 0; i < 12; i++) {
      const pos = pt(Rh, i * 30 + 15) as number[]
      const t = mk('text', {
        x: pos[0].toString(),
        y: pos[1].toString(),
        'text-anchor': 'middle',
        'dominant-baseline': 'central',
        'font-size': '9.5',
        'font-family': 'Inter,sans-serif',
        fill: c.houseNum,
      })
      t.textContent = (i + 1).toString()
      middleG.appendChild(t)
      middleTexts.push(t as SVGTextElement)
    }

    planets.forEach((p, idx) => {
      const pos = pt(Rp, p.pos) as number[]
      const g = mk('g')
      g.style.cursor = 'pointer'
      const txt = mk('text', {
        x: pos[0].toString(),
        y: pos[1].toString(),
        'text-anchor': 'middle',
        'dominant-baseline': 'central',
        'font-size': '16',
        'font-family': 'Georgia,Times New Roman,serif',
        fill: c.planet,
      })
      txt.textContent = p.sym + '\uFE0E'
      g.appendChild(txt)
      g.addEventListener('click', (e) => {
        e.stopPropagation()
        selectPlanet(idx)
      })
      innerG.appendChild(g)
      planetEls.push({ g, txt: txt as SVGTextElement, data: p })
    })

    const cCirc = mk('circle', {
      cx: CX.toString(),
      cy: CY.toString(),
      r: (RC - 1).toString(),
      fill: c.cCircFill,
      stroke: c.cCircStroke,
      'stroke-width': '0.75',
    })
    cCirc.style.cursor = 'pointer'

    const cSym = mk('text', {
      x: CX.toString(),
      y: (CY - 10).toString(),
      'text-anchor': 'middle',
      'dominant-baseline': 'central',
      'font-size': '22',
      'font-family': 'Georgia,serif',
      fill: c.cSym,
    })

    const cName = mk('text', {
      x: CX.toString(),
      y: (CY + 9).toString(),
      'text-anchor': 'middle',
      'dominant-baseline': 'central',
      'font-size': '7.5',
      'font-family': 'Inter,sans-serif',
      'letter-spacing': '0.12em',
      fill: c.cName,
    })

    const cSub = mk('text', {
      x: CX.toString(),
      y: (CY + 21).toString(),
      'text-anchor': 'middle',
      'dominant-baseline': 'central',
      'font-size': '7.5',
      'font-family': 'Inter,sans-serif',
      fill: c.cSub,
    })

    cSym.textContent = '\u264E\uFE0E'
    cName.textContent = isZh ? '上升' : 'RISING'
    cSub.textContent = isZh ? '天秤座' : 'Libra'

    centerG.appendChild(cCirc)
    centerG.appendChild(cSym)
    centerG.appendChild(cName)
    centerG.appendChild(cSub)

    svg.appendChild(staticG)
    svg.appendChild(outerG)
    svg.appendChild(middleG)
    svg.appendChild(innerG)
    svg.appendChild(centerG)
    container.appendChild(svg)

    let outerAngle = 0
    let middleAngle = 0
    let isIdle = true
    let lastTs = 0

    function applyRender() {
      outerG.style.transform = `rotate(${outerAngle}deg)`
      outerG.style.transformOrigin = `${CX}px ${CY}px`
      middleG.style.transform = `rotate(${middleAngle}deg)`
      middleG.style.transformOrigin = `${CX}px ${CY}px`
      outerTexts.forEach((t) => {
        t.style.transform = `rotate(${-outerAngle}deg)`
        t.style.transformBox = 'fill-box'
        t.style.transformOrigin = 'center'
      })
      middleTexts.forEach((t) => {
        t.style.transform = `rotate(${-middleAngle}deg)`
        t.style.transformBox = 'fill-box'
        t.style.transformOrigin = 'center'
      })
    }

    function tick(ts: number) {
      if (isIdle) {
        const dt = lastTs ? (ts - lastTs) / 1000 : 0
        lastTs = ts
        outerAngle = (outerAngle + 1.8 * dt) % 360
        middleAngle = ((middleAngle - 1.2 * dt) % 360 + 360) % 360
        applyRender()
      } else {
        lastTs = ts
      }
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    function shortDelta(from: number, to: number) {
      const d = ((to - from) % 360 + 360) % 360
      return d > 180 ? d - 360 : d
    }

    function selectPlanet(idx: number) {
      isIdle = false
      const p = planets[idx]
      const dO = shortDelta(outerAngle, -p.pos)
      const startO = outerAngle
      const startM = middleAngle
      const t0 = performance.now()
      const dur = 920

      function anim(now: number) {
        const t = Math.min((now - t0) / dur, 1)
        const e = 1 - Math.pow(1 - t, 3)
        outerAngle = startO + dO * e
        middleAngle = startM + dO * e
        applyRender()
        if (t < 1) requestAnimationFrame(anim)
      }

      anim(t0)

      cSym.textContent = p.sym + '\uFE0E'
      cName.textContent = p.name.toUpperCase()
      cSub.textContent = p.sign + ' · ' + hOrd[p.house] + (isZh ? '' : ' House')

      planetEls.forEach((pe, i) => {
        const on = i === idx
        pe.txt.setAttribute('fill', on ? c.planetActive : c.planet)
        pe.txt.setAttribute('fill', on ? c.planetActive : c.planet)
        pe.txt.setAttribute('font-size', on ? '18' : '16')
      })

      planets.forEach((_, i) => {
        const row = document.getElementById('prow-' + i)
        if (row) row.classList.toggle('active', i === idx)
      })
    }

    if (!decorative) {
      window.chartSelectPlanet = selectPlanet

      cCirc.addEventListener('click', () => {
        isIdle = true
        planetEls.forEach((pe) => {
          pe.txt.setAttribute('fill', c.planet)
          pe.txt.setAttribute('font-size', '16')
        })
        planets.forEach((_, i) => {
          const row = document.getElementById('prow-' + i)
          if (row) row.classList.remove('active')
        })
        cSym.textContent = '\u264E\uFE0E'
        cName.textContent = isZh ? '\u4e0a\u5347' : 'RISING'
        cSub.textContent = isZh ? '\u5929\u79e4\u5ea7' : 'Libra'
      })
    } // end if (!decorative)

    return () => {
      if (container && container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [isZh])

  return <div id="chartVisual" ref={containerRef} style={decorative ? { pointerEvents: 'none' } : undefined}></div>
}
