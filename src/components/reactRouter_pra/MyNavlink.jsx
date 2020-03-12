import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavlink(props) {
    return (
        <NavLink {...props} activeClassName='activeClass' />
    )
}