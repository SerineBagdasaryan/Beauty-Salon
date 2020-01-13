const db = require('../models/db');
const jwt = require('jsonwebtoken');
let userId;
const multer  = require('multer');
const secret = 'secret';
const fs = require('fs');
function getUserId(req, res,) {
 let token = req.headers['authorization'];
 // console.log(token);
 if (token.startsWith('Bearer ')) {
  token = token.slice(7, token.length).trimLeft();
 }
 if (token) {
  jwt.verify(token, secret, (err, decoded) => {
   if (err) {
    // console.log(err);
   } else {
    req.decoded = decoded;
    userId= decoded.id;

   }
  });
  return userId;
 }
}
exports.getUsers = function(req,res) {
db.query(`select * from users`, function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}

exports.getAdminData = function (req,res) {
 let id = getUserId(req,res);
 db.query(`select * from users where id=?`, [id],function (err,data) {
if(err) return console.log(err);
res.send(data);
 })

}

exports.getHomepageData = function (req,res) {
db.query(`select * from homepages`, function (err,data) {
 if(err) return console.log(err);
 res.send(data);

})
}
exports.editHome = function (req,res) {
 db.query("SELECT * FROM homepages",function(err, data) {
  if(err) return console.log(err);
  res.send(data);
 });
}


exports.updateHomePagedata = function(req,res) {
 const files = req.files;
 console.log(files[1]);
 if (!files) {
  const error = new Error('No File')
  error.httpStatusCode = 400
  return next(error)
 }
 res.send({status:  'ok'});
 // console.log('files', req.files);
 // console.log(req.body);
 // res.send(req.files);

// const textInfo = req.body.textInfo;
//  const textInfo1 = req.body.textInfo1;
//  const buttonText = req.body.buttonText;
//  const text1 = req.body.text1;
//  const text2 = req.body.text2;
//  const text3 = req.body.text3;
//  const text4 = req.body.text4;
//  console.log(req.files);
//  console.log(req.body);
//  let arr =[];
//  let image;
//  let image1;
//  // if (req.files) {
 //  req.files.forEach(function (file, index) {
 //   console.log(index)
   // console.log(file, index, 'new');
   // let filename = (new Date).valueOf() + "_" + file.originalname;
   // // console.log(filename);
   // fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
   //  if (err) throw err;
   //  console.log(filename,'hi')
   // });
   // arr.push(filename);
   // console.log(arr[0], arr[1], 'hy');
   // image  = arr[0];
   // image1 = arr[1];
   // console.log(arr);
   //  console.log(image, image1, 'inserted');
   // console.log('index', index);
  // });
  // image  = arr[0];
  // image1 = arr[1];
  // if(arr.length !== 1) {
  //  image  = arr[0]
  // } else if (arr.length !== 2) {
  //  image1 = arr[1];
  // }
  // db.query("UPDATE homepages SET textInfo=?, textInfo1=?, buttonText=?, text1=? , text2=?, text3=?,text4=?,image=?, image1= ?",
  //     [textInfo, textInfo1,buttonText,text1,text2,text3,text4,image, image1], function(err, data) {
  //      if(err) return console.log(err);
  //      res.send(data);
  //     });

 // }
//  if(!req.files) {
//   db.query(`UPDATE homepages SET textInfo=?, textInfo1=?, buttonText=?, text1=? , text2=?, text3=?,text4=?`, [textInfo, textInfo1,buttonText,text1,text2,text3,text4], function (err,data) {
// if(err) return console.log(err);
// res.send(data);
//   })
//  }
}
exports.updateHomePage = function(req,res) {
 console.log(req.files.length, 'f');
 console.log(req.body);
const textInfo = req.body.textInfo;
 const textInfo1 = req.body.textInfo1;
 const buttonText = req.body.buttonText;
 const aboutSalon = req.body.aboutSalon;
 const imageName = req.body.imageName;
 if(req.files.length > 0) {
  let filename;
  req.files.forEach(function (file, index) {
   filename = (new Date).valueOf() + "_" + file.originalname;
   fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
    if (err) throw err;
   });
  });
   db.query("UPDATE homepages SET textInfo=?, textInfo1=?, buttonText=?, aboutSalon=?,image=?", [textInfo,textInfo1,buttonText,aboutSalon, filename], function (err, data) {
       if (err) return console.log(err);
       res.send(data);
      });
 } else {
  db.query("UPDATE homepages SET textInfo=?, textInfo1=?, buttonText=?,aboutSalon =?, image=?", [textInfo,textInfo1,buttonText,aboutSalon,imageName], function (err,data) {
if(err) return console.log(err);
res.send(data);
  })
 }
}

