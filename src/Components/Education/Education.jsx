import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionHeader from '../SectionHeader/SectionHeader';

const sampleData = [
  {
    id: 'e1',
    degree: 'M.Sc. Computer Science',
    school: 'Pune University',
    start: '2024-07',
    end: '2026-05',
    grade: '7.9 CGPA',
    description: 'Studied DAA, Advanced Databases (Neo4j, Cassandra), Programming Paradigms. Gained strong skills in algorithms, database management, and modern programming concepts. Completed OJT Project On Admission System Of An Institute',
  },
  {
    id: 'e2',
    degree: 'B.Sc. Computer Science',
    school: 'Pune University',
    start: '2020-07',
    end: '2023-10',
    grade: '8.02 CGPA',
    description: 'Learned Electronics, Statistics, DSA, AI, ML. Practiced coding in C, C++, Python, PHP. Built a strong foundation in programming, data handling, and problem-solving.',
  },
  {
    id: 'e3',
    degree: 'HSC (12th - Science)',
    school: 'Maharashtra State Board',
    start: '2018-06',
    end: '2020-03',
    grade: '75.80%',
    description: 'Focused on Mathematics, Physics, Chemistry, and Computer Science. Built logical reasoning and analytical skills.',
  },
  {
    id: 'e4',
    degree: 'SSC (10th)',
    school: 'Maharashtra State Board',
    start: '2017-06',
    end: '2018-03',
    grade: '68.00%',
    description: 'Completed general academics with emphasis on Mathematics and Science. Developed early interest in computers and technology.',
  },
];

export default function Education({ educations = sampleData }) {
  return (
    <motion.section 
      id='education'
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col text-center">
            <SectionHeader title={"Education"} />
            <p className="text-muted">All academic records and certifications in one place.</p>
          </div>
        </div>

        <div className="row g-4">
          {educations.map(item => (
            <motion.div
              key={item.id}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="card shadow-sm h-100"
                whileHover={{ boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ color: "darkmagenta" }}>
                    {item.degree}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.school}</h6>
                  <p className="card-text small text-secondary mb-1">{formatRange(item.start, item.end)}</p>
                  <p className="card-text small fw-semibold text-dark">{item.grade}</p>
                  <p className="card-text mt-2">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


function formatRange(start, end) {
  if (!start && !end) return '—';
  if (!end) return start;
  return `${formatYM(start)} — ${formatYM(end)}`;
}

function formatYM(iso) {
  if (!iso) return '';
  const [y, m] = iso.split('-');
  try {
    const d = new Date(`${y}-${m}-01`);
    return d.toLocaleString(undefined, { month: 'short', year: 'numeric' });
  } catch (e) {
    return iso;
  }
}
