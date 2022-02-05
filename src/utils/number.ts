export const currencyFormater = (
  value: number,
  locales: string | string[] = 'en-US',
  currency = 'USD'
) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
  }).format(value);
};