exports.uploadWorkImages = function(req,res) {
 console.log(req.files);
 // if (req.files) {
 //  req.files.forEach(function (file, index) {
 //  let filename = (new Date).valueOf() + "_" + file.originalname;
 //   fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
 //    if (err) throw err;
 //  db.query("INSERT INTO imagesWork (image) VALUES (?)", [filename], function (err,data) {
 //   if(err) return console.log(err);
 //   res.json({message: 'uploded'});
 //  });
 //   })
 //  })
 //
 // }
}
exports.createPrice = function(req,res) {
 console.log(req.body);
 const price = req.body.price;
 const serviceName = req.body.serviceName;
 const discount = req.body.discount;
 const description = req.body.description;
 db.query(`insert into prices (price,serviceName,description, discount) VALUES (?, ?, ?, ?)`, [price, serviceName,description, discount], function (err, data) {
if(err) return console.log(err);
res.send(data);
 })
}
exports.multipleFiles = function(req,res) {
 console.log(req.files);
 if (req.files) {
  req.files.forEach(function (file, index) {
   let filename = (new Date).valueOf() + "_" + file.originalname;
  // console.log(filename);
   fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
    if (err) throw err;
    console.log(filename);
    db.query("INSERT INTO imagesWork (image) VALUES (?)", [filename], function (err,data) {
   if(err) return console.log(err);
  //  console.log(data);
  })
   });
  })
 }
}

exports.createService = function(req,res) {
 console.log(req.files);
 console.log(req.body);
 const title= req.body.title;
 const description = req.body.description;
 if(req.files){
  req.files.forEach(function (file) {
   let filename = (new Date).valueOf() + "_" + file.originalname;
   fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
    if (err) throw err;
    /////   INSERT
    db.query( "INSERT INTO service (title, description, image) VALUES (?,?,?)", [title,description,filename],function (err,data) {
     if (err) return console.log(err);
     res.json({ msg: 'inserted'});
    })
   })
  })
 }
}

exports.getImagesWork = function(req,res) {
 db.query(`select *from imagesWork`, function (err,data) {
if (err) return console.log(err);
res.send(data);
 })
}
exports.updateImagesWork = function(req,res) {
 console.log(req.files);
 const id = req.body.id;
 console.log(typeof req.body.id);
 if(req.files) {
  let filename;
  req.files.forEach(function (file, index) {
   filename = (new Date).valueOf() + "_" + file.originalname;
   fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
    if (err) throw err;
   })
  });
    db.query(`update imagesWork set image=? where id =?`, [filename,id],function (err,data) {
     if (err) return console.log(err);
     // res.json({ msg: 'updated'});
    })

 }

}

