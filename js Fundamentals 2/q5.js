// /Q5. Estimated Delivery Time Based on Package Type
function getDeliveryTime(packageType) {
  let deliveryTime;

  switch (packageType) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "Next day delivery";
      break;
    default:
      deliveryTime = "Unknown package type";
  }

  console.log(`Delivery time for ${packageType} package: ${deliveryTime}`);
}

// Test cases
getDeliveryTime("standard"); // Output: 3-5 days
getDeliveryTime("express"); // Output: 1-2 days
getDeliveryTime("overnight"); // Output: Next day delivery
getDeliveryTime("same-day"); // Output: Unknown package type
