// cartMethods.js
import Swal from "sweetalert2";

// Method to handle item deletion
export function handleDelete(itemId, cartItems) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteItem(itemId, cartItems);
    }
  });
}

// Method to delete an item from the cart
function deleteItem(itemId, cartItems) {
  const itemIndex = cartItems.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    Swal.fire("Error", "Item not found in cart", "error");
    return;
  }
  cartItems.splice(itemIndex, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  Swal.fire("Deleted!", "Your item has been removed from the cart.", "success");
}

// Method to add item to wishlist
export function addToWishlist(item) {
  if (!item?.id || !item?.title || !item?.price) {
    return Swal.fire("Error", "Invalid item. Cannot add to wishlist.", "error");
  }

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
    return Swal.fire("Info", "Item already in wishlist.", "info");
  }

  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  Swal.fire("Success!", "Item has been added to your wishlist.", "success");
}
