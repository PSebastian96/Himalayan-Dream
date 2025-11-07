document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop(); // Get current file name
  const navLinks = document.querySelectorAll(".navbar .nav-link"); // Select all nav links

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    // Check if the link's href matches the current path
    if (linkPath === currentPath) {
      link.classList.add("active"); // Add the 'active' class
    } else {
      link.classList.remove("active"); // Ensure others don't have 'active'
    }
  });
});
