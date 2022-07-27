import { BRANDS, YEARS, PLANS } from "../constants";
import { Fragment } from "react";
import useQuoter from "../hooks/useQuoter";
import Error from "./Error";
const Form = () => {
  const { handlerChangeData, data, error, setError, quoteInsurance} = useQuoter();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    quoteInsurance();
  };
  return (
    <>
      {error && <Error />}
      <form onSubmit={handlerSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handlerChangeData(e)}
            value={data.brand}
          >
            <option value="">--Seleccione una marca --</option>

            {BRANDS.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handlerChangeData(e)}
            value={data.year}
          >
            <option value="">--Seleccione el año --</option>

            {YEARS.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handlerChangeData(e)}
                ></input>
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Form;
