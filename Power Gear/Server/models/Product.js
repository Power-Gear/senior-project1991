
module.exports=(connection,DataTypes)=>{

  const Product = connection.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outOfStock:{
     type: DataTypes.BOOLEAN,
     defaultValue:false
    }
  });
  
 return Product

}


