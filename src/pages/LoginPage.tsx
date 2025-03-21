import React from 'react';
import { Link } from 'react-router-dom';
import { ZapIcon, UserIcon, LockIcon, ArrowLeftIcon } from 'lucide-react';
const LoginPage = () => {
  return <div className="min-h-screen w-full bg-[#0a0e17] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[#0a0e17]/60"></div>
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <Link to="/" className="absolute top-6 left-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors z-10">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        <span>Back to Home</span>
      </Link>
      <div className="w-full max-w-md z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <ZapIcon className="h-12 w-12 text-blue-400" />
            <div className="absolute inset-0 blur-lg bg-blue-400/50 rounded-full"></div>
          </div>
        </div>
        {/* Login Card */}
        <div className="relative backdrop-blur-xl bg-[#0c1018]/80 border border-blue-800/50 rounded-2xl p-8 shadow-xl">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Sign In
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="your.email@example.com" className="block w-full pl-10 pr-3 py-3 bg-blue-900/20 border border-blue-800/50 rounded-lg text-blue-100 placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-blue-300">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <input id="password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" className="block w-full pl-10 pr-3 py-3 bg-blue-900/20 border border-blue-800/50 rounded-lg text-blue-100 placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50" />
                </div>
              </div>
              <div>
                <button type="submit" className="w-full relative overflow-hidden group py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-700/30">
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-blue-400/20 to-transparent"></div>
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-blue-200">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-blue-400 hover:text-blue-300">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default LoginPage;