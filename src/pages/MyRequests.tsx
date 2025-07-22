const MyRequests = () => {
  return (
    <div className="h-full ui-bg --primary mx-auto p-8 bg-white">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-4xl font-bold">My Requests</h1>
      </div>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded">
          <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Recent Requests</h2>
          <div className="text-gray-600 text-base">[A table of your recent requests will appear here]</div>
        </div>
        <div className="bg-white p-4 rounded">
          <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Status Legend</h2>
          <div className="text-gray-600 text-base">
            <ul className="list-disc pl-6">
              <li><span className="font-semibold text-green-700">Approved</span>: Your request has been approved and is ready for release.</li>
              <li><span className="font-semibold text-yellow-700">Pending</span>: Your request is being processed.</li>
              <li><span className="font-semibold text-red-700">Rejected</span>: Your request was not approved. Please contact the barangay office for more info.</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-4 rounded">
          <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Help</h2>
          <div className="text-gray-600 text-base">
            For assistance, contact the barangay office or visit the FAQ section.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
