// Single source of truth for the five roles. Used by the login dropdown
// and by each dashboard header so the bilingual labels stay consistent.
export const ROLES = [
  { path: '/vidyarthi',        sk: 'विद्यार्थी',            en: 'Vidyarthi — Student',            title: 'विद्यार्थी (Student)' },
  { path: '/acharya',          sk: 'आचार्य',                en: 'Acharya — Teacher',              title: 'आचार्य (Teacher)' },
  { path: '/palaka',           sk: 'पालक',                  en: 'Palaka — Parent',                title: 'पालक (Parent)' },
  { path: '/pradhana-acharya', sk: 'प्रधान आचार्य',          en: 'Principal – Attendance',         title: 'प्रधान आचार्य (Principal · Attendance)' },
  { path: '/mulyankan',        sk: 'मूल्यांकन',              en: 'Assessment – Administration',    title: 'मूल्यांकन (Assessment · Administration)' },
]

export const roleByPath = (path) => ROLES.find((r) => r.path === path)
