import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rpm" }}>
          Copied to clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popUp")
  );
};
export default PopupContent;