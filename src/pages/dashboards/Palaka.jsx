import DashboardShell from '../../components/DashboardShell.jsx'
import { roleByPath } from '../../roles.js'

export default function Palaka() {
  return (
    <DashboardShell
      role={roleByPath('/palaka')}
      title="पालक · Parent Dashboard — SWAIS Saraswati"
      description="Parent view for SWAIS Saraswati — your child's holistic progress and school updates.">
      <p>Your child's holistic report card and school <span className="dev">सूचना</span> (updates) will appear here.</p>
    </DashboardShell>
  )
}
