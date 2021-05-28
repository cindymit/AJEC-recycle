import Bike from '../models/bike.js'


export const getBikes = async (req, res) => {
  try {
    const bikes = await Bike.find()
    res.json(bikes)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
}
}

export const getBike = async (req, res) => {
  try {
    const { id } = req.params
    const bike = await Bike.findById(id)
    if (!bike) throw Error('Bike not found')
    res.json(bike)
} catch (e) {
    console.log(e)
    res.send('Bike not found!')
}
}

export const createBike = async (req, res) => {
  try {
    const bike = await new Bike(req.body)
    await bike.save()
    res.status(201).json(bike)
} catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
}
}

export const updateBike = async (req, res) => {
  const { id } = req.params
  const bike = await Bike.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(bike)
}

export const deleteBike = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bike.findByIdAndDelete(id)
    if (deleted) {
        return res.status(200).send("Bike deleted")
    }
    throw new Error("Bike not found")
} catch (error) {
    res.status(500).json({ error: error.message })
}
}