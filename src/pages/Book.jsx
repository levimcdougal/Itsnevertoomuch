import { useEffect } from 'react'

export default function Book() {
  useEffect(() => {
    ;(function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar) }
      let d = C.document
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal
          let ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement('script')).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments) }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ['-', namespace, ar])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', { origin: 'https://app.cal.com' })
    window.Cal('inline', {
      elementOrSelector: '#cal-inline',
      calLink: 'itsnevertoomuch',
    })
    window.Cal('ui', {
      theme: 'light',
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  return (
    <div className="page-content">

      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Book a <span>Cleaning</span></h1>
          <p>Pick a date and time that works for you — we'll take care of the rest.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div
            id="cal-inline"
            className="cal-embed-wrap"
          />
        </div>
      </section>

    </div>
  )
}
