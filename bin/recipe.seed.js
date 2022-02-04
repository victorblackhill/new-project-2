const seedStuff = require("./../middlewares/seedStuff")
const RecipeModel = require("./../models/Recipe.model")

// console.log(RecipeModel)

const recipesSeed = [
    {
        name : "Simple Chemex",
        temperature :91,
        grind:19,
        weight:18,
        water:"Brita filtrée",
        extraction:"Chemex",
        description:"Recette simple, à préparer avec votre chemex 3 tasses",
        infusion:[
            {volume:100,
                time:40
            },
            {volume:100,
                time:40
            },
            {volume:100,
                time:40
            },
            {volume:0,
                time:60
            }
        ]
    },

    {
        name : "Simple V60",
        temperature :92.5,
        grind:20,
        weight:25,
        water:"Volvic",
        extraction:"V60",
        description:"A préparer avec V60 numéro 2",
        infusion:[
            {volume:50,
                time:30
            },
            {volume:150,
                time:30
            },
            {volume:100,
                time:30
            },
            {volume:100,
                time:30
            },
            {volume:100,
                time:30
            },
            {volume:0,
                time:60
            },
        ]
    },
    {
        name : "Piston français",
        temperature :90,
        grind:25,
        weight:18,
        water:"Grandbarbier",
        extraction:"Piston",
        description:"A préparer avec piston 350 mL",
        infusion:[
            {volume:50,
                time:30
            },
            {volume:300,
                time:30
            },
            {volume:0,
                time:180
            },
        ]
    },
    {
        name : "Aeropress forte",
        temperature :92,
        grind:12,
        weight:18,
        water:"Volvic",
        extraction:"Aeropress",
        description:"Pour débutant aéropressn, extraire rapidement à la fin de l'infustion",
        infusion:[
            {volume:50,
                time:30
            },
            {volume:150,
                time:30
            },
            {volume:0,
                time:30
            },
        ]
    },


]

//seed the DB with the recipes seed
seedStuff(recipesSeed,RecipeModel)