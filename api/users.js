exports.getUsers = (req, res, next) => {
    try {
        console.log(req.body)
        return res.status(200).send({ something: 'else' })
    } catch (error) {
        return next(error)
    }
}