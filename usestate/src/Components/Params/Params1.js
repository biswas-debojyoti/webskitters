import React from 'react'
import { Link } from 'react-router-dom'

export default function Params1() {
    return (
        <div>

            <Link to="/Params2/lion" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">LION</Link>
            
            <Link to="/Params3/tiger" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">TIGER</Link>

        </div>
    )
}
