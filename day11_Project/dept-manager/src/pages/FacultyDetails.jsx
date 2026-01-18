import { useParams, Link } from 'react-router-dom';
import { getFacultyById } from '../data/faculty';

const FacultyDetails = () => {
  const { facultyId } = useParams(); // Gets 'fac-1' from URL
  const teacher = getFacultyById(facultyId);

  if (!teacher) {
    return <div className="text-center p-10 text-red-500">Teacher not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      
<Link to="/faculty" className="text-gray-500 hover:text-blue-600 mb-6 inline-flex items-center gap-2 transition">
  <span>←</span> Back to Faculty List
</Link>
      
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        
        {/* Header Profile */}
        <div className="bg-blue-600 p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
           <img 
             src={teacher.image} 
             alt={teacher.name} 
             className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-white"
           />
           <div className="text-center md:text-left text-white">
             <h1 className="text-3xl font-bold">{teacher.name}</h1>
             <p className="text-blue-100 text-lg font-medium">{teacher.designation}</p>
             <p className="mt-2 text-sm opacity-90 italic">"{teacher.message}"</p>
           </div>
        </div>

        {/* Details Section */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Contact & Education */}
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Contact Info</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center"><span className="w-6">📧</span> {teacher.email}</p>
                <p className="flex items-center"><span className="w-6">📞</span> {teacher.phone}</p>
              </div>
            </div>

            <div>
              <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Education</h3>
              <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                🎓 {teacher.education}
              </p>
            </div>
          </div>

          {/* Right Column: Research Areas */}
          <div>
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {teacher.research.map((item, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;