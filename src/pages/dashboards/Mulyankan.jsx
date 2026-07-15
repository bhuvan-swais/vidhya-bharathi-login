import DashboardShell from '../../components/DashboardShell.jsx'
import { roleByPath } from '../../roles.js'

export default function Mulyankan() {
  return (
    <DashboardShell
      role={roleByPath('/mulyankan')}
      title="मूल्यांकन · Assessment Admin — SWAIS Saraswati"
      description="Assessment administration for SWAIS Saraswati — exams, grading and evaluation setup.">
      <p>Exam setup, grading and the <span className="dev">पञ्च कोश</span> (five-fold) evaluation engine will live here.</p>
    </DashboardShell>
  )
}
