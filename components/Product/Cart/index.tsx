import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cx from 'clsx';

import FakeProduct from '../Fake';

import s from './cart.module.css';

interface CartProps {
  open: boolean;
  onClose: any;
}

const Cart = ({ open, onClose }: CartProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={open}
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-xl lg:h-[27rem] h-auto">
                <div className="h-full flex flex-col py-6 bg-black lg:border lg:border-white lg:border-t-0 lg:border-r-0 overflow-y-scroll">
                  <div className="container mx-auto px-4">
                    <div className="flex justify-end">
                      <button
                        className="font-bold font-basement uppercase text-xl lg:text-2xl"
                        onClick={onClose}
                      >
                        → Close
                      </button>
                    </div>
                    <div className="flex lg:flex-row flex-col space-y-3 items-center space-x-0 lg:space-x-5">
                      <h2 className={s.yourParagraph}>your</h2>
                      <h2 className={s.cartParagraph}>cart</h2>
                    </div>
                    <FakeProduct />
                  </div>
                  <div className="mt-20">
                    <div className="hidden xl:flex border border-white border-r-0 border-l-0 border-t items-center border-b-0 p-1">
                      <h2 className="font-bold font-basement text-4xl uppercase">
                        total: <span className="ml-2">$37,50</span>
                      </h2>
                      <button className={s.chekoutParagraph}>checkout</button>
                    </div>
                    <div className="block xl:hidden px-3">
                      <div className="flex justify-between">
                        <h2 className="uppercase text-xl font-basement font-bold">
                          total
                        </h2>
                        <h2 className="uppercase text-xl font-basement font-bold">
                          $37,50
                        </h2>
                      </div>
                      <div className={s.divider}></div>
                      <h2
                        className="text-[16.7vw] font-bold font-basement text-black uppercase text-center"
                        style={{
                          textShadow:
                            '-1px -1px 0 #fff, 1px -1px 0 #fff,-1px 1px 0 #fff, 1px 1px 0 #fff',
                        }}
                      >
                        checkout
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
