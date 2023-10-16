import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const customId = "custom-id-yes";
    const notify = () => {
        /* to prevent duplicates */
        toast.success("Wow so easy!",{
        toastId: customId
      });
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });

      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
      });

      toast.warn("Warning Notification !", {
        position: toast.POSITION.BOTTOM_LEFT
      });

      toast.info("Info Notification !", {
        position: toast.POSITION.BOTTOM_CENTER
      });

      toast("Custom Style Notification with css class!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      });
    }
  return (
    <>
      <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </>
  )
}

export default Home


/* https://fkhadra.github.io/react-toastify/positioning-toast */
/* https://fkhadra.github.io/react-toastify/introduction */
