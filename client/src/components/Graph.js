import React, { useState, useEffect, useContext } from 'react';
import MediaQuery from 'react-responsive';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';
import { ActiveLinkContext } from '../context/ActiveLinkContext';
import styled from 'styled-components';
import { darkViolet, cyan, white, grey, red, breakpoint, Input } from '../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const GraphBox = styled.div`
    background: ${darkViolet};
    min-height: 50vh;
    padding: 2vh 2vw;
    color: ${grey};
    .date span {
            font-size: larger;
            color: ${cyan};
            white-space: nowrap;
            @media (min-width: ${breakpoint}){
                display: block;
            }
        }
    }
    .error {
        font-size: smaller;
    }
    @media (min-width: ${breakpoint}) {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        div {
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`

const DateInput = styled(Input)`
    background: none;
    color: ${white};
    width: auto;
    display: block;
`

const Error = styled.p`
    color: ${red};
    border: 1px solid ${red};
    padding: 1vh 1vw;
    border-radius: 5px;
`


export const Graph = ({loading}) => {
    const [ activeLink, setActiveLink ] = useContext(ActiveLinkContext);
    const [ firstDate, setFirstDate ] = useState(Date.now() - 518400000);
    const [ clickData, setClickData ] = useState([]);
    const [ totalClicks, setTotalClicks ] = useState(0);
    const [ error, setError ] = useState('');

    const styles = {
        fontSize: "smaller",
    }

    useEffect( () => {
        const data = [];
        const clickArr = [[], [], [], [], [], [], []];
        const dateArr = [new Date(firstDate).toString().substring(0,10)];
        for (let i = 1; i < 7; i++){
            dateArr.push(new Date((i * 86400000) + firstDate).toString().substring(0,10));
        }
        activeLink.click
            .filter( click => dateArr.includes(new Date(click.date).toString().substring(0, 10)))
            .map( click => {
                const index = dateArr.indexOf(new Date(click.date).toString().substring(0, 10));
                clickArr[index].push(new Date(click.date)); 
            })
        for (let i = 0; i < 7; i++){
            data[i] = {date: dateArr[i].substring(4, 10), clicks: clickArr[i].length}
        }
        setClickData(data);
    }, [firstDate, activeLink]);

    useEffect( () => {
        setTotalClicks( () => clickData.reduce( (sum, date) => sum += date.clicks, 0 ));
    }, [clickData])
    
    const selectDate = (event) => {
        setError('');
        event.target.validity.valid ? setFirstDate(Math.floor(new Date(event.target.value).getTime())) : setError(["Please enter date in format 'yyyy-mm-dd'"]);
    }

    return (
        <GraphBox>
            <div className="date">
                <DateInput type="date" id="date" onChange={selectDate} readonly/>
                { error !== '' && <Error className="error"><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</Error> }
                <p>WEEK COMMENCING: <span>{new Date(firstDate).toString().substring(0, 10)}</span></p>
                <p>WEEK COUNT: <span>{totalClicks}</span></p>
            </div>
            <MediaQuery maxWidth={breakpoint}>
                <BarChart width={300} height={300} data={clickData} style={styles}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Bar dataKey="clicks" barSize={20} fill={cyan}/>
                </BarChart>
            </MediaQuery>
            <MediaQuery minWidth={breakpoint}>
                <BarChart width={600} height={300} data={clickData} style={styles}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Bar dataKey="clicks" barSize={30} fill={cyan}/>
                </BarChart>
            </MediaQuery>
        </GraphBox>
    )
}