/**
   * Handles the language change
   * @param code - updated language
   * @param lang - current set language
   */
export const updateBrowserLocation = (lang: string, code: string) : void => {
    if (lang !== code) {
      let newUrl;
      if (lang === "en") {
        newUrl = window.location.pathname.replace(`/`, `/${code}/`);
      } else if (code === "en") {
        newUrl = window.location.pathname.replace(`/${lang}`, ``);
      } else {
        newUrl = window.location.pathname.replace(`/${lang}`, `/${code}`);
      }
      window.location.replace(newUrl);
    }
  };