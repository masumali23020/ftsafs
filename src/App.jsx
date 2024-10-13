import { useState } from "react";
import Income from "./components/Expensess";
import Expenses from "./components/Income";
import ShowAllTypeBalnce from "./components/ShowAllTypeBalnce";
import SubmitonForm from "./components/submition/SubmitonForm";
import Navber from "./Navber";
export default function App() {
    const [transactions, setTransactions] = useState([]);
    const [type, setType] = useState('Expense');
  
    const addTransaction = (transaction) => {
      setTransactions([...transactions, transaction]);
    };
  return (
    <>
      <Navber />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SubmitonForm  addTransaction={addTransaction}  type={type} setType={setType} />
            <div className="lg:col-span-2">
                <ShowAllTypeBalnce />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                    <Expenses />
                    <Income />
                    </div>
                </div>
      

        </section>
      </main>
    </>
  );
}
