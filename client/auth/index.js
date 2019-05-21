export const logout = () => {
  document.cookie = 'token=null';
  localStorage.clear();
  window.location = '/';
}
