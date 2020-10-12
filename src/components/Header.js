import React from 'react'

function Header() {
  const styleHeader = {
    padding: 60,
    textAlign: 'center',
    background: '#1abc9c',
    color: '#fff',
    fontSize: 40,
    marginTop: 20
  }

  return (
    <header className="header" style={{margin: '20px 0'}}>
      <h1 style={styleHeader} className="text-center display-4">React Expense Tracker</h1>
    </header>
  )
}

export default Header