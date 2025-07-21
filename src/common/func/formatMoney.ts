export const formatMoney = (amount: string | number) => {
  if (typeof amount === 'string') amount = parseInt(amount);
  return amount.toLocaleString().replaceAll(',', '.');
};
