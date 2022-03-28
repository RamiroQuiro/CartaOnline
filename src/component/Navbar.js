import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="nav rounded  left-5">
    <button arial-label="dashboard" data-active className='pl-2'>
      <svg id="icon-dashboard" viewBox="0 0 24 24">
        <path d="M12.984 3h8.016v6h-8.016v-6zM12.984 21v-9.984h8.016v9.984h-8.016zM3 21v-6h8.016v6h-8.016zM3 12.984v-9.984h8.016v9.984h-8.016z"></path>
      </svg>
    </button>
    <button arial-label="analytics">
      <svg id="icon-pie_chart" viewBox="0 0 24 24">
        <path d="M13.031 13.031h8.953q-0.328 3.563-2.859 6.094t-6.094 2.859v-8.953zM13.031 2.016q3.563 0.328 6.094 2.859t2.859 6.094h-8.953v-8.953zM11.016 2.016v19.969q-3.797-0.375-6.398-3.234t-2.602-6.75 2.602-6.75 6.398-3.234z"></path>
      </svg>
    </button>
    <button arial-label="wallet">
      <svg id="icon-account_balance_wallet" viewBox="0 0 24 24">
        <path d="M15.984 13.5q0.609 0 1.055-0.422t0.445-1.078-0.445-1.078-1.055-0.422-1.055 0.422-0.445 1.078 0.445 1.078 1.055 0.422zM12 15.984v-7.969h9.984v7.969h-9.984zM21 18v0.984q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-13.969q0-0.844 0.586-1.43t1.43-0.586h13.969q0.797 0 1.406 0.609t0.609 1.406v0.984h-9q-0.844 0-1.43 0.586t-0.586 1.43v7.969q0 0.844 0.586 1.43t1.43 0.586h9z"></path>
      </svg>
    </button>
  </nav>
  )
}
