class OperationController
{
    async Operation(req, res){
        const {value1, value2, operator} = req.query
        try{
            const value = eval(`${value1} ${operator} ${value2}`)
            return res.json(value)        
        }
        catch(err)
        {
            return(err);
        }        
    }
}

module.exports = new OperationController();