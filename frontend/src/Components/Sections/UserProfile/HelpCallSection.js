import { motion } from "framer-motion";
import HelpForm from "./HelpForm";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { use, useState } from "react";


const HelpCallSection = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="bg-white  mt-24 rounded-md overflow-hidden relative max-w-md mx-auto border border-blue-50">
        {/* Top Section */}
        <div className="bg-blue-500 flex flex-col gap-4 items-center justify-center py-12 rounded-md">
          <motion.div className="relative" whileHover={{ scale: 1.05 }}>
            <div className="w-32 h-32 rounded-full border-4 border-white/30 flex justify-center items-center p-1">
              <div className="bg-white/20 w-full h-full rounded-full flex justify-center items-center backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                >
                  <path d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.025.637T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z" />
                </svg>
              </div>
            </div>

            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-300"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-200"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 1.8],
                opacity: [0.2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          <h3 className="text-xl font-bold text-white tracking-wide">
            2 Help Calls
          </h3>
        </div>

        {/* Bottom Section */}
        <div className="p-8 text-center bg-gradient-to-b from-gray-50 to-gray-100 rounded-b-xl">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Need Help?</h2>
          <p className="mt-2">
            Our team is ready to assist you. Create another{" "}
            <span className="font-semibold text-blue-600">Help Call</span> to
            get immediate support.
          </p>

          <motion.button
            onClick={handleClickOpen}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:shadow-blue-200/50 transition-all duration-300"
          >
            Create Help Call
          </motion.button>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-indigo-700 rounded-lg opacity-10 blur-md"></div>
        <div className="absolute bottom-2 right-2 w-16 h-16 bg-blue-400 rounded-full opacity-10 blur-md"></div>
        <div className="absolute top-10 left-10 w-8 h-8 bg-blue-200 rounded-full opacity-20"></div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-dialog-title"
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "12px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: 600,
            px: 3,
            pt: 3,
            pb: 1,
            color: "#063751",
            borderBottom: "1px solid rgba(6, 55, 81, 0.1)",
          }}
        >
          Help Call
        </DialogTitle>

        <DialogContent sx={{ px: 3, pt: 2, pb: 0 }}>
          <HelpForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HelpCallSection;
