let myRecipes = [
    {
        cooking_Time: 30,
        ingredient_List: [
            {
                name: "packed brown sugar", 
                amount: 1/2, 
                measurement: "cup"
            },
            {
                name:"butter or margarine, softened", 
                amount: 1/4, 
                measurement: "cup"
            },
            {
                name: "vanilla", 
                amount: 1/2, 
                measurement: "teaspoon"
            },
            {
                name:"egg white", 
                amount: 1, 
                measurement: "" //no measure
            },
            {
                name:"Gold Medal™ all-purpose flour", 
                amount: 1/2, 
                measurement: "cup"
            },
            {
                name:"unsweetened baking cocoa", 
                amount: 3, 
                measurement: "tablespoons"
            },
            {
                name:"baking soda", 
                amount: 1/2, 
                measurement: "teaspoon"
            },
            {
                name:"semisweet chocolate chips", 
                amount: 1/2, 
                measurement: "cup"
            },
        ],
        difficulty_Level: 'Easy',
        prep_Instructions: "Heat oven to 375°F. In large bowl, beat brown sugar and butter with electric mixer on medium speed until light and fluffy, or mix with spoon. Beat in vanilla and egg white. Stir in flour, cocoa, baking soda and salt. Stir in chocolate chips. Onto ungreased cookie sheet, drop dough by teaspoonfuls about 2 inches apart.Bake 8 to 9 minutes or until set (do not overbake). Cool 1 minute; remove from cookie sheet to wire rack.",
        recipe_Name: "Double Chocolate Chip Cookies",
        prep_Time: 30,
        recipe_image: "",
        servings: 24,
        prep_instructions: [
            {
                step: "Heat oven to 375°F. In large bowl, beat brown sugar and butter with electric mixer on medium speed until light and fluffy, or mix with spoon. Beat in vanilla and egg white."
            },
            {
                step: "Stir in flour, cocoa, baking soda and salt. Stir in chocolate chips. Onto ungreased cookie sheet, drop dough by teaspoonfuls about 2 inches apart."
            },
            {
                step: "Bake 8 to 9 minutes or until set (do not overbake). Cool 1 minute; remove from cookie sheet to wire rack."
            },
            {
                step: "Tip: Sprinkle a little flaky sea salt on the top of these cookies right before baking for a salty finish to these deliciously chocolatey cookies."
            },            
        ],
    },


    {
        cooking_Time: 2,
        ingredient_List: [
            {
                name: "granulated sugar", 
                amount: 1/2, 
                measurement: "cup"
            },
            {
                name:"packed brown sugar", 
                amount: 1/2, 
                measurement: "cup"
            },
            {
                name: "peanut butter", 
                amount: 1/2, 
                measurement: "cup"
            },
            {
                name: "shortening", 
                amount: 1/4, 
                measurement: "cup"
            },
            {
                name: "butter, softened", 
                amount: 1/4, 
                measurement: "cup"
            },
            {
                name: "Egg", 
                amount: 1, 
                measurement: ""//no measurement
            },
            {
                name: "Gold Medal™ all-purpose flour", 
                amount: 1/4, 
                measurement: "cup"
            },
            {
                name: "baking soda", 
                amount: 3/4, 
                measurement: "teaspoon"
            },
            {
                name: "baking powder", 
                amount: 1/4, 
                measurement: "teaspoon"
            },
            {
                name: "salt", 
                amount: 1/4, 
                measurement: "teaspoon"
            },
        ],
        difficulty_Level: 'Easy',
        prep_Instructions: "Heat oven to 375°F. In large bowl, beat brown sugar and butter with electric mixer on medium speed until light and fluffy, or mix with spoon. Beat in vanilla and egg white. Stir in flour, cocoa, baking soda and salt. Stir in chocolate chips. Onto ungreased cookie sheet, drop dough by teaspoonfuls about 2 inches apart.Bake 8 to 9 minutes or until set (do not overbake). Cool 1 minute; remove from cookie sheet to wire rack.",
        recipe_Name: "Peanut Butter Cookies",
        prep_Time: 25,
        recipe_image: "",
        servings: 30,
        prep_instructions: [
            {
                step: "Mix sugars, peanut butter, shortening, butter and egg in large bowl. Stir in remaining ingredients. Cover and refrigerate about 2 hours or until firm."
            },
            {
                step: "Heat oven to 375°F."
            },
            {
                step: "Shape dough into 1 1/4-inch balls. Place about 3 inches apart on ungreased cookie sheet. Flatten in crisscross pattern with fork dipped into sugar."
            },
            {
                step: "Bake 9 to 10 minutes or until light golden brown. Cool 5 minutes; remove from cookie sheet. Cool on wire rack."
            },
            {
                step: "Tip #1 - Have a household full of kids? Mix up and chill the dough for up to to 24 hours ahead, cover it and refrigerate so you are ready to bake effortlessly bake on demoand. If too firm to scoop, let it stand at room temperature for about 30 minutes."
            },
            {
                step: "Tip #2 - The fork crisscross is the classic way to make the distinctive look of peanut butter cookies, but you can use the bottom of a decorative juice glass like an old-fashioned cookie press."
            },
            {
                step: "Tip #3 - You can use either chunky or creamy peanut butter, but look for one that doesn’t need to be stirred before measuring."
            },
        ]
    }

]//end of my recipe


console.log("myRecipes: ")
console.log(myRecipes);      

	let myRecipesJSON  = JSON.stringify(myRecipes);  // Convert the Javascript object into a JSON object
    localStorage.setItem("myRecipeJSONObject", myRecipesJSON ); // Store the JSON object into local storage

