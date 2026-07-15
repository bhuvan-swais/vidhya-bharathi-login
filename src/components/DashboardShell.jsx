import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SwaisLogo from './SwaisLogo.jsx'

// Shared chrome for every role dashboard: brand header + role name + sign-out,
// and a themed "coming soon" block. `title`/`description` drive document.title
// and the meta description (per-route metadata, TanStack head() equivalent).
export default function DashboardShell({ role, title, description, children }) {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title, description])

  return (
    <div className="dash">
      <header className="dash-head">
        <SwaisLogo showTagline={false} size={44} />
        <div className="dash-role"><span className="dev">{role.sk}</span> · {role.en}</div>
        <button className="signout" onClick={() => navigate('/')}>
          <span className="dev">निर्गम</span> (Sign out)
        </button>
      </header>

      <main className="dash-main">
        <div className="soon-card">
          <div className="soon-mandala">
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="100" cy="100" r="90" /><circle cx="100" cy="100" r="66" /><circle cx="100" cy="100" r="42" />
                <ellipse cx="100" cy="34" rx="12" ry="26" /><ellipse cx="100" cy="166" rx="12" ry="26" />
                <ellipse cx="34" cy="100" rx="26" ry="12" /><ellipse cx="166" cy="100" rx="26" ry="12" />
              </g>
            </svg>
          </div>
          <h1><span className="dev">{role.title}</span></h1>
          {children}
          <span className="soon-badge"><span className="dev">शीघ्रम् आगच्छति</span> · Coming soon</span>
        </div>
      </main>
    </div>
  )
}
