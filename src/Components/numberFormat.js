export const numberFormat = (value) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
    value
  );

// mberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
