const desserts = [
    {
        name: "Cheesecake",
        flavors: ["Strawberry", "Blueberry", "Rasberry"],
        isVegan: false
    },
    {
        name: "Cake",
        flavors: ["Vanilla", "Chocolate"],
        isVegan: false
    },
    {
        name: "Sherbet",
        flavors: ["Lime", "Orange", "Swirl"],
        isVegan: true
    }
]

const getDesserts = (req,res) => {
    res.send(desserts)
}

const getDessertIndex = (req,res) => {
    res.send(desserts[req.params.id])
}

const getDessertByName = (req,res) => {
    const dessert = desserts.find(d => d.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(dessert)
}

const getVeganDessert = (req,res) => {
    const vegDessert = desserts.filter(v => v.isVegan)
    res.send(vegDessert)
}

module.exports = {
    getDesserts,
    getDessertIndex,
    getDessertByName,
    getVeganDessert
}