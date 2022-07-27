export const getDiferenceBetweenTwoDates = (year) => {
  return new Date().getFullYear() - year;
};
export const calculateBrand = (brand) => {
  const options = {
    1: 1.3,
    2: 1.15,
    3: 1.05,
  };

  return options[brand] ?? 1;
};

export const calculatePlan = (plan) => {
  const options = {
    1: 1.2,
    2: 1.5,
  };

  return options[plan];
};

export const formatCurrency = (quantity) => {
  return quantity.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