exports.deleteImagesWork =  function(req,res) {
 const id  = req.params.id;
 let imageName;
 db.query('select image from imagesWork where id=?', [id], function (err,data) {
if(err) return console.log(err);
imageName = data[0].image;
console.log(imageName);
const path = '../frontend/src/assets/images/' + imageName;
  fs.unlink(path, function (err) {
   if (err) throw err;
   console.log('File deleted!');
  });
 })
 console.log(id);
 db.query(`delete from imagesWork where id = ?`, [id], function (err,data) {
if(err) return console.log(err);
res.send(data);
 })
}
exports.createTeamMember = function(req,res) {
 console.log(req.body);
 console.log(req.files);
 const firstname  = req.body.firstname;
 const lastname = req.body.lastname;
 const specialty = req.body.specialty;
 const description = req.body.description;
 if(req.files){
  req.files.forEach(function (file) {
   let filename = (new Date).valueOf() + "_" + file.originalname;
   fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
    if (err) throw err;
    /////   INSERT
    db.query( "INSERT INTO team (firstname, lastname, specialty, description, image) VALUES (?,?,?,?,?)", [firstname, lastname, specialty,description,filename],function (err,data) {
     if (err) return console.log(err);
     res.json({ msg: 'inserted'});
    })
   })
  })
 }
}
exports.updateHome = function (req,res) {
 console.log(req.files);
 // if(!req.body) return res.sendStatus(400);
 // const textInfo = req.body.textInfo;
 // const textInfo1 = req.body.textInfo1;
 // const buttonText = req.body.buttonText;
 // const text1 = req.body.text1;
 // const text2 = req.body.text2;
 // const text3 = req.body.text3;
 // const text4 = req.body.text4;
 //
 // db.query("UPDATE homepages SET textInfo=?, textInfo1=?, buttonText=?, text1=? , text2=?, text3=?,text4=?", [textInfo, textInfo1,buttonText,text1,text2,text3,text4], function(err, data) {
 //  if(err) return console.log(err);
 //  res.send(data);
 // });
}

exports.deleteHomePage = function(req, res) {
 console.log(req.body);
 const id = req.params.id;
 // db.query("DELETE FROM homepages WHERE id=?", [id], function(err, data) {
 //  if(err) return console.log(err);
 //  res.send(data);
 // });
};

exports.getTeam = function (req,res) {
 db.query(`select * from team`,function (err,data) {
if(err) return   console.log(err);
res.send(data);
 } )
}
exports.editeTeam = function (req,res) {
 const id = req.params.id;
 console.log(id);
 db.query(`select * from team where id =?`,[id] ,function (err,data) {
if(err) return   console.log(err);
res.send(data);
 } )
}
exports.updateTeam = function (req,res) {
 console.log(req.files);
 console.log(req.body);
const firstname = req.body.firstname;
const lastname = req.body.lastname;
const specialty = req.body.specialty;
const description = req.body.description;
const id  = req.body.id;
const imageName = req.body.imageName;
if(req.files.length > 0) {
 let filename;
 req.files.forEach(function (file) {
  filename = (new Date).valueOf() + "_" + file.originalname;
  fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
   if (err) throw err;
  })
 })
 db.query(`update team set  firstname=?, lastname = ?, specialty = ?, description= ?, image= ? where id=?`, [firstname, lastname, specialty, description, filename, id], function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}else {
 db.query("UPDATE team SET firstname=?, lastname = ?, specialty = ?, description= ?, image= ? where id=?", [firstname, lastname, specialty, description,imageName, id], function (err,data) {
  if(err) return console.log(err);
  res.send(data);
 })
}

}

