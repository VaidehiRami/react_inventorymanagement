import React ,{useState,useContext}from 'react';
import { useNavigate } from 'react-router-dom';
import { Card,Form,Row,Col,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalState';
import './AddProduct.css';

const AddProduct = () => {

    const productlist=useNavigate();
    const [category,setCategory]=useState('');
    const [product,setProduct]=useState('');
    const [amount,setAmount]=useState(0);
    const [color,setColor]=useState([]);
    const [newitem,setNewitem]=useState(false);
    const [itemsale,setItemsale]=useState(false);
    const [imageupload,setimageupload]=useState();
    const[imagedata,setImagedata]=useState();
   
    const{addProduct}=useContext(GlobalContext);

    let formValid = false;

  if (category && product && amount && imagedata && color) {
    formValid = true;
  }

    const onSubmit = (e) => {
      e.preventDefault();
      const newProduct = {
        id: Math.floor(Math.random() * 100000000),
        category,
        product,
        amount,
        color,
        newitem,
        itemsale,
        image:imagedata
      } 
      addProduct(newProduct);

      productlist('/productlist');

    };

    const resetClick=()=>{
      setCategory('');
      setProduct('');
      setAmount();
      setColor('');
      setNewitem('');
      setItemsale('');
      setImagedata();
    };
    const cancleClick=()=>{
      productlist('/productlist');
    };
    const ColorClick = (e) => {
      setColor([...color, e.target.value]);
    };
  

    const imageUpload=(event)=>{
      console.log(event.target.files[0]);
      console.log('image button click..');

      const {files}  = event.target;
      if (FileReader && files && files.length) {
       const render=new FileReader();
       render.onload=function(){
         setImagedata(render.result);

       };
       render.readAsDataURL(files[0]);
       setimageupload(files[0]);
    }
    };
    

  return (
    <div className='contariner'>
    <div className='main'>
      <div style={{marginTop:'20px'}}>
      <Card className='carddtl'>
        <div style={{marginTop:'5px'}}>  
            <div style={{float:'left'}}> 
                <h5 style={{margin:'15px'}}> ADD Product </h5>
            </div>
            <div style={{float:'right',marginRight:'25px',marginTop:'15px',width:'10px',fontSize:'12px'}}>
            <i
               role="button"
              className="bi bi-x-lg float-end"
              onClick={cancleClick} />
                {/* <button type="button" class="close" aria-label="Close" 
                    style={{border:'none',background:'none',width:'10px'}} onClick={cancleClick}>
                   <span aria-hidden="true" style={{color:'gray',width:'10px',fontSize:'22px'}}>&times;</span>
                </button> */}
            </div>
        </div><hr style={{marginTop:'5px'}}/>
      
              <Form style={{margin:'10px'}} >
                  <Row>
                  <Form.Group as={Col} >
                    <Form.Label className='formlabel'>Category</Form.Label>
                        <Form.Select defaultValue={" "} onChange={(e) => setCategory(e.target.value)} 
                        style={{borderRadius:' 2em',color:'gray'}} required  className='txtcate'>
                            <option value="">Select Category </option>
                            <option>Men</option>
                            <option>Women</option>
                            <option>Kids</option>
                          </Form.Select>
                    </Form.Group>
                   
                  <Form.Group as={Col} >
                    <Form.Label className='formlabel'>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product"  
                     onChange={(e) => setProduct(e.target.value)} style={{borderRadius:' 2em'}} className='txtprod' required/>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label className='formlabel'>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price" 
                     onChange={(e) => setAmount(e.target.value)} style={{borderRadius:' 2em'}} className='txtprice' required/>
                  </Form.Group>
              </Row>

                  <Row className="mb-3"  style={{marginTop:'15px'}}>
                            <Form.Group as={Col} style={{marginTop:'11px'}}>
                              <Form.Label className='formlabel'>Color(s) 
                              <Form.Control
                                        type="color"
                                        id="colorinput"                                                                      
                                        style={{marginLeft:'60px',marginTop:'-30px'}}
                                        onChangeCapture={ColorClick}
                                        className="txtcolor"
                                      />
                                       {color.length > 0 && (
                                      <div  style={{marginLeft:'100px',marginTop:'-33px',borderRadius:'2em'
                                       ,border: '1px solid lightgray',minHeight:'40%',minWidth:'30%',boxShadow:'1px 2px 5px whitesmoke'}}>
                                       {color.map((c, index) => (
                                          <span
                                            key={index}
                                            style={{
                                              height: "20px",
                                              width: "20px",
                                              backgroundColor: c,
                                              borderRadius: "50%",
                                              display: "inline-block",
                                              border: "1px solid black",
                                              padding:'5px',
                                              marginLeft:'8px',
                                              marginTop:'5px',
                                              marginRight:'5px'                                      
                                            }}
                                          ></span>
                                        ))}
                                      </div> )}
                              </Form.Label>                             
                            </Form.Group>

                            <Form.Group as={Col} id="formGridCheckbox" style={{marginTop:'11px'}}>
                                <Form.Check type="checkbox" label="New Item"   
                                onChange={(e) => setNewitem(!newitem)}/>
                          </Form.Group>   
                          <Form.Group as={Col} id="formGridCheckbox" style={{marginTop:'11px'}}>
                              <Form.Check type="checkbox" label="Item for Sale" 
                              onChange={(e) => setItemsale(!itemsale)}/><br/><br/>
                          </Form.Group>
                          <div>
                            <span style={{margin:'15px'}}>Product Image</span>
                           
                          <div className='divimage' >
                          <Form.Group  style={{marginTop:'5px',marginLeft:'20px'}}>
                          <input type="file" multiple accept="image/*" onChange={imageUpload} required id='imgfile'/><br/><br/>
                          </Form.Group>
                          </div>
                          </div>
                                                  
                           <hr style={{ margin: "0" }} /> 
                                            
                  </Row> 
                  {/* <div></div> */}
                  <div className='btndisplay'>
                  <Button variant="outline-dark" type="reset" className='btnreset'
                   onClick={resetClick} >
                            Reset
                          </Button>
                          <Button variant="primary" type="submit"
                          onClick={onSubmit} className="btnsubmit"
                          disabled={!formValid} >
                            Add Product
                          </Button>
                  </div>
                  

              </Form>
        </Card>
      </div>
       
        
      </div>   
    </div>
  )
}

export default AddProduct