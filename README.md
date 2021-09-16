**###### GUILD_EDUCATION_TAKE_HOME:**
For the Project I used Javascript to code the main function, which will calculate the order based on number of dogs and
remaining food.

**### PreRequisites:**

1. Make Node is installed and environment variable are set in you local before execution.
2. Make sure Chai and Mocha are available as part of Node Modules. if not run following command.
    _**"npm install --save-dev mocha chai"**_

**### Run the Tests:**

1. Navigate GuildEducationTakeHome folder.
2. To Execute use: npm run test

**### Main Class: CalculateFoodNeeds.js**

I have written following 3 functions with in this class:

1. **getFoodNeedsToOrder: ** This will cover main functionality that we are testing, where it will take following 
   argument and calculate the required food that need to be ordered.
   
   **_arguments : no_Of_SmallDogs, no_Of_MediumDogs, no_Of_LargeDogs, Remaining_Food_**

2. **isCapacityOfTheShelterExceeded:** This method will true or false based on capacity of shelter and no of dogs.

3. **getFoodNeedsBasedOnDogSize:** This function will calculate food need for different sizes of the dogs.
   

**### Test Class: testCalculateFoodNeeds.js**

I Have cover following scenarios:

1. Calculate food order when remaining food is not enough for next month.
2. Calculate food order when remaining food is enough for next month.
3. A proper message is displayed when strings are passed to the method.
4. capacity is exactly equal 30.
5. capacity is greater than 30.
6. Calculate Food needs basing on size.


**### Not covered in AC**
1. Ac doesn't account for number of days in a month which may vary.
2. The AC doesn't mention, what to do if remaining food suffice the next month need, should we still order 20 % of the food.
3. Ac is not clear what we need to if the input is provided in string format.
4. Food Consumption by the dogs may change, as in real world dogs can be of different sizes other small, medium , large. Which can effect food needs too.
5. AC is not clear, what to do if more than 30 dogs are admitted to the shelter.