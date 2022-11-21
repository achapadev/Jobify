const errorHandlerMiddleware = (err, req, res, next) => {
  // 4 params signals to express this is going to be an error handler
  console.log(err)
  res.status(500).json({ msg: 'there was an error' })
}

export default errorHandlerMiddleware
