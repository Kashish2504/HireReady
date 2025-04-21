export default function logoutfun(){
    localStorage.removeItem("absiedfufndfjs");
    const isLoggedIn = !!localStorage.getItem("absiedfufndfjs");
    return isLoggedIn ? "": window.location.href = "/login";
}