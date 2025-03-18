import { Link } from "react-router-dom";



const Navbar = () => {

  return (
    <>
      
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ReactJS Shopping Cart</span>

          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link to="/" className="text-lg font-bold">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="text-lg">Cart </Link>
              </li>
              <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> </a>
      </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
