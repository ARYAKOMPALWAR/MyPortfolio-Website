import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    type: 'experience',
    title: 'Winter Intern',
    company: 'Technogrowth Software Solutions Pvt. Ltd.',
    date: 'Dec 2024 – Jan 2025',
    description: [
      'Worked on Python application development using OOP principles, file handling, and core libraries while contributing to real-world software projects.',
      'Strengthened problem-solving and data structure usage through collaborative development and industry-standard coding practices.',
    ],
    icon: <Briefcase className="w-5 h-5 text-blue-400" />,
  },
  {
    type: 'education',
    title: 'B.E. in Information Technology',
    company: 'Sinhgad Institute of Technology, Lonavala',
    date: '2022 – 2026',
    description: [
      'Pursuing a Bachelor of Engineering with a current CGPA of 7.61.',
      'Key coursework: Data Structures & Algorithms (9 GPA), OOP (9 GPA), OS (8 GPA), DBMS (8 GPA).',
    ],
    icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
  },
  {
    type: 'education',
    title: 'MSBSHSE Class XII',
    company: 'Kusumtai Jr. High School, Cidco, Nanded',
    date: '2022',
    description: ['Completed HSC with 66.67%.'],
    icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
  },
  {
    type: 'education',
    title: 'CBSE Class X',
    company: 'Podar International School, Nanded',
    date: '2020',
    description: ['Completed SSC with a strong 90.08%.'],
    icon: <GraduationCap className="w-5 h-5 text-yellow-400" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative text-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Journey & Experience
          </h2>
          <p className="text-xl text-gray-400 font-light">
            My academic and professional path, driven by curiosity.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="space-y-12">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-0 md:pl-24"
              >
                {/* Circle dot on timeline */}
                <div className="hidden md:flex absolute left-[18px] top-6 -translate-x-1/2 w-10 h-10 rounded-full glass-card items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {item.icon}
                </div>

                <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 space-y-4 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 font-medium mt-1">{item.company}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-400 bg-white/5 border border-white/10 px-4 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.description.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 font-light leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
