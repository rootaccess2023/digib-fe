import { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignupForm() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        middle_name: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const successMessage = "Sign up was successful.";
    const errorMessage = "Failed to sign up a new account.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

        const {email, password, password_confirmation, first_name, last_name, middle_name} = formData
        
        try {

            await signup(email, password, password_confirmation, first_name, last_name, middle_name)
            setSuccess(successMessage);
            toast.success(successMessage);
            setFormData({ 
                email: "", 
                password: "", 
                password_confirmation: "",
                first_name:"",
                last_name: "",
                middle_name: "",
            });
            navigate("/login");


        } catch (error: any) {
            setError(error.message || "Sign up failed");
            toast.error(errorMessage)
        } finally {
            setLoading(false);
        }
    };



    return (
        <section className="container mx-auto max-w-md mt-8">
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg"
                aria-label="Signup form"
            >
                <h2
                className="text-2xl font-bold mb-4">
                    Create a new account
                </h2>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="first_name" className="font-medium">First Name:</label>
                    <input 
                           id="first_name"
                           type="text" 
                           name="first_name" 
                           value={formData.first_name} 
                           onChange={handleChange} 
                           required 
                           placeholder="First Name"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                           autoComplete="email"
                           disabled={loading}
                            />
                    <label htmlFor="middle_name" className="font-medium">Middle Name:</label>
                    <input 
                           id="middle_name"
                           type="text" 
                           name="middle_name" 
                           value={formData.middle_name} 
                           onChange={handleChange} 
                           required 
                           placeholder="First Name"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                           autoComplete="email"
                           disabled={loading}
                            />
                    <label htmlFor="last_name" className="font-medium">Last Name:</label>
                    <input 
                           id="last_name"
                           type="text" 
                           name="last_name" 
                           value={formData.last_name} 
                           onChange={handleChange} 
                           required 
                           placeholder="First Name"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                           autoComplete="email"
                           disabled={loading}
                            />
                    <label htmlFor="email" className="font-medium">Email:</label>
                    <input 
                           id="email"
                           type="email" 
                           name="email" 
                           value={formData.email} 
                           onChange={handleChange} 
                           required 
                           placeholder="Enter your email address"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                           autoComplete="email"
                           disabled={loading}
                            />
                    <label htmlFor="password" className="font-medium">Password:</label>
                    <input 
                           id="password"
                           type="password" 
                           name="password" 
                           value={formData.password} 
                           onChange={handleChange} 
                           required 
                           placeholder="Set your password"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                           autoComplete="new-password"
                           disabled={loading}
                            />
                            <label> Password Confirmation:</label>
                    <input 
                           id="password_confirmation"
                           type="password" 
                           name="password_confirmation" 
                           value={formData.password_confirmation} 
                           onChange={handleChange} 
                           required 
                           placeholder="Confirm your password"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                           autoComplete="new-password"
                           disabled={loading}
                            />
                </div>
                {error && (
                    <div
                        className="w-full text-red-600 bg-red-100 px-4 py-2 rounded mb-2 text-center"
                        role="alert"
                    >
                        {error}
                    </div>
                )}
                {success && (
                    <div
                        className="w-full text-green-700 bg-green-100 px-4 py-2 rounded mb-2 text-center"
                        role="status"
                    >
                        {success}
                    </div>
                )}
                <button type="submit" 
                        className="bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-semibold rounded-lg text-sm px-6 py-3 transition-colors duration-200 focus:outline-none"
                        disabled={loading}
                        >Sign Up</button>
            </form>
        </section>
    )
}

export default SignupForm;
