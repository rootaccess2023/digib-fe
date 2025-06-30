import { useState } from "react";
import { useCSRF } from "../contexts/CSRFContext";

function SignupForm() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: "",
    });

    const {csrfToken} = useCSRF();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {

            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken,
                },
                body: JSON.stringify({user: formData}),
            })

            if (!response.ok) {
                const errorData = response.json().catch(() => null)
                console.error("Failed to register new user:", errorData || response.statusText);
                return;
            }


        } catch (error) {
            console.error("Error with creating a new user:", error);
        }
        setFormData({
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