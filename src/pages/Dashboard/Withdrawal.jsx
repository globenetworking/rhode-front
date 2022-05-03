import { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader';

const Withdrawal = () => {
  const [amt, setAmt] = useState(0);

  const handleChange = (e) => {
    setAmt(e.target.value);
  };

  return (
    <div className="lg:px-16 md:px-8 px-2 h-full w-5/6 mx-auto">
      <DashboardHeader />
      <div className="my-8 flex justify-between">
        <h1 className="text-2xl font-bold pb-3">Withdrawal</h1>
        <div>
          <p className="text-sm font-bold">Your balance</p>
          <p>{`$112000`}</p>
        </div>
      </div>

      <section className="flex flex-col justify-between gap-x-10">
        <div>
          <h2 className="text-lg font-semibold pb-3 w-full">
            Hi, Doe your balance is
            <span className="font-bold"> {`$112000`}</span>
          </h2>
        </div>

        <div className="my-10">
          <div className="lg:w-10/12 mx-auto flex flex-col">
            <h2 className="text-lg font-semibold pb-3 w-full text-center">
              Withdraw from your wallet
            </h2>
            <div class="form-control w-full mt-2 bg-accent lg:p-10 p-5 rounded">
              <select class="select select-sm select-bordered select-ghost max-w-md">
                <option disabled selected>
                  Select address type
                </option>
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
              </select>
              <div className="my-2">
                <label class="label">
                  <span class="label-text">Enter address</span>
                </label>
                <label class="input-group w-full input-group-xs mt-1 text-white">
                  <span className="bg-gray-700 font-bold text-sm">Address</span>
                  <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter address"
                    class="input h-8 input-group-xs input-bordered text-primary w-full"
                  />
                </label>
              </div>
              <div className="my-2">
                <label class="label">
                  <span class="label-text">Enter amount</span>
                </label>
                <label class="input-group input-group-xs mt-1 text-white w-full">
                  <span className="bg-gray-700 font-bold text-sm">Price</span>
                  <input
                    type="text"
                    onChange={handleChange}
                    placeholder="0"
                    class="input h-8 input-group-xs input-bordered text-primary w-full"
                  />
                  <span className="bg-gray-700 font-bold text-sm">USD</span>
                </label>
              </div>

              <button class="btn btn-primary btn-square mx-0 text-white flex btn-block bg-secondary mt-6">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Withdrawal;
