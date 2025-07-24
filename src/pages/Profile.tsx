import useAuth from "../contexts/useAuth";

const Profile = () => {
  const { user } = useAuth();

  //to display birthdate in words and numbers instead of just numbers
  const userDateOfBirth = user?.date_of_birth
  const birthDate = userDateOfBirth? new Date(userDateOfBirth).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : null;
  console.log(birthDate);

  return (
    <div className="h-full ui-bg --primary mx-auto p-8 bg-white">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-4xl font-bold">Resident Profile</h1>
      </div>

      {user ? (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded">
            <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
              Account Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-gray-600">User ID</dt>
                <dd className="text-base  font-medium">{user.id}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Email Address</dt>
                <dd className="text-base  font-medium">{user.email}</dd>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded">
            <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-gray-600">Full Name</dt>
                <dd className="text-base  font-medium">{`${user.first_name} ${user.middle_name} ${user.last_name}`}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Date of Birth</dt>
                <dd className="text-base  font-medium">{birthDate}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Civil Status</dt>
                <dd className="text-base  font-medium">{user.civil_status}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Contact Number</dt>
                <dd className="text-base  font-medium">0917 123 4567</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Gender</dt>
                <dd className="text-base  font-medium">{user.gender}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Place of Birth</dt>
                <dd className="text-base  font-medium">{user.place_of_birth}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Nationality</dt>
                <dd className="text-base  font-medium">{user.nationality}</dd>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded">
            <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
              Address Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-gray-600">Address</dt>
                <dd className="text-base  font-medium">
                  Purok 1, Barangay Maligaya
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Barangay</dt>
                <dd className="text-base  font-medium">Maligaya</dd>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500">No user information available.</div>
          <div className="text-sm text-gray-400 mt-2">
            Please log in to view your profile.
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
