// import React, { useState } from 'react';
// // import Select from 'react-select';

// export default function Tabs() {
// //   const [selectedClass, setSelectedClass] = useState('CLASS');
//   return (
// <div class="w-full">
//   <div class="relative right-0">
//     <ul
//       class="relative flex list-none flex-wrap rounded-lg bg-blue-gray-50/60 p-1"
//       data-tabs="tabs"
//       role="list"
//     >
//       <li class="z-30 flex-auto text-center">
//         <a
//           class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
//           data-tab-target="/home"
//           active
//           role="tab"
//           aria-selected="true"
//         >
//           <span class="ml-1">HTML</span>
//         </a>
//       </li>
//       <li class="z-30 flex-auto text-center">
//         <a
//           class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
//           data-tab-target=""
//           role="tab"
//           aria-selected="false"
//         >
//           <span class="ml-1">React</span>
//         </a>
//       </li>
//       <li class="z-30 flex-auto text-center">
//         <a
//           class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
//           data-tab-target=""
//           role="tab"
//           aria-selected="false"
//         >
//           <span class="ml-1">Vue</span>
//         </a>
//       </li>
//       <li class="z-30 flex-auto text-center">
//         <a
//           class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
//           data-tab-target=""
//           role="tab"
//           aria-selected="true"
//         >
//           <span class="ml-1">Angular</span>
//         </a>
//       </li>
//       <li class="z-30 flex-auto text-center">
//         <a
//           class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
//           data-tab-target=""
//           role="tab"
//           aria-selected="true"
//         >
//           <span class="ml-1">Svelte</span>
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>
//     );
// }

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export default function Example() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
 
  return (
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}