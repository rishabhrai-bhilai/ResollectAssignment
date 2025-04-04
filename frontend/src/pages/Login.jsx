import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    const success = await login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Illustration Side */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-indigo-500 to-blue-600 p-8 flex flex-col items-center justify-center">
          <div className=" hidden md:block w-full max-w-xs">
            <svg viewBox="0 0 500 500" className="hidden md:block w-full h-auto">
              <path 
                d="M250,400c-83.6,0-150-66.4-150-150s66.4-150,150-150s150,66.4,150,150S333.6,400,250,400z M250,150c-55.2,0-100,44.8-100,100
                s44.8,100,100,100s100-44.8,100-100S305.2,150,250,150z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,300c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,300,250,300z M250,220c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,220,250,220z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,350c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,350,250,350z M250,270c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,270,250,270z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,250c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,250,250,250z M250,170c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,170,250,170z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,200c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,200,250,200z M250,120c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,120,250,120z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,150c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,150,250,150z M250,70c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,70,250,70z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,100c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,100,250,100z M250,20c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,20,250,20z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,50c-27.6,0-50-22.4-50-50S222.4-50,250-50s50,22.4,50,50S277.6,50,250,50z M250-30c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5-30,250-30z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,0c-27.6,0-50-22.4-50-50S222.4-100,250-100s50,22.4,50,50S277.6,0,250,0z M250-80c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5-80,250-80z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,450c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,450,250,450z M250,370c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,370,250,370z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <path 
                d="M250,500c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S277.6,500,250,500z M250,420c-16.5,0-30,13.5-30,30
                s13.5,30,30,30s30-13.5,30-30S266.5,420,250,420z" 
                fill="#ffffff" 
                opacity="0.2"
              />
              <circle cx="250" cy="250" r="100" fill="#ffffff" opacity="0.3"/>
              <path 
                d="M250,350c-55.2,0-100-44.8-100-100s44.8-100,100-100s100,44.8,100,100S305.2,350,250,350z M250,170
                c-44.2,0-80,35.8-80,80s35.8,80,80,80s80-35.8,80-80S294.2,170,250,170z" 
                fill="#ffffff" 
                opacity="0.3"
              />
              <path 
                d="M250,400c-83.6,0-150-66.4-150-150s66.4-150,150-150s150,66.4,150,150S333.6,400,250,400z M250,150
                c-55.2,0-100,44.8-100,100s44.8,100,100,100s100-44.8,100-100S305.2,150,250,150z" 
                fill="#ffffff" 
                opacity="0.3"
              />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-bold mt-8 text-center">Welcome Back!</h2>
          <p className="text-blue-100 mt-2 text-center max-w-md">
            Streamline your workflow with our powerful dashboard. Login to access all features.
          </p>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
            <p className="text-gray-600 mt-2">Enter any input credentials to access your account</p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="pl-10 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;