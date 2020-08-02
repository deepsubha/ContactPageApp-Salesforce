import { LightningElement , wire } from 'lwc';
import foobar from "@salesforce/apex/FirstComponent.foobar";

export default class FirstComponent extends LightningElement {

    @wire(foobar)
    checkData(data,error){
        if(data){
            console.log(data.data);
        }
        else{
            console.log(data.error);
        }
    }
    // @wire(f)
    // function checkData({data,error}) {
    //     if(data)
    //         console.log(data);
    //     else
    //         console,log(error);
        
    // }

}