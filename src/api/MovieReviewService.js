import axios from 'axios'

class MovieReviewService {

executeReviewList(title){
   // alert('inside executeReviewList'+ title)
    console.log('executed executeReviewList service-->');
   // return axios.get('http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/movies')

  return axios.get('http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/getReviewByMovieTitle?title='+title);
    
}  
}
 
export default new MovieReviewService();