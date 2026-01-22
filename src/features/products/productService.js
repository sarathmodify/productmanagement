

export const productValidation = (addProduct = {}) => {
    if (!addProduct) return;
    const newErrors = {};

    if (!addProduct.title.trim()) {
        newErrors.title = 'Product title is required';
    } else if (addProduct.title.length < 3) {
        newErrors.title = 'Title must be at least 3 characters';
    }

    if (!addProduct.price) {
        newErrors.price = 'Price is required';
    } else if (Number(addProduct.price) <= 0) {
        newErrors.price = 'Price must be greater than 0';
    }

    if (!addProduct.category.trim()) {
        newErrors.category = 'Category is required';
    }

    if (!addProduct.description.trim()) {
        newErrors.description = 'Description is required';
    } else if (addProduct.description.length < 10) {
        newErrors.description = 'Description must be at least 10 characters';
    }

    if (!addProduct.image.trim()) {
        newErrors.image = 'Image URL is required';
    } else if (!/^https?:\/\/.+\..+/.test(addProduct.image)) {
        newErrors.image = 'Enter a valid image URL';
    }

    // If no errors → valid
    return Object.keys(newErrors).length === 0;
}