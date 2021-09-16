const { getFoodNeedsToOrder, isCapacityOfTheShelterExceeded, getFoodNeedsBasedOnDogSize } = require('../CalculateFoodNeeds');
const { expect } = require('chai');
const assert = require('assert');

describe('Food Order Calculations', () => {

    it('Positive scenario: Calculate food order when remaining food is not enough for next month', () => {
        const food_Order = getFoodNeedsToOrder(5, 3, 7, 17)
        expect(food_Order).to.be.equal("You have to Order 363.6 lbs of dog food");
    })

    it('Negative scenario: Calculate food order when remaining food is enough for next month', () => {
        const food_Order = getFoodNeedsToOrder(5, 3, 7, 500)
        expect(food_Order).to.be.equal("You have sufficient food for next month");
    })

    it('Negative scenario: verify Proper message is displayed when strings are passed to the method', () => {
        const warningMessage = getFoodNeedsToOrder("String", 3, 7, 17)
        expect(warningMessage).to.be.equal("Make sure you enter a Integer for no of dogs and remaining food");
    })


    it('Edge Case: Verify Message when there are no dogs in the shelter', () => {
        const capacityExceededMessage = getFoodNeedsToOrder(0, 0, 0, 17);
        expect(capacityExceededMessage).to.be.equal("There are no dog's in the shelter")
    })

})

describe('Shelter Capacity', () => {

    it('Positive scenario: capacity is exactly equal 30', () => {
        const capacityMet = isCapacityOfTheShelterExceeded(15, 13, 2, 17);
        expect(capacityMet).to.be.equal(true)
    })

    it('Edge Case: capacity is greater than 30', () => {
        const capacityExceededMessage = getFoodNeedsToOrder(15, 13, 7, 17);
        expect(capacityExceededMessage).to.be.equal("30 Dogs Capacity Exceeded, please adjust the number of dogs in your shelter before ordering the Food")
    })

})

describe('Calculate Food needs based on size', () => {

    it('Verify food needs for 3 small dogs', () => {
        const food_Need = getFoodNeedsBasedOnDogSize("small", 3);
        expect(food_Need).to.be.equal(30)
    })

    it('Verify food needs for 10 Medium dogs', () => {
        const food_Need = getFoodNeedsBasedOnDogSize("medium", 10);
        expect(food_Need).to.be.equal(200)
    })
    it('Verify food needs for 10 small dogs', () => {
        const food_Need = getFoodNeedsBasedOnDogSize("large", 10);
        expect(food_Need).to.be.equal(300)
    })
})