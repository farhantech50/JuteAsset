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
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="dark:bg-custom-background-dark max-h-[80vh]  overflow-y-auto scrollbar rounded-xl"
    >
      <DialogHeader className="flex flex-col gap-3 dark:text-custom-text-dark">
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
        {product.name}
      </DialogHeader>
      <DialogBody>
        {product.description.split("|").map((chunk, chunkIndex) => (
          <div key={chunkIndex}>
            {chunk.split("\n").map((line, i) => {
              if (!line.trim() || !line.includes(":"))
                return <hr className="h-3" />; // skip empty or invalid lines
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
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} className="mr-1">
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
