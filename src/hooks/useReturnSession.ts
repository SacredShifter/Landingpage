import { useState, useEffect } from 'react';

export interface ReturnSession {
  lastModule: string;
  lastVisit: string;
  userName?: string;
}

const STORAGE_KEY = 'sacred_last_session';

export const useReturnSession = () => {
  const [session, setSession] = useState<ReturnSession | null>(null);
  const [isReturning, setIsReturning] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setSession(parsed);
          setIsReturning(true);
        }
      } catch (error) {
        console.error('Error loading session:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, []);

  const saveSession = (sessionData: ReturnSession) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
      setSession(sessionData);
      setIsReturning(true);
    } catch (error) {
      console.error('Error saving session:', error);
    }
  };

  const clearSession = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setSession(null);
      setIsReturning(false);
    } catch (error) {
      console.error('Error clearing session:', error);
    }
  };

  return {
    session,
    isReturning,
    loading,
    saveSession,
    clearSession,
  };
};
