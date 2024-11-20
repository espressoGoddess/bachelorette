'use client';
import { Menu } from '@headlessui/react';
import { RiArrowDropdownLine } from './RiArrowDropdownLine';
const gCalLink =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Amber's+Bachelorette!&dates=20250410/20250415&details=Join+us+for+Amber's+bachelorette+celebration!&location=Tulum,+Mexico";

export default function CalendarDropdown() {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        <Menu.Button className="relative card-btn">
          📅
          <span className="absolute right-0 -mr-2">
            <RiArrowDropdownLine className="rotate-180" />
          </span>
        </Menu.Button>

        <Menu.Items className="absolute left-0 -top-24 mt-2 w-48 fw-bold bg-ivory/80 rounded-md shadow-lg backdrop-blur-md focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href={gCalLink}
                  target="_blank"
                  rel="noferrer"
                  className={`${
                    active ? 'bg-sage/40 text-white' : 'text-sage'
                  } block px-4 py-2 text-sm`}
                >
                  Add to Google Calendar
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="bach.ics"
                  download="Ambers_Bachelorette.ics"
                  className={`${
                    active ? 'bg-sage/40 text-white' : 'text-sage'
                  } block px-4 py-2 text-sm`}
                >
                  Add to iCal/Outlook
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
