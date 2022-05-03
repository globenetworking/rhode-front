import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';

const Wallet = () => {
  return (
    <div className="lg:px-16 md:px-8 px-2 h-full w-5/6 mx-auto">
      <DashboardHeader />

      <div className="my-8">
        <h1 className="text-2xl font-bold pb-3"> Wallet</h1>
        <p className="text-white">
          Connect with one of our available wallet providers.
        </p>
      </div>

      <section className="mb-10 pb-20 pt-4">
        <div className="lg:w-5/6 w-full bg-accent rounded-lg p-8">
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-5">
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://api.lorem.space/image/face?hash=92048"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold">Metamask</p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button border-yellow-500"
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
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-5">
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://api.lorem.space/image/face?hash=92048"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold"> Coinbase Wallet</p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button border-yellow-500"
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
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-5">
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://api.lorem.space/image/face?hash=92048"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold"> WalletConnect</p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button border-yellow-500"
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
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-5">
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://api.lorem.space/image/face?hash=92048"
                    alt="wallet"
                  />
                </div>
              </div>

              <p className="text-white font-bold"> Phantom</p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button border-yellow-500"
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
