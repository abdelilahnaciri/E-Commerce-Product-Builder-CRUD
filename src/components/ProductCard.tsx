import Image from "./Image";
import Button from "./ui/Button";

interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image
        imageURL="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="product name"
        className="rounded-md mb-2"
      />
      <h3>2022 Genesis GV70: Nomine</h3>
      <p>
        As luxury T-Shirt is just as distinctive and can be trimmed with premium
        materials like Nappa leather and carbon fiber.
      </p>
      <div className="flex items-center my-4 space-x-3">
        <span className="w-5 h-5 bg-indigo-600 rounded-full" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full" />
        <span className="w-5 h-5 bg-red-600 rounded-full" />
      </div>
      <div className="flex items-center justify-between">
        <span>$500,000</span>
        <Image
          imageURL="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="product name"
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 ">EDIT</Button>
        <Button className="bg-red-700 ">DELETE</Button>
        <Button className="bg-slate-900 ">LOADING</Button>
        <Button className="bg-green-700 ">SUCCESS</Button>
        <Button className="bg-gray-300 ">CANCEL</Button>
      </div>
    </div>
  );
};

export default ProductCard;
