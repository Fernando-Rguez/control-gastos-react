import { useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form className='campo'>
            <label htmlFor="filtro">Filtrar Gastos</label>
            <select id="filtro" value={filtro} onChange={ e => setFiltro(e.target.value)}>
                <option value="">-- Todas las Categorías --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="divercion">Diverción</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
        </form>
    </div>
  )
}

export default Filtros
