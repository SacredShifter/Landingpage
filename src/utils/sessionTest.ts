export const simulateReturningUser = () => {
  const mockSession = {
    lastModule: 'Sacred Geometry Portal',
    lastVisit: new Date(Date.now() - 86400000 * 3).toISOString(),
    userName: 'Traveller',
  };

  localStorage.setItem('sacred_last_session', JSON.stringify(mockSession));
  console.log('✦ Simulated returning user session:', mockSession);
};

export const clearSession = () => {
  localStorage.removeItem('sacred_last_session');
  console.log('✦ Session cleared - now showing as new visitor');
};

if (typeof window !== 'undefined') {
  (window as any).simulateReturningUser = simulateReturningUser;
  (window as any).clearSession = clearSession;
  console.log('✦ Session test utilities loaded. Use:');
  console.log('  - simulateReturningUser() to test return widget');
  console.log('  - clearSession() to test new visitor view');
}
