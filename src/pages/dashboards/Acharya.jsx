import DashboardShell from '../../components/DashboardShell.jsx'
import { roleByPath } from '../../roles.js'

export default function Acharya() {
  return (
    <DashboardShell
      role={roleByPath('/acharya')}
      title="आचार्य · Teacher Dashboard — SWAIS Saraswati"
      description="Teacher workspace for SWAIS Saraswati — lesson planning, class rolls and student guidance.">
      <p>Lesson planning, class rolls and <span className="dev">विद्यार्थी</span> (student) guidance tools are on the way.</p>
    </DashboardShell>
  )
}
