/**
   * Handles the language change
   * @param newUrl - url to change browser to
   */
export const updateBrowserLocation = (newUrl: string) : void => {
    window.location.replace(newUrl);
  };