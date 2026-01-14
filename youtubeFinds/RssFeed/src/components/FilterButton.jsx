import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const FilterButton = ({onSelect}) => {
  const timeFilters = [
    {label: '30m', value:"30m"},
    {label: '1h', value:"1h"},
    {label: '4h', value:"4h"},
    {label: '12h', value:"12h"},
    {label: '1D', value:"24h"},
    {label: '1W', value:"7d"}
  ]


  return (
    <Menu as="div" className="relative  z-50  ">
      <MenuButton className=" bg-green-400 p-0.5  rounded-lg shadow-lg text-black flex flex-row items-center text-lg hover:bg-green-500 mr-50 ">
        Filter
        <ChevronDownIcon aria-hidden="true" className=" size-5 " />
      </MenuButton>

      <MenuItems className =" z-[100] absolute outline-none 0  p-2 flex flex-row  text-sm  gap-5 mt-3 -translate-x-30 ">
        {timeFilters.map(filter => (
          <MenuItem key={filter.value} className="  rounded-lg bg-black/80  hover:bg-green-400 hover:text-black p-2 border-gray-700 border shadow-lg  ">
            <button
              onClick={() => onSelect(filter.value)}
            
            >{filter.label}</button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
   


export default FilterButton

