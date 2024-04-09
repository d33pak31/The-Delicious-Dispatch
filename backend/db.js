const mongoose = require('mongoose')

const mongoURI =
  'mongodb+srv://deepakshiva:312000@cluster0.pb3djz1.mongodb.net/DeliciousDispatch?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
  await mongoose.connect(mongoURI)
  console.log(`the db is connect with ${mongoose.connection.host}`)

  const fetched_data = await mongoose.connection.db.collection('food_items')
  const data = await fetched_data.find({}).toArray(function (err, data) {
    if (err) {
      console.log(err)
    } else {
      // console.log(data)
      global.food_items = data
    }
  })
  // console.log(global.food_items)
}

module.exports = { mongoDB }
