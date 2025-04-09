import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with true for initial load
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Separate state for login action

  // Simulate checking auth status on mount (e.g., from local storage or API)
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Simulate an async check (replace with real auth check if needed)
        await new Promise(resolve => setTimeout(resolve, 1500));
        const storedAuth = false; // Replace with actual logic (e.g., localStorage.getItem('token'))
        setIsAuthenticated(storedAuth);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false); // Done checking initial auth status
      }
    };
    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    setIsLoggingIn(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempted with:', { email, password });
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, isLoggingIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};