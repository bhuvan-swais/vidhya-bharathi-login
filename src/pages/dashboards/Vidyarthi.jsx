import DashboardShell from '../../components/DashboardShell.jsx'
import { roleByPath } from '../../roles.js'

export default function Vidyarthi() {
  return (
    <DashboardShell
      role={roleByPath('/vidyarthi')}
      title="विद्यार्थी · Student Dashboard — SWAIS Saraswati"
      description="Student home for SWAIS Saraswati — lessons, progress and the five-fold growth journey.">
      <p>Your lessons, holistic progress and daily <span className="dev">प्रार्थना</span> (prayer) will live here.</p>
    </DashboardShell>
  )
}
