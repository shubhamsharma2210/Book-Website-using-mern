import book from '../model/book.model.js'

export const getBook = async(req,res) => {
    try {
      const getBook = await book.find()
      res.status(200).json(getBook)  
    } catch (error) {
        console.log("error in get Book ",error)
        res.status(500).json(error)
    }
}
