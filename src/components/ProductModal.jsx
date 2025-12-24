import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function DialogCustomAnimation({ product, onClose }) {
  const data = [product.images][0];
  const [active, setActive] = React.useState(data[0]);
  return (
    <Dialog
      open={open}
      handler={onClose}
      className="dark:bg-custom-background-dark rounded-xl"
    >
      <DialogBody className="max-h-[80vh] overflow-y-auto scrollbar">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center"
              src={active}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {data.map((imgelink, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="block mt-4 w-full text-center text-xl font-semibold text-custom-text">
          {product.name}
        </p>

        {product.description.split("|").map((chunk, chunkIndex) => (
          <div key={chunkIndex}>
            {chunk.split("\n").map((line, i) => {
              if (!line.trim() || !line.includes(":"))
                return <hr className="h-3" />;
              const [label, ...rest] = line.split(":");
              const value = rest.join(":").trim();
              return (
                <p key={i}>
                  <strong className="font-bold">{label.trim()}:</strong> {value}
                </p>
              );
            })}
          </div>
        ))}
      </DialogBody>
    </Dialog>
  );
}
