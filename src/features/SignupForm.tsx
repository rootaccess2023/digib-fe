import { useState } from "react";

function SignupForm() {

    const [formData, setFormData] = useState({
        // username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //enter logic for submitting to API endpoint
        setFormData({
            // username: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
        console.log("Successfully submitted.")
        console.log(formData);
    }



    return (
        <section className="container mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2.5">
                <div className="flex flex-col gap-2">
                    {/* <label>Username:</label>
                    <input type="text"
                           name="username" 
                           value={formData.username} 
                           onChange={handleChange} 
                           required 
                           placeholder="Enter your username"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                            /> */}
                    <label>Email:</label>
                    <input type="email" 
                           name="email" 
                           value={formData.email} 
                           onChange={handleChange} 
                           required 
                           placeholder="Enter your email address"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                            />
                    <label>Password:</label>
                    <input type="password" 
                           name="password" 
                           value={formData.password} 
                           onChange={handleChange} 
                           required 
                           placeholder="Set your password"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                            />
                            <label> Password Confirmation:</label>
                    <input type="password" 
                           name="password_confirmation" 
                           value={formData.password_confirmation} 
                           onChange={handleChange} 
                           required 
                           placeholder="Confirm your password"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                            />
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-semibold rounded-lg text-sm px-6 py-3 transition-colors duration-200 focus:outline-none">Sign Up</button>
            </form>
        </section>
    )
}

export default SignupForm;