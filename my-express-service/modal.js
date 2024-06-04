'use strict' 
module.exports = {
    bicycle: bicycleModal()
}

function bicycleModal () {
    const db = {
        1: { brand: 'Veloretti', color: 'green'},
        2: { brand: 'Batavus', color: 'yellow'}
    }
    return {
        read 
    }
    function read (id, cb) {
        if (!(db.hasOwnProperty(id))) {
            const err = Error('not found')
            setImmediate(() => cb (err))
            return
        }
        setImmediate(() => cd (null , db[id]))
    }
}