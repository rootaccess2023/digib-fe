import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useUser, useToken } from "../contexts/AuthProviderContext";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const {setUser} = useUser();
  const {setToken} = useToken();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const response = await login(formData.email, formData.password);
      if (!response) {
        setError("Failed to return login response.")
      }
      setUser(response.user)
      setToken({token: response.token})

      setSuccess("Login successful!");
      setFormData({ email: "", password: "" });
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto max-w-md mt-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg"
        aria-label="Login form"
      >
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="font-medium">
            Email:
          </label>
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
          <label htmlFor="password" className="font-medium">
            Password:
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
            autoComplete="current-password"
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
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-semibold rounded-lg text-sm px-6 py-3 transition-colors duration-200 focus:outline-none"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
