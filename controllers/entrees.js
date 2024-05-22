const entrees = [
    {
        name: "Steak",
        seasoning: [
            "Lemon Pepper",
            "Garlic Marinade",
            "No seasoning"
        ],
        side: "Roasted potato wedges",
        isVegan: false
    },
    {
        name: "Chicken",
        seasoning: [
            "Lemon Pepper",
            "Garlic Marinade",
            "No seasoning"
        ],
        side: "Roasted potato wedges",
        isVegan: false
    },
    {
        name: "Fish",
        seasoning: [
            "Lemon Pepper",
            "Garlic Marinade",
            "No seasoning"
        ],
        side: "Roasted potato wedges",
        isVegan: false
    },
    {
        name: "Tofu",
        seasoning: [
            "Lemon Pepper",
            "Garlic Marinade",
            "No seasoning"
        ],
        side: "Roasted potato wedges",
        isVegan: true
    }

]

const getEntrees = (req,res) => {
    res.send(entrees)
}

const getEntreeIndex = (req,res) => {
    res.send(entrees[req.params.id])
}

const getEntreeByName = (req,res) => {
    const entree = entrees.find(e => e.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(entree)
}

const getVeganEntree = (req,res) => {
    const vegEntree = entrees.filter(v => v.isVegan)
    res.send(vegEntree)
}

module.exports = {
    getEntrees,
    getEntreeIndex,
    getEntreeByName,
    getVeganEntree
}