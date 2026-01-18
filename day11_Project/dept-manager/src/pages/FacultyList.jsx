import { Link } from 'react-router-dom';
import { facultyMembers } from '../data/faculty';

const FacultyList = () => {
  return (
    <div className="container mx-auto px-6 py-10">
        <Link to="/" className="text-gray-500 hover:text-blue-600 mb-6 inline-flex items-center gap-2 transition">
  <span>←</span> Back to Dashboard
</Link>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-800">Faculty Directory</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {facultyMembers.map((teacher) => (
          <div key={teacher.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden text-center p-6">
            <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-dashed border-blue-200 mb-4 group-hover:border-blue-500 transition">
                <img src={teacher.image} className="w-full h-full rounded-full object-cover" />
            </div>
            
            <h3 className="font-bold text-gray-900">{teacher.name}</h3>
            <p className="text-sm text-blue-600 font-medium mb-4">{teacher.designation}</p>
            
            <Link 
              to={`/faculty/${teacher.id}`} 
              className="inline-block w-full py-2 bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white text-sm font-semibold rounded-lg transition-colors"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyList;