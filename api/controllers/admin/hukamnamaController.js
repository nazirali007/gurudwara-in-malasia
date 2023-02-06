const Hukamnama = require("../../models/hukamnama/HukamnamaModel");
const multer = require("multer");
const fs = require('fs');

exports.createHukamnama = async (req, res) => {
    try {
        const {hukamnamaText, hukamnamaDate} = req.body;
        const date = 23;
        const month= 2;

        const data = await Hukamnama.create({
            hukamnamaText, hukamnamaDate

        })
        res.status(200).json({
            status:"Success",
            message:"Created Successfully",
            data:data
    
        })

    } catch (error) {
        console.log(error)
    }
}


exports.getHukamnama = async (req, res) => {
    try {
        const allHukamnama = await Hukamnama.find();
        res.status(200).json({
            status:"success",
            message:"Get All Events Successfully",
            data:allHukamnama
        })
    } catch (error) {
        console.log(error)
    }
}




const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = "public/image";
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `hukamnama-${req.params.hukamnamaId}-${Date.now()}.${ext}`);
  },
});

const imageUpload = multer({
  storage: imageStorage,
});

exports.uploadImage = imageUpload.single("image");

exports.uploadHukamnamaImage = async (req, res) => {
  try {
    const hukamnama = await Hukamnama.findById(req.params.hukamnamaId);
    hukamnama.photo = req.file.filename;
    await hukamnama.save();          
    res
      .status(200)
      .json({ status: "success", message: "Hukamnama is submit successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};


exports.getHukamnamaByCurrentDate = async (req, res) => {
    try {
        // const date = new Date()
        // const monthNum = date.getMonth();
        // const month = months[monthNum]
        let today = new Date().toLocaleDateString()
        const date = new Date();

        let dayNum = `${date.getDate()}`;
        let monthNum = `${date.getMonth() + 1}`;
        let year = date.getFullYear();
        let day = "";
        if(dayNum.length === 1)
        {
            day = `0${dayNum}`; 
        }
        else{
            day=dayNum;
        }

        let month = "";
         
        if(monthNum.length === 1)
        {
            month = `0${monthNum}`;

        }
        else {
            month = monthNum;
        }
    
        let currentDate = `${year}-${month}-${day}`;
        // console.log(currentDate); 

        // console.log(today)
        const currentDateHukamnama = await Hukamnama.findOne({ hukamnamaDate: currentDate });
        res.status(200).json({
            status:"success",
            message:"Get today's Hukamnama successfully",
            date: today,
            data:currentDateHukamnama
            
        })
    } catch (error) {
        console.log(error)
    }
}

exports.deleteSingleHukamnama = async (req, res) => {
try {
    const { id } = req.params;
     const img = await Hukamnama.findById(id)
    //  console.log(img.photo)

    fs.unlink("public/image/"+  img.photo, (err) => {
        if (err) {
            throw err;
        }
    
        // console.log("Delete File successfully.");
    });

    await Hukamnama.findByIdAndDelete(id)


    res.status(200).json({
        status:"Success",
        message:"Hukamnama Deleted Succefully"
    })
 } catch (error) {
    console.log(error)
}
}

exports.editHukamnama = async (req, res) => {
 try {
    const {id} = req.params;
    const {hukamnamaText, hukamnamaDate} = req.body;
    await Hukamnama.findByIdAndUpdate(id, {hukamnamaText , hukamnamaDate});
    res.status(200).json({
        status:"Success",
        message:"Hukamnama Updated Successfully"
    })
 } catch (error) {
    console.log(error)
 }   
}