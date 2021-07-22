import { Switch, Route, NavLink, useRouteMatch, useParams, Redirect  } from "react-router-dom";
import React from 'react';
import hazel from './../images/hazel.jpg';
import tubby from './../images/tubby.jpg';
import whiskey from './../images/whiskey.jpg';

function Dog() {
    const { dogname } = useParams();
         switch(dogname) {
            case 'whiskey':
            return <div className="dogggyInfo">
            <h2> Name: {dogname.toUpperCase()}</h2>
            <p>Age: 4</p>
            <p>Whiskey loves popcorn on the rocks</p>
            <p>Whiskey is a cocktail drink buddy</p>
            <p>Whiskey listens to you and hugs you!</p>
             </div>;
            
         
             case 'hazel': 
             return <div className="dogggyInfo">
             <h2> Name: {dogname.toUpperCase()}</h2>
             <p>Age: 0</p>
             <p>Hazel is a very intelligent puppy!!</p>
             <p>Hazel has soooo much energy!!</p>
             <p>Hazel loves people like you!</p>
              </div>;
              
     
              case 'tubby':  
              return <div className="dogggyInfo">
             <h2> Name: {dogname.toUpperCase()}</h2>
             <p>Age: 4</p>
             <p>Tubby is a little silly but cute</p>
             <p>Tubby snores like a machine!</p>
             <p>Tubby likes watching movies and cat-napping</p>
              </div>;
            
             default:
              return;
      }

}

export default function Dogs() {
    const match = useRouteMatch();
    console.log(match.path);
    return (
        <div>
            <h1>HELLOZ. WE HAVE DOGZZZ. CLICK ON THEM FOR MORE INFO!!</h1>
            <p>
                <NavLink to={`/dogs/whiskey`}><img src={whiskey} alt="whiskey"/></NavLink>
                <NavLink to={`/dogs/hazel`}><img src={hazel} alt="hazel"/></NavLink>
                <NavLink to={`/dogs/tubby`}><img src={tubby} alt="tubby"/></NavLink>
            </p>

            <Switch>
                <Route path={`/dogs/:dogname`} component={Dog} />
                <Route path={"/dogs"}>
                    <h3>SELECT DOG !</h3>
                </Route>
                <Route path="*">
                <Redirect to="/dogs" />
                </Route>
            </Switch>
        </div>
    );
}
