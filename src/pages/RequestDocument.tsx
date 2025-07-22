const RequestDocument = () => {
  return (
    <div className="h-full ui-bg --primary mx-auto p-8 bg-white">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-4xl font-bold">Request Document</h1>
      </div>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded">
          <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Request Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-600">Document Type</dt>
              <dd className="text-base font-medium">[Select Type]</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Purpose</dt>
              <dd className="text-base font-medium">[Enter Purpose]</dd>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded">
          <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Instructions</h2>
          <div className="text-gray-600 text-base">
            Please fill out the form above and submit your request. You will be notified when your document is ready for pickup or delivery.
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

export default RequestDocument;
