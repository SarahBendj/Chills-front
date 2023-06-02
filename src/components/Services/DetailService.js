
// import Services from './index';
import Service from './Service';
import Form from './Form';


const ONE_SERVICE_URL = `services/1`

// const [ serviceInfo , setServiceInfo]= useState([]);




const diplayService = async( )=> {
  try{
    const response = await axios.get(ONE_SERVICE_URL,
     
      {
         headers : {'Content-Type': 'application/json'}
      }
    )
    console.log(response.data)

  }catch(error){
    console.error(error)
  }
  
}



const DetailService = ({  name, description, img, price ,extra ,technic, discount}) => {
  return (
    <div className='detail-page'>
      <div className='detail-page-service'>
       
       {/* <Service name={name} description={description} img={img} price={price} /> */}
      </div>
  
      <div className='detail-page-form'> </div>
      < Form  extra={ extra } technic={technic} discount={discount}/>
    </div>
    
  );
};

export default DetailService;
