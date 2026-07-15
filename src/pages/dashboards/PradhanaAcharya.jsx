import DashboardShell from '../../components/DashboardShell.jsx'
import { roleByPath } from '../../roles.js'

export default function PradhanaAcharya() {
  return (
    <DashboardShell
      role={roleByPath('/pradhana-acharya')}
      title="प्रधान आचार्य · Principal (Attendance) — SWAIS Saraswati"
      description="Principal attendance console for SWAIS Saraswati — school-wide presence and reports.">
      <p>School-wide <span className="dev">उपस्थिति</span> (attendance) dashboards and reports are being prepared.</p>
    </DashboardShell>
  )
}
