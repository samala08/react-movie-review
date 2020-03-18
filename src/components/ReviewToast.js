import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';



class ReviewToast extends Component {
    state = {  }
    render() { 


        
        return ( 
    <div>
     <div className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
            Hurry   
          </ToastHeader>
          <ToastBody>
           Review saved successfully.
          </ToastBody>
        </Toast>
      </div>
    </div>





         );
    }
}
 
export default ReviewToast;