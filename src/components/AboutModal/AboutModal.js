import { RiCloseLine } from "react-icons/ri";
import { FiAlertOctagon } from "react-icons/fi";
import { useContext } from "react";

import styles from "./Modal.module.css";
import { NavBarContext } from "../../context/NavBarContext";

const Modal = ({ headerContent, mainContent }) => {
  const { setModalOpen } = useContext(NavBarContext);
  return (
    <>
      <div className={styles.darkBG} onClick={() => setModalOpen(null)} />
      <div className={styles.centered}>
        <div className={styles.modal + " " + "w-300px md:w-[650px] lg:w-[800px] min-w-min"}>
          <div className={styles.modalHeader}>
            <div className={styles.heading + " " + "flex items-center content-center"}>
              <div className="flex grow items-center relative">
                <FiAlertOctagon className="absolute right-0 text-2xl" />
              </div>
              <div className="flex grow items-center content-start">
                <span className="ml-2 text-2xl">{headerContent}</span>
              </div>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setModalOpen(null)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>{mainContent}</div>
          <div className={styles.modalActions + " " + "border-t-2 border-t-slate-500"}>
            <div className={styles.actionsContainer}>
              <button className={styles.cancelBtn} onClick={() => setModalOpen(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
