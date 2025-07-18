const burger = document.querySelector(".burger");
      const navList = document.querySelector("nav ul");
      burger.addEventListener("click", () => {
        navList.classList.toggle("open");
      });
    function toggleDarkMode() {
      document.body.classList.toggle("dark");
    }