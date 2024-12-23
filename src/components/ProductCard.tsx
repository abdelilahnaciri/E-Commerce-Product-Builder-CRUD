import { memo } from "react";
import { IProduct } from "../interfaces";
import { numberWithCommas, txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIdx: (value: number) => void;
  openConfirmModal: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
  openConfirmModal,
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /* --------- RENDERS --------- */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /* --------- HANDLER --------- */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
    // console.log(idx);
  };

  const onRemove = () => {
    setProductToEdit(product);
    openConfirmModal();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt="product name"
        className="rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
      <p className="text-xs text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center flex-wrap space-x-2">
        {renderProductColors}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">
          ${numberWithCommas(price)}
        </span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700 hover:bg-indigo-800"
          // width="w-full"
          onClick={onEdit}
        >
          EDIT
        </Button>
        <Button className="bg-red-700 hover:bg-red-800" onClick={onRemove}>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default memo(ProductCard);
