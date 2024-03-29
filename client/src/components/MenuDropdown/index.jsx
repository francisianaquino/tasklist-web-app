import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useAuth } from '../../hooks/useAuth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MenuDropdown = () => {
  const { logout } = useAuth();
  return (
    <Menu as="div" className="relative inline-block text-left bg-[#FEB708] rounded">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-sm bg-[#FEB708] px-3 py-2 text-sm text-white">
          Menu
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-sm bg-[#FEB708]">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/tasklist"
                  className={classNames(
                    active ? 'bg-[#FFD05A]' : 'bg-[#FEB708]',
                    'block px-4 py-2 text-sm text-white'
                  )}
                >
                  Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-[#FFD05A]' : 'bg-[#FEB708]',
                    'block px-4 py-2 text-sm text-white'
                  )}
                >
                  Log In
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/register"
                  className={classNames(
                    active ? 'bg-[#FFD05A]' : 'bg-[#FEB708]',
                    'block px-4 py-2 text-sm text-white'
                  )}
                >
                  Sign Up
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={()=>{logout()}}
                  className={classNames(
                    active ? 'bg-[#FFD05A]' : 'bg-[#FEB708]',
                    'block px-4 py-2 text-sm text-white w-full text-left'
                  )}
                >
                  Sign Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MenuDropdown;
