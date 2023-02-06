const Event = require("../../models/event/eventModel");

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

exports.createEvent = async (req, res) => {
try {
    const {eventName, eventDate} = req.body;
    const date = new Date(eventDate)
    const monthNum = date.getMonth();
    const year = date.getFullYear();
    const month = months[monthNum]

    const data = await Event.create({
        eventName,
        eventDate,
        month,
        year

    }) 
    

    res.status(200).json({
        status:"success",
        message:"Created Successfully",
        data:data
    })
    
} catch (error) {
    console.log(error)
}
}
exports.deleteEvent = async(req, res) => {
    try {
        const { id } = req.params;
        await Event.findByIdAndDelete(id)
        res.status(200).json({
            status: "success",
            message: "Event Deleted"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.getEvent = async (req, res) => {
    try {
        const allEvents = await Event.find({});
        res.status(200).json({
            status:"success",
            message:"Get All Events Successfully",
            data:allEvents
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getEventByMonth = async (req, res) => {
    try {
        const allEvents = await Event.find({month:req.body.month});
        res.status(200).json({
            status:"success",
            message:"Get all events of month successfully",
            data:allEvents
            
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getEventByCurrentMonth = async (req, res) => {
    try {
        const date = new Date()
        const monthNum = date.getMonth();
        const years = date.getFullYear();
        const month = months[monthNum]
        // console.log("month is", month)
        const allEvents = await Event.find({month:month , year:years});
        res.status(200).json({
            status:"success",
            message:"Get all events of month successfully",
            data:allEvents
            
        })
    } catch (error) {
        console.log(error)
    }
}

exports.editEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const {eventName, eventDate} = req.body;
       await Event.findByIdAndUpdate(id,{
            eventName, eventDate
        });
        res.status(200).json({
            status:"Success",
            message:"Successfully updated event"

        }) 
    } catch (error) {
        console.log(error)
    }
}