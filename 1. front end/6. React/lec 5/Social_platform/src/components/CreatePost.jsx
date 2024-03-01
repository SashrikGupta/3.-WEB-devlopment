import React , {useContext , useRef} from 'react';
import { PostContext } from '../store/PostContext';

export default function CreatePost() {

  const nowContext = useContext(PostContext) ; 

  const useridval = useRef() ; 
  const titleval = useRef() ; 
  const textval = useRef() ;
  const tagsval = useRef() ;  
  



  const handleSubmit = (event) => {
    event.preventDefault();
    const useid = useridval.current.value            ; 
    const title = titleval.current.value             ; 
    const text = textval.current.value               ; 
    const tags = tagsval.current.value.split(' ')    ;
    console.log(tags)                                ; 
    nowContext.add(title , text , useid , tags )             ; 
    useridval.current.value = ""                     ; 
    titleval.current.value = ""                      ;
    textval.current.value = ""                       ;
    tagsval.current.value = ""                       ;

  };

 
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="ok1" className="form-label">user id </label>
        <input
          type="text"
          className="form-control"
          id="ok1"
          ref = {useridval}
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="ok2" className="form-label">Enter your title</label>
        <input
          type="text"
          className="form-control"
          ref = {titleval}
          id="ok2"
        />
      </div>
      <div className="form-floating">
        <p>enter your text</p>
       <textarea className="ok3" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px' , width : '100%'}} ref ={textval}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="ok4" className="form-label">Enter your tags</label>
        <input
          type="text"
          className="form-control"
          id="ok4"
          ref = {tagsval}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
