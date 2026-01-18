import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBatchById } from '../data/allBatches';

const BatchDetails = () => {
  const { batchId } = useParams(); // 1. Get ID from URL
  const batch = getBatchById(batchId); // 2. Find the matching data
  
  // 3. State for toggling the Course list
  const [showCourses, setShowCourses] = useState(false);

  // Safety Check: If someone types a wrong URL (e.g. /batches/batch-99)
  if (!batch) {
    return <div className="p-10 text-center text-red-500 font-bold">Batch not found!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{batch.name}</h1>
            <p className="text-blue-600 font-medium text-lg">{batch.semester}</p>
          </div>
          <Link to="/batches" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium transition">
  <span>←</span> Back to Active Batches
</Link>
        </div>

        {/* CR Info */}
        <div className="flex gap-4">
            {batch.crs.map((cr, idx) => (
                <div key={idx} className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                    <span className="text-xs font-bold text-gray-400 uppercase block">Class Rep</span>
                    <span className="font-semibold text-gray-700">{cr.name}</span>
                    <span className="text-xs text-gray-500 block">{cr.contact}</span>
                </div>
            ))}
        </div>
      </div>

      {/* --- COURSE TOGGLE SECTION --- */}
      <div className="mb-8">
        <button 
          onClick={() => setShowCourses(!showCourses)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition flex items-center"
        >
          {showCourses ? "Hide Courses" : "View Active Courses"}
        </button>

        {/* Conditional Rendering: Only shows if showCourses is TRUE */}
        {showCourses && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 animate-fade-in">
            {batch.courses.map((course, idx) => (
              <div key={idx} className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-900">{course.code}</h3>
                <p className="text-gray-700 font-medium">{course.title}</p>
                <div className="mt-3 text-sm text-gray-500">
                   <p>👨‍🏫 {course.teacher}</p>
                   <p>🎓 {course.credit} Credits</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- STUDENT TABLE SECTION --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-800">Student List</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-gray-700 uppercase font-bold text-xs">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Blood Group</th>
                <th className="px-6 py-4 text-right">CGPA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {batch.students.map((student) => (
                <tr key={student.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 font-mono font-medium text-blue-600">{student.id}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{student.name}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">
                        {student.bloodGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">{student.cgpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default BatchDetails;