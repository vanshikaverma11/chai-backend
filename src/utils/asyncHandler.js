const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        promise.resolve(requestHandler(req,  res, next)). catch((err) => next(err))
    }
}

export {asyncHandler}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         awaitfn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             succes: false,
//             message: err.message
//         })
//     }
// }