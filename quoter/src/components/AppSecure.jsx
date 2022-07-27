import React from "react";
import Form from "./Form";
import useQuoter from "../hooks/useQuoter";
import Spinner from "./Spinner";
import Result from "./Result";
const AppSecure = () => {
  const { result, loading } = useQuoter();
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-indigo-900">
      <header className="my-10">
        <h1 className="text-white text-center text-4xl">
          Cotizador de seguros de Auto
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Form />
        {loading ? <Spinner /> : <Result />}
      </main>
    </div>
  );
};

export default AppSecure;
