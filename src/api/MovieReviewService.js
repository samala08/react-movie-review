import axios from 'axios'

class MovieReviewService {

executeReviewList(title){
   // alert('inside executeReviewList'+ title)
    console.log('executed executeReviewList service-->');
   // return axios.get('http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/movies')

  return axios.get('http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/getReviewByMovieTitle?title='+title);
    
}  

executeAddReview(title,rating,userName,comment){
   //alert('inside executeAddReview'+ title+rating+userName+comment)
   console.log('executed executeAddReview service-->');
 
 return axios.post('http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/addReview?username='+userName+'&title='+title+
                        '&comment='+comment+'&starrating='+rating );
   
}  




}



 
export default new MovieReviewService();