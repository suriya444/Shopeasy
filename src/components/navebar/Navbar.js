import React, { useContext, Fragment, useState } from 'react';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun, FiShoppingCart } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';

const Navbar = () => {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/';
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={'/allproducts'}
                    className="text-sm font-medium text-gray-900"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link
                      to={'/order'}
                      className="-m-2 block p-2 font-medium text-gray-900"
                      style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                      Order
                    </Link>
                  </div>

                  {user?.user?.email === 'prakashsuriya1095@gmail.com' && (
                    <div className="flow-root">
                      <Link
                        to={'/dashboard'}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        Admin
                      </Link>
                    </div>
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={'/signup'}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        Signup
                      </Link>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop and larger screens */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '',
            color: mode === 'dark' ? 'white' : '',
          }}
        >
          Get Shopping Easy
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{
            backgroundColor: mode === 'dark' ? '#282c34' : '',
            color: mode === 'dark' ? 'white' : '',
          }}
        >
          <div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className="flex">
                  <h1
                    className="text-2xl font-bold text-black px-2 py-1 rounded"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    ShopEasy
                  </h1>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={'/allproducts'}
                    className="text-sm font-medium text-gray-700"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    All Products
                  </Link>
                  <Link
                    to={'/order'}
                    className="text-sm font-medium text-gray-700"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Order
                  </Link>
                  {user?.user?.email === 'prakashsuriya1095@gmail.com' && (
                    <Link
                      to={'/dashboard'}
                      className="text-sm font-medium text-gray-700"
                      style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                      Admin
                    </Link>
                  )}
                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                      style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link
                      to={'/signup'}
                      className="text-sm font-medium text-gray-700"
                      style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                      Signup
                    </Link>
                  )}
                </div>

                {/* Mode Toggle */}
                <div className="flex lg:ml-6">
                  <button onClick={toggleMode}>
                    {mode === 'light' ? (
                      <FiSun size={30} />
                    ) : (
                      <BsFillCloudSunFill size={30} />
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={'/cart'}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    <FiShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
