// function AdminPage(){
//     return (
//         <div>

//         </div>
//     )
// }



// function AddTrain(){
//     return (
//         <div>

//         </div>
//     )
// }

// export default {
//     AdminPage,
//     AddTrain
// }

// import React, { useState } from 'react';

// export default function AdminPage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formValue, setFormValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Do some action with formValue
//     setFormValue('');
//     setIsOpen(false);
//   };

//   const handleCancel = () => {
//     setFormValue('');
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <button onClick={() => setIsOpen(true)}>Open Form</button>
//       {isOpen && (
//         <div className="popup">
//           <div className="popup-inner">
//             <h2>Form</h2>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Value:
//                 <input
//                   type="text"
//                   value={formValue}
//                   onChange={(e) => setFormValue(e.target.value)}
//                 />
//               </label>
//               <button type="submit">Submit</button>
//               <button type="button" onClick={handleCancel}>
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default {
//     AdminPage,
//     // AddTrain
// }



// import React from 'react';

// export default function AdminPage() {
//   const handleOpenPopup = () => {
//     const popupWindow = window.open(
//       '/popup',
//       'popup',
//       'width=400,height=400,resizable,scrollbars=yes,status=1'
//     );
//     window.addEventListener('message', (event) => {
//       if (event.origin !== window.location.origin) {
//         return;
//       }
//       console.log(event.data);
//       popupWindow.close();
//     });
//   };

//   return (
//     <>
//       <button onClick={handleOpenPopup}>Open Popup</button>
//     </>
//   );
// }
//--------------------------
// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import MakeAdmin from './MakeAdmin';

// function ModalForm() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <button onClick={handleOpenModal}>Open Modal</button>
//       <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
//         <h2>Modal Title</h2>
//         {isModalOpen && <MakeAdmin />}
//         <button onClick={handleCloseModal}>Close Modal</button>
//       </Modal>
//     </>
//   );
// }

// export default ModalForm;


import React, { useState } from 'react';
import Modal from 'react-modal';
import MakeAdmin from './MakeAdmin';
import AddTrain from './AddTrain';
import AddClassseats from './AddClasseats';

function App() {
  const [makeAdminModalOpen, setMakeAdminModalOpen] = useState(false);
  const [addTrainModalOpen, setAddTrainModalOpen] = useState(false);
  const [addClassSeatsModalOpen, setAddClassSeatsModalOpen] = useState(false);

  const openMakeAdminModal = () => {
    setMakeAdminModalOpen(true);
  };

  const closeMakeAdminModal = () => {
    setMakeAdminModalOpen(false);
  };

  const openAddTrainModal = () => {
    setAddTrainModalOpen(true);
  };

  const closeAddTrainModal = () => {
    setAddTrainModalOpen(false);
  };

  const openAddClassSeatsModal = () => {
    setAddClassSeatsModalOpen(true);
  };

  const closeAddClassSeatsModal = () => {
    setAddClassSeatsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">Admin Actions</h1>
      <div className="flex gap-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={openMakeAdminModal}
        >
          Make Admin
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={openAddTrainModal}
        >
          Add Train
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={openAddClassSeatsModal}
        >
          Add Class Seats
        </button>
      </div>
      <Modal isOpen={makeAdminModalOpen} onRequestClose={closeMakeAdminModal}>
        <h2 className="text-2xl font-bold mb-4">Make Admin</h2>
        <MakeAdmin />
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-4"
          onClick={closeMakeAdminModal}
        >
          Close
        </button>
      </Modal>
      <Modal isOpen={addTrainModalOpen} onRequestClose={closeAddTrainModal}>
        <h2 className="text-2xl font-bold mb-4">Add Train</h2>
        <AddTrain />
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-4"
          onClick={closeAddTrainModal}
        >
          Close
        </button>
      </Modal>
      <Modal
        isOpen={addClassSeatsModalOpen}
        onRequestClose={closeAddClassSeatsModal}
      >
        <h2 className="text-2xl font-bold mb-4">Add Class Seats</h2>
        <AddClassseats />
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-4"
          onClick={closeAddClassSeatsModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
