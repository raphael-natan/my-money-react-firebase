import React from 'react'
import Rest from '../../utils/rest'
import { Link } from 'react-router-dom'

const baseURL = 'https://mymoney-dev.firebaseio.com/'
const { useGet } = Rest(baseURL)

const Meses = () => {
    const data = useGet('meses')
    if (data.loading) {
        return (<p>Carregando...</p>)
    }
    if (Object.keys(data.data).length > 0) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mês</th>
                        <td>Previsão de entrada</td>
                        <td>Entrada</td>
                        <td>Previsão de saída</td>
                        <td>Saída</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(data.data)
                            .map(mes => {
                                return (
                                    <tr key={mes}>
                                        <td><Link to={`/movimentacoes/${mes}`}>{mes}</Link></td>
                                        <td>{data.data[mes].previsao_entrada}</td>
                                        <td>{data.data[mes].entradas}</td>
                                        <td>{data.data[mes].previsao_saida}</td>
                                        <td>{data.data[mes].saidas}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }
    return (null)

}

export default Meses
