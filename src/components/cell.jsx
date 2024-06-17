function Cell({filled,onClick})={
    return <button
     type='button' 
     onClick={onClick}
      className={filled ? 'cell cell-activated':'cell'} />
}

export default Cell