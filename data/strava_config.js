import strava from 'strava-v3';

class Strava extends Component {
    strava.athlete.get({
        "access_token"    :"010c4cc1d24e48f21aba372fa5c3bf399cc1e6ac"
        , "client_id"     :"13430"
        , "client_secret" :"651361629b6043c8566a897a449f439c893233f3"
        , "redirect_uri"  :"localhost:3000"
    },function(err,payload) {
        if(!err) {
            console.log(payload);
        }
        else {
            console.log(err);
        }
    });

}

export default Strava;