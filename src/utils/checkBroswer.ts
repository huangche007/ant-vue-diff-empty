export const getLanguage = () => {
  let language: any;
  if (navigator.language) {
    language = navigator.language;
  } else {
    language = navigator["browserLanguage"];
  }
  return language;
};
