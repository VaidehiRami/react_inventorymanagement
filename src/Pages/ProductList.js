import React,{useContext,useState} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Card ,ListGroup,Badge, Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './ProductList.css';


  const ProductList = () => {
    const{product}=useContext(GlobalContext);
    // const [design, setDesign] = useState({opacity: '0'});

function badgsnew(new1){
  if (new1) {
    return (
      <Badge className="new_item" bg="info">
        New
      </Badge>
    );}
}
   function badgssale(sale1){
  if (sale1) {
    return (
      <Badge className="sale_item" bg="danger">
        Sale
      </Badge>
    );}
}
     
  

  return (
    <>
    
        <h5>Product List </h5>
        <div className=' d-flex maindiv'>
          
        { product.map((product)=>
        
        <Card   variant="Light" className='cardMain' >
          <i class="fa-regular fa-heart fav" 
            style={{position:'absolute',
                   top:'10px',
                   left:'10px',
                  }}>
          </i>  
         
             <ListGroup variant="Light" key={product.id} > 
               <Card.Img variant="top" 
                    src={product.image} alt={product.product} 
                     style={{width:'300px',
                             height:'200px'}}/> 
                    <div className='divquick'> 
                  <Button  variant="light" className='quickview'>Quick View
                </Button></div>         

                             <h6 className='badgesNewSale'>
                               
                               {
                                 badgsnew(product.newitem)
                               }
                               {
                                 badgssale(product.itemsale)
                               }
                               </h6>

                {/* {product.newitem && (
                <h6
                 className='badgesNewSale'
                >
                  <Badge  bg="info" className='new_item'>New</Badge>
                </h6>
              )}
              {product.itemsale && (
                <h6
                className='badgesNewSale'
                >
                  <Badge  bg="danger" className='sale_item'>Sale</Badge>
                </h6>
              )} */}
                     
               {/* { product.newitem ? 
               <h6><Badge  bg="info" style={{top:'25px',right:'2px',position:'absolute'}}> New</Badge></h6> : 
               <h6><Badge bg="danger" style={{top:'25px',right:'2px',position:'absolute'}} >Sale</Badge></h6>
               }   */}
                <div > <button   className='addtocartbtn '>ADD TO CART</button></div>
               <div >
                    <Card.Title style={{color:'gray',
                        fontSize:'12px',
                        marginTop:'12px',lineHeight:'20px',textTransform:'uppercase'}}>{product.category}
                      </Card.Title>
                    
                    <Card.Subtitle className="mb-2 cardsub" 
                        style={{fontSize:'14px',lineHeight:'20px',marginTop:'7px',textTransform:'capitalize'}}>
                          {product.product}
                    </Card.Subtitle>
                    <span  style={{position:'absolute',
                    top:'240px',
                    right:'15px',
                    width:"15px",
                    height:"15px", 
                    borderRadius:"50%", 
                    lineHeight:'18px',
                    border: "1px solid black",backgroundColor:`${product.color[0]}`}}></span>
                   
                    <div style={{fontSize:'10px',lineHeight:'20px'}}>
                           
                          <i class="fa-solid fa-star" ></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i> 
                                        
                    </div>
                <Card.Text style={{marginTop:'8px',fontSize:'13px',
                fontWeight:'bold',lineHeight:'20px'}}>{`$  ${parseFloat(product.amount).toFixed(2)}`}</Card.Text>



                <div style={{marginTop:'-8px'}}>
                    {product.color.map((c, index) => (
                                                  <span
                                                    key={index}
                                                    style={{
                                                      height: "16px",
                                                      width: "16px",
                                                      backgroundColor: c,
                                                      borderRadius: "50%",
                                                      display: "inline-block",                                           
                                                      margin:"1px", 
                                                      lineHeight:'20px'                                   
                                                    }}
                                                    
                                                  ></span> ))}
                 </div>
                {console.log("New-Item", product.newitem)}
                {console.log("sale-Item", product.itemsale)}
                    <div style={{marginTop:'27px',lineHeight:'20px'}}> 
                      <Form.Check type='checkbox' label='Add To Compare' className='chkcompare' />
                    </div>
            </div>  
               
          
             </ListGroup>
           
          
         
          

          </Card> 
          )}
       </div>  
        
    </>
  )
}

export default ProductList