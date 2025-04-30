import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setMessage(`Password reset link sent to ${email}`);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-2 px-4 rounded-md font-semibold text-white transition duration-200 ${
              submitting
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <p className="text-green-600 text-center mt-4 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
