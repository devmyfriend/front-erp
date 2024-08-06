import { ref } from "vue";

export function useThemes() {
  const theme = ref(localStorage.getItem('theme') || 'MyFriend');
  const imageTheme = ref(localStorage.getItem('ImageTheme') || '/svg/empresas/myfriend.svg');
  const favicon = ref(localStorage.getItem('favicon') || '/favicon/myfriend.ico');

  const setTheme = (newTheme) => {    
    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);

    switch (newTheme) {
      case 'MyFriend':
        imageTheme.value =  '/svg/empresas/myfriend.svg';
        setFavicon('/favicon/myfriend.ico');
        break;
      case 'TheFit':
        imageTheme.value =  '/svg/empresas/fitgym.svg';
        setFavicon('/favicon/thefitgym.ico');
        break;
      case 'Bonavida':
        imageTheme.value =  '/svg/empresas/bonavida.svg';
        setFavicon('/favicon/bonavida.ico');
        break;
      default:
        imageTheme.value =  '/svg/empresas/myfriend.svg';
        setFavicon('/favicon/myfriend.ico');
    }
  };

  const setFavicon = (iconPath) => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = iconPath;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = iconPath;
      document.head.appendChild(newFavicon);
    }
  };

  return {
    theme,
    imageTheme,
    setTheme,
    setFavicon,
    favicon
  };
}