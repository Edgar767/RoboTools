// FullContentModal.jsx
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const FullContentModal = ({ isOpen, onClose, content }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto"
                    >
                        {content}
                        <button
                            onClick={onClose}
                            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                        >
                            Cerrar
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

FullContentModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.node
};

export default FullContentModal;