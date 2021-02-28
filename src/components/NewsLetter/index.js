import React from 'react';

function index(props) {
  return (
    <>
      <section className='text-gray-600 body-font bg-indigo-400 text-white'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              Đăng ký nhận tin mới
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-100'>
              Để không bỏ lỡ thông tin khuyến mại mới nhất
            </p>
          </div>
          <div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end'>
            <div className='relative flex-grow w-auto'>
              <label for='full-name' className='leading-7 text-sm text-white'>
                Họ và Tên
              </label>
              <input
                type='text'
                id='full-name'
                name='full-name'
                className='w-full bg-white bg-opacity-50 focus:bg-opacity-100 focus:bg-white rounded border focus:border-white text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative flex-grow w-auto'>
              <label for='email' className='leading-7 text-sm text-white'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full bg-white bg-opacity-50 focus:bg-opacity-100 focus:bg-white rounded border focus:border-white text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <button className='text-white bg-black hover:bg-white hover:text-indigo-700 border-0 py-2 px-8 rounded text-lg'>
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
