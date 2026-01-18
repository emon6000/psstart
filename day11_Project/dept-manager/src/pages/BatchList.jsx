import { Link } from 'react-router-dom';
import { batchesData } from '../data/allBatches';

const BatchList = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <Link to="/" className="text-gray-500 hover:text-blue-600 mb-6 inline-flex items-center gap-2 transition">
  <span>←</span> Back to Dashboard
</Link>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Active Batches</h2>
        <p className="text-gray-500 mt-2">Select a batch to view details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {batchesData.map((batch) => (
          <Link to={`/batches/${batch.id}`} key={batch.id} className="group block">
            <div className="bg-white hover:bg-blue-600 hover:text-white p-8 rounded-2xl transition-all duration-300 border border-gray-200 hover:border-blue-600 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">{batch.name}</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Running</span>
              </div>
              <p className="text-blue-600 font-medium mb-4 group-hover:text-blue-100">{batch.semester}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-blue-100">
                <span>👥 {batch.students ? batch.students.length : 0} Students</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BatchList;