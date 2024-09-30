// ** productObj === errorsObj (TITLE, DESCRIPTION, IMAGE, PRICE)
/**
 * Validates a product object for required fields and constraints.
 *
 * @param {Object} product - The product to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The URL of the product's image.
 * @param {string} product.price - The price of the product.
 *
 * @returns {Object} - An object containing error messages for invalid fields.
 * @property {string} title - Error message for the title field.
 * @property {string} description - Error message for the description field.
 * @property {string} imageURL - Error message for the imageURL field.
 * @property {string} price - Error message for the price field.
 * @property {string} tempColors - Error message for the tempColors field.
 */

export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  tempColors: string[];
}) => {
  // ** return an object
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
    tempColors: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    tempColors: "",
  };
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product description must be between 10 and 80 characters!";
  }
  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "Valid image URL is required";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid price is required!";
  }

  if (product.tempColors && product.tempColors.length <= 0) {
    errors.tempColors = "Colors is required";
  }

  return errors;
};
