import React, { useEffect, useState } from 'react'
import Navigation from '../../../Navigation bar/Navigation'
import { useParams } from 'react-router'
import "./styles/Detailed.css"
import axios from 'axios'
import Info from './Info'
import Scoreboard from './Scoreboard'
import Commentary from './Commentary'
import FOW from './FOW'
import TeamDetails from './TeamDetails'
import moment from 'moment'
import { Link } from 'react-router-dom'


function DetailedLivescore() {
    let params = useParams()


    const[live,setLive] = useState([])

    useEffect(() => {

        var options = {
        method: 'GET',
        url: 'https://livescore6.p.rapidapi.com/matches/v2/detail',
        params: {Eid: `${params.Eid}`, Category: 'cricket', LiveTable: 'true'},
        headers: {
            'x-rapidapi-host': 'livescore6.p.rapidapi.com',
            'x-rapidapi-key': '056a22b0f4mshea0efbf44ab23d2p1349c2jsn2654dfa519cb'
        }
        };

        axios.request(options).then(function (response) {
            setLive(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    },[1])
    
    return (
        <div className="lve">
            <div className="lve-nav">
                <Navigation/>
            </div>
                
            <div className="lve-nxt">
                <div className="lve-info">
                    {
                        live && <Info live={live}/>
                    }
                    
                </div>

                <div className="lve-scoreboard">
                    { 
                        
                            live && <Scoreboard live={live} params={params.Eid}/>
                        
                    }
                    
                </div>

                <div className="lve-team">
                {
                    
                        (live&&live.Prns&&live.T1&&live.T2) && <TeamDetails live={live} players={live.Prns} team1={live.T1} team2={live.T2}/>
                }
                </div>
            </div>
            
        </div>
    )
}

export default DetailedLivescore
