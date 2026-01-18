import { Link } from 'react-router-dom';
import { facultyMembers } from '../data/faculty';
import { batchesData } from '../data/allBatches';

const Home = () => {
  // Filter for Top Section (Chairman/Advisor)
  const adminPanel = facultyMembers.filter(m => 
    m.keyRole === 'chairman' || m.keyRole === 'advisor'
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. HERO & ADMIN MESSAGES */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl mb-12">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-2">CSE Department</h1>
          <p className="text-blue-100 text-lg opacity-90">Comilla University • Est. 2010</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminPanel.map((member) => (
            <div key={member.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 hover:bg-white/20 transition">
              <img src={member.image} className="w-16 h-16 rounded-full border-2 border-white/50" />
              <div>
                <h3 className="font-bold text-white">{member.name}</h3>
                <span className="text-[10px] bg-blue-900/40 text-blue-100 px-2 py-0.5 rounded border border-blue-400/30 uppercase tracking-wider">
                  {member.designation}
                </span>
                <p className="text-blue-50 text-xs mt-1 italic">"{member.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FACULTY DIRECTORY (Directly on Home Page) */}
      <section id="faculty" className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1.5 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800">Faculty Directory</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facultyMembers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-5 text-center transition">
              <img src={teacher.image} className="w-20 h-20 mx-auto rounded-full border-2 border-blue-100 mb-3 object-cover" />
              <h3 className="font-bold text-gray-900 text-sm">{teacher.name}</h3>
              <p className="text-xs text-blue-600 font-medium mb-3 uppercase">{teacher.keyRole === 'faculty' ? 'Lecturer' : teacher.keyRole}</p>
              
              <Link to={`/faculty/${teacher.id}`} className="block w-full py-1.5 bg-gray-50 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold rounded-lg transition">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACTIVE BATCHES (Directly on Home Page) */}
      <section id="batches" className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Active Batches</h2>
            <p className="text-gray-500 text-sm">Academic sessions currently in progress</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {batchesData.map((batch) => (
              <Link to={`/batches/${batch.id}`} key={batch.id} className="group block">
                <div className="bg-gray-50 hover:bg-blue-600 hover:text-white p-5 rounded-xl border border-gray-200 hover:border-blue-600 transition duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-white">{batch.name}</h3>
                    <span className="bg-green-100 text-green-700 group-hover:bg-white/20 group-hover:text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
                  </div>
                  <p className="text-blue-600 group-hover:text-blue-100 font-medium text-sm mb-3">{batch.semester}</p>
                  <div className="text-xs text-gray-500 group-hover:text-blue-100 flex gap-3">
                    <span>👥 {batch.students ? batch.students.length : 0} Students</span>
                    <span>📚 {batch.courses ? batch.courses.length : 0} Courses</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;