import {
    enUS as materialLocaleEnglishUS,
    plPL as materialLocalePolish,
    Localization,
  } from "@mui/material/locale";

  export interface MUILocaleData {
    muiCore: Localization;
    title: string;
    lng: string;
  }

  const english: MUILocaleData = {
    muiCore: materialLocaleEnglishUS,
    title: "English",
    lng: "en"
  };

  const englishUS: MUILocaleData = {
    muiCore: materialLocaleEnglishUS,
    title: "English (United States)",
    lng: "en-us"
  };

  const polish: MUILocaleData = {
    muiCore: materialLocalePolish,
    title: "Polska",
    lng: "pl-pl"
  };

  export const supportedLocales: MUILocaleData[] = [
    english,
    englishUS,
    polish,
  ];

  // default
export const en: Localization = {
  components: {
    MuiBreadcrumbs: { defaultProps: {
      expandText: 'Show path',
    }},
    MuiTablePagination: { defaultProps: {
      getItemAriaLabel: (type) => {
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) =>
  `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`,
    }},
    MuiRating: { defaultProps: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    }},
    MuiAutocomplete: { defaultProps: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    }},
    MuiAlert: { defaultProps: {
      closeText: 'Close',
    }},
    MuiPagination: {  defaultProps: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
    }},
  },
};