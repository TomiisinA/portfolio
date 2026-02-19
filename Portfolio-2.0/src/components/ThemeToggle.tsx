import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => { 
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };
    
  return (
    <div>
      <button onClick={toggleTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-fullduration-300 focus:outline-hidden">
        {isDark ? <Sun className="h-6 w-6 text-yellow-300 "/> : <Moon className="h-6 w-6 text-blue-400"/>}
      </button>
    </div>
     
  );
};
