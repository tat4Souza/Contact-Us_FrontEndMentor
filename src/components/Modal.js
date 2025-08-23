import { AnimatePresence, motion } from "framer-motion";

function Modal({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="toast"
        >
          <div className="toast__header">
            <p className="toast__title">Message Sent!</p>
          </div>
          <p className="toast__message">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
