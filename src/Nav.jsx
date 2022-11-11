import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <ul>
        <li className='text-3xl flex flex-col lg:flex-row'>
            <Link className='px-32' to={"/"}>Song List</Link>
            <Link className='px-32' to={"/NewSong"}>New Song</Link>
            <Link className='px-32' to={"/About"}>About</Link>
        </li>
    </ul>
    </>
  )
}
