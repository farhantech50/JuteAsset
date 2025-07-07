import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProductModal from "@/components/ProductModal";
import { useEffect, useState } from "react";

export default function BlogCard({ product, setIsModalOpen }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(open);
  }, [open]);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Card className="max-w-[24rem] overflow-hidden dark:bg-custom-background-dark">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={`${product.images[0]}`} className="object-cover" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-custom-background"
          >
            {product.name}
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-3 font-normal text-gray-600 !line-clamp-2"
          >
            {product.description}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Button
              className="bg-custom-accent hover:bg-custom-accent-hover transition-all duration-300 w-auto"
              onClick={handleOpen}
            >
              See More
            </Button>
          </div>
        </CardFooter>
      </Card>
      <ProductModal {...{ open, handleOpen, product }} />
    </>
  );
}
