import React, { useState } from 'react';

const services = [
  { id: 'radio_1', name: 'Financial Planning', duration: '1 Hour' },
  { id: 'radio_2', name: 'Retirement Planning', duration: '1 Hour' },
  { id: 'radio_3', name: 'Investment Advice', duration: '1 Hour' },
];
const times = ['09:00', '12:00', '14:00', '15:00', '01:00','02:00','03:00','04:00'];
const TableThree = () => {
const [selectedTime, setSelectedTime] = useState('09:00');
const [selectedService, setSelectedService] = useState('Financial Planning');

  return (
    <div className="rounded-sm border border-stroke mt-10  pt-6 pb-2.5 shadow-default dark:border-strokedark  bg-white dark:!bg-navy-900 sm:px-7.5 xl:pb-1">
      <div className="max-w-screen">
      <div class="w-auto">
  <div class="mx-auto grid max-w-screen-lg px-6 pb-20">
       <div class="">
      <p class="font-serif text-xl font-bold text-blue-900">Select a service</p>
                <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">

      {services.map(service => (
              <div className="relative" key={service.id}>
                <input className="peer hidden" id={service.id} type="radio" name="radio" checked={selectedService === service.name} onChange={() => setSelectedService(service.name)} />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-blue-400"></span>
                <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-blue-600 peer-checked:text-white" htmlFor={service.id}>
                  <span className="mt-2 font-medium">{service.name}</span>
                  <span className="text-xs uppercase">{service.duration}</span>
                </label>
              </div>
            ))}
              </div>
    </div>
    <div class="">
      <p class="mt-8 font-serif text-xl font-bold text-blue-900">Select a date</p>
      <div class="relative mt-4 w-56">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg aria-hidden="true" class="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input type='date' datepicker-orientation="bottom" autofocus="autofocus" class="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Select date" />
      </div>
    </div>

    <div>
          <p className="mt-8 font-serif text-xl font-bold text-blue-900">Select a time</p>
          <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
            {times.map(time => (
              <button key={time} className={`rounded-lg px-4 py-2 font-medium active:scale-95 ${selectedTime === time ? 'bg-blue-600 text-white' : 'bg-blue-100 text-grey-900'}`} onClick={() => setSelectedTime(time)}>
                {time}
              </button>
            ))}
          </div>
        </div>

    <button class="mt-8 w-56 rounded-full border-8 border-blue-500 bg-blue-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">Book Now</button>
  </div>
</div>
      </div>
<script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>
    </div>
  );
};

export default TableThree;


