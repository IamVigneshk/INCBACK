import React, { useState } from 'react';
import { X, Mail, Lock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function UserAuthModal({ isOpen, onClose, onSuccess }: UserAuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAuth = () => {
    // This will be replaced with actual backend authentication
    if (email === 'user@example.com' && password === 'user123') {
      onSuccess();
      navigate('/user');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleBackgroundClick = () => {
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={handleBackgroundClick}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" />
        
        <div 
          className="relative inline-block w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-gray-800 rounded-lg shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-cyan-500" />
              <h3 className="text-2xl font-bold text-white">
                User Login
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-sm mt-2">
                  {error}
                </div>
              )}

              <button
                onClick={handleAuth}
                className="w-full py-2 px-4 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}