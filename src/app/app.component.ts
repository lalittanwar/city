import { Component } from '@angular/core';
import { CityService } from './city.service';
import  {City} from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'location';
  citys:any;  
  city:String;
  code:String;
    constructor(private fs:CityService) { }
  
    ngOnInit() { 
      this.get();
    }
  
  
    get(){
      this.fs.getCity()
      .subscribe(city=>this.citys=city)
    }
  
    add(myform){
      const newcity:City={
        city:myform.value.city,
        code:myform.value.code
       }
       console.log(newcity);
       this.fs.addCity(newcity)
       .subscribe(city=>
        { this.citys.push(city);
          console.log(newcity);
          console.log(city);
          this.get();
          console.log(city);
        })
    }
   
    
    deleted(id1:any){
      console.log(id1);
      var citys=this.citys;
  
  
      this.fs.deletecity(id1)
      .subscribe(data=>{ 
         //if(data.n==1) 
         for(var i=0;i<citys.length;i++){
         if(citys[i]._id==id1){
        citys.splice(i,1);
        break;
         }
         }
  })
    }
  }
  