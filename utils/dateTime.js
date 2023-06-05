export const getDateTimeWithTimeZone = (date, timeZone, locale = 'en-US') => {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString(locale, {
        timeZone,
      })
    );
  }

  return new Date(
    date.toLocaleString(locale, {
      timeZone,
    })
  );
};
