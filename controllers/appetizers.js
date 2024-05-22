const appetizers = [
    {
        name: "cheese bites",
        sizes: ["small", "medium", "large"],
        isVegan: false
    },
    {
        name: "nachos",
        sizes: ["small", "medium", "large"],
        isVegan: false
    },
    {
        name: "fries",
        sizes: ["small", "medium", "large"],
        isVegan: true
    }
]

const getAppetizer = (req,res) => {
    res.send(appetizers)
}

const getAppetizerIndex = (req,res) => {
    res.send(appetizers[req.params.id])
}

const getAppetizerByName = (req,res) => {
    const appetizer = appetizers.find(a => a.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(appetizer)
}

const getVeganAppetizer = (req,res) => {
    const vegApp = appetizers.filter(v => v.isVegan)
    res.send(vegApp)
}

module.exports = {
    getAppetizer,
    getAppetizerIndex,
    getAppetizerByName,
    getVeganAppetizer
}
