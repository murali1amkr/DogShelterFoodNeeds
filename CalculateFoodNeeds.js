const shelter_Capacity = 30;
const small_Dog_Food_Need = 10;
const medium_Dog_Food_Need = 20;
const Large_Dog_Food_Need = 30;

function testApplication () {

    getFoodNeedsToOrder(5, 3, 7, 20);
}

const getFoodNeedsToOrder = (no_Of_SmallDogs = 3, no_Of_MediumDogs = 5, no_Of_LargeDogs = 7, Remaining_Food = 0) => {

    let actual_No_Of_Dogs = no_Of_SmallDogs + no_Of_MediumDogs + no_Of_LargeDogs;

    if (actual_No_Of_Dogs <= 0) {
        return "There are no dog's in the shelter"
    }

    if (typeof no_Of_SmallDogs !== 'number' ||
        typeof no_Of_MediumDogs !== 'number' ||
        typeof no_Of_LargeDogs !== 'number' ||
        typeof Remaining_Food !== 'number') {
        return "Make sure you enter a Integer for no of dogs and remaining food";
    }

    if (isCapacityOfTheShelterExceeded(actual_No_Of_Dogs)) {

        let food_Order_for_Small_Dogs = getFoodNeedsBasedOnDogSize("small", no_Of_SmallDogs);
        let food_Order_for_Medium_Dogs = getFoodNeedsBasedOnDogSize("medium", no_Of_MediumDogs);
        let food_Order_for_Large_Dogs = getFoodNeedsBasedOnDogSize("large", no_Of_LargeDogs)
        let total_Min_Food_Order = food_Order_for_Small_Dogs + food_Order_for_Medium_Dogs + food_Order_for_Large_Dogs - Remaining_Food;

        if (total_Min_Food_Order > 0) {
            let food_Order = total_Min_Food_Order + total_Min_Food_Order * .2;
            return "You have to Order " + food_Order + " lbs of dog food"
        } else if (total_Min_Food_Order === 0) {
            let food_Order = Remaining_Food + Remaining_Food * .2;
            return "You have to Order" + food_Order + "lbs of dog food"
        } else {
            return "You have sufficient food for next month"
        }
    } else {
        return "30 Dogs Capacity Exceeded, please adjust the number of dogs in your shelter before ordering the Food"
    }
}

const getFoodNeedsBasedOnDogSize = (size_Of_The_Dog, no_Of_Dogs) => {
    if (size_Of_The_Dog.toLowerCase() === "small") {
        return no_Of_Dogs * small_Dog_Food_Need;
    } else if (size_Of_The_Dog.toLowerCase() === "medium") {
        return no_Of_Dogs * medium_Dog_Food_Need;
    } else if (size_Of_The_Dog.toLowerCase() === "large") {
        return no_Of_Dogs * Large_Dog_Food_Need;
    }
}


/*
* This Method Checks if the total no of dogs provided exceeds the Capacity and returns a Boolean value based on the comparision.*
* */
const isCapacityOfTheShelterExceeded = (actual_No_Of_Dogs) => {
    return actual_No_Of_Dogs <= shelter_Capacity;
}

module.exports = {
    getFoodNeedsToOrder, isCapacityOfTheShelterExceeded, getFoodNeedsBasedOnDogSize
}