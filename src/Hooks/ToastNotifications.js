// External Libraries
import { toast } from "react-toastify";

// Toastify
const notify = (msg, type) => {
  if (type == "warn") {
    toast.warn(msg);
  } else if (type == "error") {
    toast.error(msg);
  } else if (type == "success") {
    toast.success(msg);
  } else {
    toast.info("");
  }
};
// ==== Toastify ==== //

export default notify;
