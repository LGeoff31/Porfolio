import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  const form: any = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .sendForm(
        "service_3o5mcdb",
        "template_xwxfc8f",
        form.current,
        "moDPWbTnW1z7oYc1i"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setSubmitStatus("success");
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
    loading: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="space-y-6">
      {submitStatus === "success" && (
        <motion.div
          variants={successVariants}
          initial="hidden"
          animate="visible"
          className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30"
        >
          <Typography
            className="text-center text-green-400 font-medium"
            sx={{ color: "rgb(74 222 128)" }}
          >
            Message sent successfully! I&apos;ll get back to you soon.
          </Typography>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          variants={successVariants}
          initial="hidden"
          animate="visible"
          className="p-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30"
        >
          <Typography
            className="text-center text-red-400 font-medium"
            sx={{ color: "rgb(248 113 113)" }}
          >
            Something went wrong. Please try again or contact me directly via
            email.
          </Typography>
        </motion.div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            variants={fieldVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TextField
              type="text"
              name="first_name"
              label="First Name"
              InputLabelProps={{
                sx: {
                  color: "rgb(156 163 175)",
                  "&.Mui-focused": { color: "rgb(59 130 246)" },
                },
              }}
              placeholder="Enter your first name"
              variant="outlined"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(55, 65, 81, 0.3)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(75, 85, 99, 0.3)",
                  borderRadius: "16px",
                  color: "white",
                  "&:hover": {
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  },
                  "&.Mui-focused": {
                    borderColor: "rgb(59, 130, 246)",
                    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  "&::placeholder": {
                    color: "rgba(156, 163, 175, 0.7)",
                    opacity: 1,
                  },
                },
              }}
            />
          </motion.div>

          <motion.div
            variants={fieldVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TextField
              name="last_name"
              label="Last Name"
              InputLabelProps={{
                sx: {
                  color: "rgb(156 163 175)",
                  "&.Mui-focused": { color: "rgb(59 130 246)" },
                },
              }}
              placeholder="Enter your last name"
              variant="outlined"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(55, 65, 81, 0.3)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(75, 85, 99, 0.3)",
                  borderRadius: "16px",
                  color: "white",
                  "&:hover": {
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  },
                  "&.Mui-focused": {
                    borderColor: "rgb(59, 130, 246)",
                    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  "&::placeholder": {
                    color: "rgba(156, 163, 175, 0.7)",
                    opacity: 1,
                  },
                },
              }}
            />
          </motion.div>
        </div>

        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <TextField
            name="user_email"
            type="email"
            label="Email"
            InputLabelProps={{
              sx: {
                color: "rgb(156 163 175)",
                "&.Mui-focused": { color: "rgb(59 130 246)" },
              },
            }}
            placeholder="Enter your email address"
            variant="outlined"
            fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(55, 65, 81, 0.3)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(75, 85, 99, 0.3)",
                borderRadius: "16px",
                color: "white",
                "&:hover": {
                  borderColor: "rgba(59, 130, 246, 0.5)",
                },
                "&.Mui-focused": {
                  borderColor: "rgb(59, 130, 246)",
                  boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
                "&::placeholder": {
                  color: "rgba(156, 163, 175, 0.7)",
                  opacity: 1,
                },
              },
            }}
          />
        </motion.div>

        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <TextField
            name="message"
            label="Message"
            InputLabelProps={{
              sx: {
                color: "rgb(156 163 175)",
                "&.Mui-focused": { color: "rgb(59 130 246)" },
              },
            }}
            multiline
            rows={4}
            placeholder="Tell me about your project or how I can help..."
            variant="outlined"
            fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(55, 65, 81, 0.3)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(75, 85, 99, 0.3)",
                borderRadius: "16px",
                color: "white",
                "&:hover": {
                  borderColor: "rgba(59, 130, 246, 0.5)",
                },
                "&.Mui-focused": {
                  borderColor: "rgb(59, 130, 246)",
                  boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
                "&::placeholder": {
                  color: "rgba(156, 163, 175, 0.7)",
                  opacity: 1,
                },
              },
            }}
          />
        </motion.div>

        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileHover={isSubmitting ? "loading" : "hover"}
            whileTap="tap"
          >
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                borderRadius: "16px",
                padding: "16px 32px",
                fontSize: "1.1rem",
                fontWeight: "600",
                textTransform: "none",
                boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                  boxShadow: "0 8px 30px rgba(245, 158, 11, 0.4)",
                },
                "&:disabled": {
                  background: "rgba(75, 85, 99, 0.5)",
                  color: "rgba(156, 163, 175, 0.7)",
                },
              }}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <SendIcon />
                </motion.div>
              ) : (
                <>
                  <SendIcon className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default Form;
