export const getTranslation = (
  translationPrefix: string,
  translationTerm: string,
  i18n: any
): string => {
  if (!i18n.exists(`${translationPrefix}.${translationTerm}`)) {
    return translationTerm;
  }

  return i18n.t(`${translationPrefix}.${translationTerm}`);
};
