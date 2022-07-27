import { createContext, useState } from "react";
import {
  getDiferenceBetweenTwoDates,
  calculateBrand,
  calculatePlan,
  formatCurrency,
} from "../helpers";
const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handlerChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    let base = 10000;
    const diference = getDiferenceBetweenTwoDates(data.year);
    base -= (diference * 3 * base) / 100;

    base *= calculateBrand(data.brand);
    base *= calculatePlan(data.plan);
    base = formatCurrency(base);
    setLoading(true);
    setTimeout(() => {
      setResult(base);
      setLoading(false);
    }, 1200);
  };

  return (
    <QuoterContext.Provider
      value={{
        handlerChangeData,
        data,
        error,
        setError,
        quoteInsurance,
        result,
        loading,
        setLoading,
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };
export default QuoterContext;