exports.createContact = function(req,res) {
 console.log(req.body);
 const address = req.body.address;
 const phone = req.body.phone;
 const email = req.body.email;
 const customerSupport = req.body.customerSupport;
 db.query(`insert into contact (address, phone, email, customerSupport) values(?,?,?,?)`, [address,phone,email,customerSupport],function (err,data) {
if(err) return console.log(err);
res.send(data);
 })
}
exports.getContact = function (req,res) {
db.query(`select * from contact`, function (err,data) {
 if(err) return console.log(err);
 res.send(data);

})
}
exports.editeContact = function(req,res) {
 const id  = req.params.id;
 db.query(`select *from contact where id=?` ,[id], function (err,data) {
if(err) return console.log(err);
res.send(data);
 })
}
exports.updateContact  = function (req,res) {
 const address = req.body.address;
 const phone = req.body.phone;
 const email = req.body.email;
 const customerSupport = req.body.customerSupport;
 const id  = req.body.id;
 db.query(`update contact set  address=?, phone = ?, email = ?, customerSupport= ?  where id=?`, [ address, phone, email, customerSupport, id], function (err,data) {
  if(err) return console.log(err);
  res.send(data);
 })
}
exports.deleteTeamPage = function(req,res) {
 const id = req.params.id;
 console.log(id);
//  db.query(`delete from team where id =?`, [id], function (err,data) {
// if(err) return console.log(err);
// res.send(data);
//  })
}
exports.deleteContact = function (req,res) {
const id = req.params.id;
console.log(id);
db.query(`delete from contact where id=?` , [id], function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}
exports.getMenu = function (req,res) {
db.query(`select * from menu`, function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}
exports.editeMenu = function (req,res) {
 const id = req.params.id;
 db.query("SELECT * FROM menu WHERE id=?", [id], function(err, data) {
  if(err) return console.log(err);
  res.send(data);
 });
}
exports.updateMenu = function (req,res) {
const id  = req.body.id;
const name = req.body.name;
const routerlink = req.body.routerlink;
db.query(`update menu set name =?, routerlink = ? where id=?`, [name,routerlink, id], function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}
exports.deleteMenu = function (req,res) {
const id  = req.params.id;
console.log(id);
// db.query(`delete from menu where id=?`,[id], function (err,data) {
// if(err) return console.log(err);
// res.send(data);
// })
}

exports.getPrice = function (req,res) {
 db.query(`select * from prices`, function (err,data) {
  if(err) return console.log(err);
  res.send(data);

 })

}
exports.editePrice = function(req,res) {
 const id = req.params.id;
 console.log(id);
 db.query(`select * from prices where id = ?`, [id], function (err,data) {
if(err) return console.log(err);
res.send(data);
 })
}
exports.updateprice = function (req,res) {
 const price = req.body.price;
 const serviceName = req.body.serviceName;
 const discount = req.body.discount;
 const description = req.body.description;
 const id = req.body.id;
 db.query(`update prices set price=?, serviceName = ?, discount = ?, description=? where id =?`, [price, serviceName,description, discount, id], function (err,data) {
  if(err) return console.log(err);
  res.send(data);

 })

}

exports.deleteprice = function (req,res) {
 const id = req.params.id;
 console.log(id);
 db.query(`delete from prices where id = ?`, [id], function (err,data) {
if(err) return console.log(err);
res.send(data);
 })

}

exports.getService = function (req,res) {
 db.query(`select * from service`, function (err,data) {
  if(err) return console.log(err);
  res.send(data);

 })

}
exports.editeService = function(req,res) {
 const id  = req.params.id;
 db.query("select * from service where id=?", [id], function (err,data) {
if(err) return console.log(err);
res.send(data);
 })
}
exports.deleteService = function (req,res) {
const id  = req.params.id;
console.log(id);
// db.query(`delete from service  where id=?` , [id], function (err,data) {
//  if(err) return console.log(err);
//  res.send(data);
// })
}

exports.updateservice = function (req,res) {
 const id = req.body.id;
 const title = req.body.title;
 const description = req.body.description;
 const imageName = req.body.imageName;
 console.log(req.body);
 if(req.files.length > 0) {
  let filename;
  req.files.forEach(function (file) {
   filename = (new Date).valueOf() + "_" + file.originalname;
   fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
    if (err) throw err;
   });
  })
  db.query(`update service set title=?, description= ?, image=? where id=?`, [title, description, filename, id], function (err, data) {
   if (err) return console.log(err);
   res.send(data);
  })
 } else {
  db.query(`update service set title=?, description= ?, image=? where id=?`, [title, description, imageName, id], function (err, data) {
   if (err) return console.log(err);
   res.send(data);
  })
 }
}
exports.getService1= function (req,res) {
db.query(`select * from service1`, function (err,data) {
 if(err) return console.log(err);
 res.send(data);
})
}
exports.deleteService1 = function (req,res) {
const id  = req.params.id;
console.log(id);
// db.query(`delete from service1 where id = ?`, [id] ,function (err,data) {
//  if(err) return console.log(err);
//  res.send(data);
// })
}

exports.updateService1 = function (req,res) {
 const text1 = req.body.text1;
 const text2 = req.body.text2;
 const text3 = req.body.text3;
 const text4 = req.body.text4;
 const text5 = req.body.text5;
 const text6 = req.body.text6;
 db.query(`update service1 set text1=?, text2 = ?, text3 = ?, text4= ?, text5= ?, text6= ?`, [text1, text2, text3, text4, text5, text6], function (err,data) {
  if(err) return console.log(err);
  res.send(data);

 })

}
exports.getService2 = function (req,res) {
db.query(`select * from service2`,function (err,data) {
 if(err) return console.log(err);
 res.send(data);

})
}
exports.deleteService2 =function (req,res) {
 const id  = req.params.id;
 console.log(id);
// db.query(`delete from service2 where id = ?`, [id] ,function (err,data) {
//  if(err) return console.log(err);
//  res.send(data);
// })
}
exports.updateService2  = function (req,res) {
 const text1 = req.body.text1;
 const text2 = req.body.text2;
 const text3 = req.body.text3;
 const text4 = req.body.text4;
 const text5 = req.body.text5;
 const text6 = req.body.text6;
 const text7 = req.body.text7;
 const text8 = req.body.text8;
 const text9= req.body.text9;
 const text10 = req.body.text10;
 const text11 = req.body.text11;
 const text12 = req.body.text12;
 const text13 = req.body.text13;
 const text14 = req.body.text14;
 db.query(`update service2 set  text1=?, text2 = ?, text3 = ?, text4= ?, text5= ?, text6= ?,text7= ?, text8 = ?,text9 = ?,text10 = ?,text11 = ?,text12 = ?,text13 = ?,text14 = ?`, [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14], function (err,data) {
  if(err) return console.log(err);
  res.send(data);
 })
}
exports.getService3 = function (req,res) {
db.query(`select * from service3`,function (err,data) {
 if(err) return console.log(err);
 res.send(data);

})
}
exports.deleteService3 =function (req,res) {
 const id  = req.params.id;
 console.log(id);
// db.query(`delete from service3 where id = ?`, [id] ,function (err,data) {
//  if(err) return console.log(err);
//  res.send(data);
// })
}
exports.updateService3 = function (req,res) {
 const text1 = req.body.text1;
 const text2 = req.body.text2;
 db.query(`update service3 set  text1=?, text2 = ?`, [text1, text2], function (err,data) {
  if(err) return console.log(err);
  res.send(data);
 })
}
exports.getFooter = function (req,res) {
 db.query('select *from footer', function (err,data) {
if (err) return console.log(err);
res.send(data);
 })

}
exports.deleteFooter = function (req,res) {
const id = req.params.id;
console.log(id);
// db.query(`delete from footer where id=?`, [id], function (err,data) {
//  res.send(data);
// })
}
exports.updateFooter = function (req,res) {
 const text1 = req.body.text1;
db.query(`update footer set text1 =?`, [text1], function (err,data) {
 if(err) return console.log(err);
 res.send(data);
})
}
exports.createMenu = function (req,res) {
const name = req.body.name;
const routerlink = req.body.routerlink;
db.query("INSERT INTO menu (name,routerlink) VALUES (?,?)", [name, routerlink], function (err,data) {
 if(err) return console.log(err);
 res.json({message: 'Menu created'});

})
}