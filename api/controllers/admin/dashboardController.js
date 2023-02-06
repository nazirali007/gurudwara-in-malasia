const Donaties = require("../../models/guruDwara/donationModel");
const Hukamnama = require("../../models/hukamnama/HukamnamaModel");
const Events = require("../../models/event/eventModel");
const GeneralInfo = require("../../models/guruDwara/generalInformationModel");

exports.getDashboardData = async (req, res) => {
    try {
        const donatiesCount = await Donaties.find({}).count();
        const hukamnamaCount = await Hukamnama.find({}).count();
        const eventsCount = await Events.find({}).count();
        const generalInfo = await GeneralInfo.find({}).count();

        const data = {
            donatiesCount,
            hukamnamaCount,
            eventsCount,
            generalInfo
        }

        // console.log(data)
        res.status(200).json({
            status:"Success",
            message:"Get All Gurudwara Successfully",
            data
        })
    } catch (error) {
        console.log(error)
    }
}