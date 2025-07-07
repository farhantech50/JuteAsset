import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function DialogCustomAnimation({ open, handleOpen, product }) {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="dark:bg-custom-background-dark"
    >
      <DialogHeader className="flex flex-col gap-3 dark:text-custom-text-dark">
        <img src={`${product.images[0]}`} className="rounded-md shadow-md" />
        {product.name}
      </DialogHeader>
      <DialogBody>{product.description}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
