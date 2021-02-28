import React from 'react';
import icons from '../../icons';

function Cons(props) {
  return (
    <section class='bg-indigo-100 dark:bg-gray-800'>
      <div class='container px-6 py-8 mx-auto'>
        <div class='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            {/* shield icon */}
            <img src={icons.shield} className='h-8 w-8' alt='Shield' />
            <h1 class='mt-4 text-xl font-semibold text-gray-800 dark:text-white'>
              Bảo hành 24 tháng
            </h1>

            <p class='mt-2 text-gray-500 dark:text-gray-400'>
              Bảo hành 24 tháng, cùng với sửa chữa thay keo trọn đời đối với
              giày
            </p>
          </div>

          <div>
            {/* device svg */}
            <img src={icons.shipping} className='h-8 w-8' alt='Shipping' />

            <h1 class='mt-4 text-xl font-semibold text-gray-800 dark:text-white'>
              Vận chuyển 64 tỉnh thành
            </h1>

            <p class='mt-2 text-gray-500 dark:text-gray-400'>
              Vận chuyển nhanh 64 tỉnh thành, FREESHIP với đơn trên 599.000 vnd
            </p>
          </div>

          <div>
            {/* rtl icon */}
            <img src={icons.rtl} className='h-8 w-8' alt='Support' />

            <h1 class='mt-4 text-xl font-semibold text-gray-800 dark:text-white'>
              Hỗ trợ 24/7
            </h1>

            <p class='mt-2 text-gray-500 dark:text-gray-400'>
              Có câu hỏi? Gọi hỗ trợ ngay
              <br />
              <em>
                Hỗ trợ tư vấn trực tiếp trên fanpage và hotline 1900.100 có
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cons;
