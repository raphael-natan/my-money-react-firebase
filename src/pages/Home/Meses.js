import React from 'react'
import Rest from '../../utils/rest'
import { Link, Redirect } from 'react-router-dom'

const baseURL = 'https://mymoney-dev.firebaseio.com/'
const { useGet, useDelete } = Rest(baseURL)

const Meses = () => {
    const data = useGet('meses')
    const [removeData, remover] = useDelete()

    const removerMes = async (id) => {
        await remover(`meses/${id}`)
        data.refetch()
    }

    if (data.loading) {
        return <p>Carregando...</p>
    }

    if (data.error && data.error === 'Permission denied') {
        return <Redirect to='/login' />
    }

    if (!(data.data) || Object.keys(data.data).length > 0) {
        return (
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Mês</th>
                        <th>Previsão de entrada</th>
                        <th>Entrada</th>
                        <th>Previsão de saída</th>
                        <th>Saída</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !(data.data) && <tr><td>Sem movimentações</td></tr>
                    }
                    {
                        (data.data) &&
                        Object.keys(data.data)
                            .map(mes => {
                                return (
                                    <tr key={mes}>
                                        <td><Link to={`/movimentacoes/${mes}`}>{mes}</Link></td>
                                        <td>{data.data[mes].previsao_entrada}</td>
                                        <td>{data.data[mes].entradas}</td>
                                        <td>{data.data[mes].previsao_saida}</td>
                                        <td>
                                            {data.data[mes].saidas} {''}
                                            <button className='btn btn-danger' onClick={() => removerMes(mes)}>-</button>
                                        </td>
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
