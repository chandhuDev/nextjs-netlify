
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <form style={{
      borderRadius:10,
      borderWidth:2,
      borderStyle:'solid',
      borderColor:'black',
      width:500,
      height:500,
      backgroundColor:'green',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      
      
      }}>
          
         <div style={{margin:10,}}><input type="text" id="name" name="name" placeholder='Name..' /></div> 
          
          <div style={{margin:10}}><input type="email" id="email" name="email" placeholder='Email..'/></div>
          
          
          
          <div style={{margin:10}}><input type="text" id="Designation" name="Designation" placeholder='Designation..'/></div>
         <div style={{margin:10,paddingLeft:100}}><input type="file" id="image" name="image"  /></div> 
          <div style={{margin:10}}><button type="submit">Submit</button></div>
     </form>
     </div>
  )
}
