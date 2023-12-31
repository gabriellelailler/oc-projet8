import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

const defaultTextStyle = {
    fontSize: '16px'
};

export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p style={defaultTextStyle}><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                a-propos-{firstName} </p>
            <p style={defaultTextStyle}><span style={{color: info.baseColor}}>a-propos-{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={defaultTextStyle}><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd compétences/outils
            </p>
            <p style={defaultTextStyle}><span style={{color: info.baseColor}}>compétences/outils <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ ...{ color: info.baseColor }, ...defaultTextStyle }}> Intermédiaire en </p>
            <ul className={Style.skills} style={defaultTextStyle}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ ...{ color: info.baseColor }, ...defaultTextStyle }}> Débutante en</p>
            <ul className={Style.skills} style={defaultTextStyle}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p style={defaultTextStyle}><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                loisirs/passions</p>
            <p style={defaultTextStyle}><span style={{color: info.baseColor}}>loisirs/passions <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul style={defaultTextStyle}>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}