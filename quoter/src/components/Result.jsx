import React, { useMemo, useCallback, useRef } from "react";
import useQuoter from "../hooks/useQuoter";
import { PLANS, BRANDS } from "../constants";

const Result = () => {
  const { result, data } = useQuoter();
  const { brand, plan, year } = data;
  const yearRef = useRef(year);
  const [brandName] = useCallback(
    BRANDS.filter((b) => b.id === Number(brand)),
    [result]
  );

  const [planName] = useCallback(
    PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );

  if (result === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="py-2">
        <span className="font-bold">Marca: </span>
        {brandName.name}
      </p>

      <p className="py-2">
        <span className="font-bold">Plan: </span>
        {planName.name}
      </p>

      <p className="py-2">
        <span className="font-bold">Año del vehículo: </span>
        {yearRef.current}
      </p>

      <p className="py-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;
